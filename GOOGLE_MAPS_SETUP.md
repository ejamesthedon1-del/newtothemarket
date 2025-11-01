# Google Maps API Setup Guide

This project uses Google Places API for address autocomplete functionality in the hero section.

## Setup Instructions

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services > Credentials**
4. Click **Create Credentials > API Key**
5. Copy the generated API key

### 2. Enable Required APIs

Make sure to enable the following APIs for your project:
- **Places API** - For address autocomplete functionality
- **Geocoding API** - For converting addresses to coordinates (if needed)

### 3. Configure API Key Restrictions

For security, it's recommended to restrict your API key:

1. **Application restrictions**: 
   - Select **HTTP referrers**
   - Add your domain(s) (e.g., `*.yourdomain.com`, `localhost:*` for development)

2. **API restrictions**:
   - Select **Restrict key**
   - Choose **Places API** (and Geocoding API if needed)

### 4. Add API Key to Environment

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

### 5. Restart Development Server

After adding the API key, restart your development server:
```bash
npm run dev
```

## Usage

The Google Places autocomplete is implemented in:
- `app/components/AddressInput.tsx` - Main autocomplete component
- Used in the hero section of `app/page.tsx`

### Features
- Real-time address suggestions as you type
- Restricts to US addresses by default
- Clean, styled dropdown with hover effects
- Click outside to close suggestions
- Loading and error states handled

## Troubleshooting

### API Key Issues
- Ensure the Places API is enabled for your project
- Check that your API key has the correct restrictions
- Verify the key is correctly set in `.env.local`

### Development Issues
- Make sure `.env.local` is in your project root
- Restart the development server after changing environment variables
- Check browser console for Google Maps API errors

## Security Notes

- Never commit your actual API key to version control
- Use environment variables for sensitive configuration
- Consider using different API keys for development and production
- Regularly rotate your API keys for security

## API Quotas and Costs

- Google Places API has a free tier with monthly quotas
- Monitor your API usage in the Google Cloud Console
- Set up budget alerts to avoid unexpected charges
- Consider implementing caching for frequently used addresses