# Kyte Clearance Sale Visual Browser

A React + TypeScript + Vite app for visually browsing Kyte clearance sale items and their print options.

## Quick Start

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open the app at `http://localhost:5173`

3. Click the **⚙ Data Editor** button (bottom right) to import your clearance items

4. Paste your JSON-formatted items data and click "Import Items"

## Project Structure

```
src/
├── App.tsx                 # Main app component with search & filter
├── App.css                 # App styling & layout
├── components/
│   ├── ItemCard.tsx        # Individual item display card
│   ├── ItemCard.css        # Card styling
│   ├── PrintGallery.tsx    # Print details modal
│   ├── PrintGallery.css    # Modal styling
│   ├── DataManager.tsx     # JSON data import panel
│   └── DataManager.css     # Editor styling
├── data/
│   └── clearanceData.ts    # Data types and sample items
└── index.css               # Global styles
```

## Features

✨ **Visual Grid Layout** - See all items at a glance
🔍 **Search & Filter** - Find by item name, print, or category
🎨 **Print Information** - Links to Kyte's print gallery
📋 **Easy Data Import** - Paste JSON to load your clearance list
📱 **Responsive Design** - Works on desktop and mobile

## Data Format

Items must be JSON with this structure:

```json
[
  {
    "id": "unique-id",
    "name": "Item Name",
    "category": "Category Name",
    "prints": ["Print 1", "Print 2", "Print 3"],
    "notes": "Optional details",
    "imageUrl": "optional-product-image-url"
  }
]
```

See EXAMPLE_DATA.ts for a complete example.

## Available Scripts

- `npm run dev` - Start dev server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Component Overview

### ItemCard
Displays a single item with its name, category, and available prints.
- Shows prints as clickable tags
- Hover effects for interactivity
- Responsive grid layout

### PrintGallery
Modal popup when clicking a print name.
- Shows print name
- Links to Kyte's prints page
- Search instructions

### DataManager
Fixed panel to import items.
- JSON textarea for data input
- Error messages for invalid JSON
- One-click import

### App
Main component managing:
- Items state
- Search filtering
- Category filtering
- Modal visibility

## Customization Tips

1. **Colors** - Edit CSS variables in App.css (--primary-color, etc.)
2. **Grid Layout** - Adjust minmax() in .items-grid in App.css
3. **Print Names** - Match exactly with Kyte's website for consistency
4. **Categories** - Auto-generated from data, no hardcoding needed

## Workflow

1. Extract items from your Google Doc
2. Format each item as JSON object
3. Create array of all items
4. Open app
5. Click ⚙ Data Editor
6. Paste JSON
7. Click Import Items
8. Browse with search & filters!

## Troubleshooting

**JSON Import Error?**
- Check brackets, quotes, and commas
- Ensure "prints" is an array: ["print1", "print2"]
- Each item needs: id, name, category, prints

**Items not showing?**
- Open browser console (F12) for error messages
- Verify JSON syntax is valid

**Need to modify items?**
- Click ⚙ Data Editor again
- Update JSON and re-import
- Or edit EXAMPLE_DATA.ts directly and restart

## Next Steps

- Gather your clearance items from the Google Doc
- Format as JSON (see EXAMPLE_DATA.ts)
- Import into the app
- Start browsing and organizing!
