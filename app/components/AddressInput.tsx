"use client";

import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete from "use-places-autocomplete";
// @ts-ignore
import useOnclickOutside from "react-cool-onclickoutside";

const libraries: ("places")[] = ["places"];

// Separate component that uses the autocomplete hook
function PlacesAutocompleteInput({
  onSelect,
}: {
  onSelect: (address: string) => void;
}) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    requestOptions: {
      componentRestrictions: { country: "us" },
    },
  });

  const ref = useOnclickOutside(() => clearSuggestions());

  return (
    <div ref={ref} className="relative z-50 w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Enter your home address"
        className="w-full border-2 border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-black disabled:bg-gray-100 disabled:cursor-not-allowed shadow-sm text-base"
      />

      {status === "OK" && (
        <ul className="absolute left-0 right-0 border rounded-2xl mt-2 bg-white shadow-lg z-50 max-h-60 overflow-y-auto">
          {data.map((suggestion: { place_id: string; description: string }) => (
            <li
              key={suggestion.place_id}
              className="px-6 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 text-base"
              onClick={() => {
                setValue(suggestion.description, false);
                clearSuggestions();
                onSelect(suggestion.description);
              }}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Main component that loads the Google Maps script
export default function AddressInput({
  onSelect,
}: {
  onSelect: (address: string) => void;
}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  // Loading error
  if (loadError) {
    return (
      <div className="w-full border-2 border-red-300 rounded-full px-6 py-3 bg-red-50 text-red-600 shadow-sm text-base">
        Error loading Google Maps. Please check your API key.
      </div>
    );
  }

  // Loading state
  if (!isLoaded) {
    return (
      <input
        disabled
        placeholder="Loading Google Maps..."
        className="w-full border-2 border-gray-300 rounded-full px-6 py-3 bg-gray-100 cursor-not-allowed shadow-sm text-base"
      />
    );
  }

  return <PlacesAutocompleteInput onSelect={onSelect} />;
}
