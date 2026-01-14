# Kyte Clearance Sale - Visual Item Browser

A modern web app to visually browse and organize items from the Kyte clearance sale with their associated print options.

## Features

✨ **Visual Browse** - Grid layout to see all items at a glance
🔍 **Search & Filter** - Find items by name, print, or category
🎨 **Print Gallery** - Easy access to view print details
📋 **Data Management** - Import items from your clearance list
📱 **Responsive Design** - Works great on desktop and mobile

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone or open this project
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port)

## How to Use

### 1. Import Your Items Data

Click the **⚙ Data Editor** button in the bottom right corner to open the data manager.

### 2. Format Your Items as JSON

Your items should be formatted like this:

```json
[
  {
    "id": "1",
    "name": "Sleep Bag - Large",
    "category": "Sleep Bags",
    "prints": ["Wildflower", "Meadow Green", "Ocean Blue"],
    "notes": "Organic cotton"
  },
  {
    "id": "2",
    "name": "Quilt",
    "category": "Bedding",
    "prints": ["Cloud White", "Sage"],
    "imageUrl": "https://example.com/quilt.jpg"
  }
]
```

### 3. Extract Data from Google Doc

From your Kyte clearance Google Doc:
- List the item name
- List each print variant on the same or next lines
- Group items by category

Convert to JSON format (category field is optional but helpful for filtering)

### 4. Browse and Search

- **Search Bar**: Type to find items by name or print name
- **Category Filters**: Click buttons to show only specific categories
- **Print Tags**: Click any print name to see print details

## Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder

## Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool with HMR
- **CSS Grid & Flexbox** - Responsive layouts

## Tips for Adding Items

1. **Use meaningful IDs** - Simple numbers or short codes work well
2. **Standardize print names** - Use exact names from Kyte's website
3. **Add categories** - Groups items visually and enables filtering
4. **Include notes** - Add material, size, or special details
5. **Optional images** - Link to product images if available

## Data Structure Reference

### ClearanceItem Interface
```typescript
{
  id: string;              // Unique identifier
  name: string;            // Item name
  category: string;        // Category for grouping
  prints: string[];        // Array of print names
  imageUrl?: string;       // Optional: product image URL
  notes?: string;          // Optional: additional details
}
```

## Viewing Print Images

Currently, the app links to the Kyte prints page at:
https://kytebaby.com/en-ca/pages/prints-and-solids

When you click on a print tag, you'll get a popup with a link to search for that print on Kyte's website.

Future enhancement: Integrate direct image URLs for each print.

## Troubleshooting

**Port already in use?**
- The app automatically tries the next available port
- Check the terminal output for which port is being used

**JSON Import Error?**
- Ensure your JSON is valid (check parentheses, quotes, commas)
- Copy the error message for debugging

**Items not showing?**
- Verify your JSON structure matches the ClearanceItem format
- Check browser console (F12) for any errors

## Future Enhancements

- [ ] Direct image gallery with Kyte print photos
- [ ] Export items list to PDF
- [ ] Mark items as "viewed" or "interested"
- [ ] Compare items side-by-side
- [ ] Share specific items/lists
- [ ] Dark mode support

## License

Personal project for Kyte clearance sale browsing

## Support

For issues or questions, check the code structure in `src/` or adjust the component files as needed.
