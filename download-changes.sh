#!/bin/bash

# Script to download all changed files from GitHub
# Run this in your local project directory

echo "🚀 Downloading changed files from GitHub..."
echo ""

# Base URL for raw files
BASE_URL="https://raw.githubusercontent.com/ejamesthedon1-del/newtothemarket/feature/homepage-redesign"

# Create directories if they don't exist
mkdir -p app/components
mkdir -p app/logos
mkdir -p public

# Download files
echo "📥 Downloading app/page.tsx..."
curl -o app/page.tsx "$BASE_URL/app/page.tsx"

echo "📥 Downloading app/components/ScoreCard.tsx..."
curl -o app/components/ScoreCard.tsx "$BASE_URL/app/components/ScoreCard.tsx"

echo "📥 Downloading app/components/MarketingPreview.tsx..."
curl -o app/components/MarketingPreview.tsx "$BASE_URL/app/components/MarketingPreview.tsx"

echo "📥 Downloading app/components/AddressInput.tsx..."
curl -o app/components/AddressInput.tsx "$BASE_URL/app/components/AddressInput.tsx"

echo "📥 Downloading app/logos/page.tsx..."
curl -o app/logos/page.tsx "$BASE_URL/app/logos/page.tsx"

echo "📥 Downloading app/globals.css..."
curl -o app/globals.css "$BASE_URL/app/globals.css"

echo "📥 Downloading tailwind.config.js..."
curl -o tailwind.config.js "$BASE_URL/tailwind.config.js"

echo "📥 Downloading logo files..."
curl -o public/smartrealtortool-new.svg "$BASE_URL/public/smartrealtortool-new.svg"
curl -o public/smartrealtortool-minimal.svg "$BASE_URL/public/smartrealtortool-minimal.svg"
curl -o public/smartrealtortool-tech.svg "$BASE_URL/public/smartrealtortool-tech.svg"

echo ""
echo "✅ All files downloaded successfully!"
echo ""
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"