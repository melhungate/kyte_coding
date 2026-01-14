/**
 * EXAMPLE CLEARANCE ITEMS DATA
 * 
 * This file shows you how to structure your clearance items data.
 * Copy the relevant data from your Google Doc and convert it to this JSON format.
 * 
 * Then paste this JSON into the Data Editor in the app (⚙ button, bottom right)
 */

export const exampleClearanceItems = [
  {
    "id": "s1",
    "name": "Sleep Bag - Small",
    "category": "Sleep Bags",
    "prints": [
      "Wildflower",
      "Meadow",
      "Ocean Blue",
      "Cloud White"
    ],
    "notes": "Organic cotton, fits newborn-6 months"
  },
  {
    "id": "s2",
    "name": "Sleep Bag - Large",
    "category": "Sleep Bags",
    "prints": [
      "Sage",
      "Granite",
      "Wildflower",
      "Safari"
    ],
    "notes": "Organic cotton, fits 6-24 months"
  },
  {
    "id": "q1",
    "name": "Baby Quilt",
    "category": "Quilts",
    "prints": [
      "Cloud White",
      "Mint",
      "Blush"
    ],
    "notes": "Cotton/poly blend, crib sized"
  },
  {
    "id": "q2",
    "name": "Toddler Quilt",
    "category": "Quilts",
    "prints": [
      "Forest Green",
      "Navy",
      "Slate"
    ],
    "notes": "Organic cotton, larger size"
  },
  {
    "id": "d1",
    "name": "Diaper Bag",
    "category": "Accessories",
    "prints": [
      "Ocean Blue",
      "Wildflower",
      "Charcoal"
    ],
    "notes": "Waterproof lining"
  },
  {
    "id": "l1",
    "name": "Fitted Crib Sheet",
    "category": "Bedding",
    "prints": [
      "Wildflower",
      "Ocean Blue",
      "Sage",
      "Granite",
      "Cloud White"
    ],
    "notes": "Sateen weave, super soft"
  }
];

/**
 * HOW TO CREATE YOUR DATA:
 * 
 * 1. Look at your Google Doc with the clearance items
 * 2. For each item, create an object with:
 *    - id: unique short code (e.g., "s1", "q2", "d3")
 *    - name: the full product name
 *    - category: group type (Sleep Bags, Bedding, Accessories, etc.)
 *    - prints: array of available print names
 *    - notes: optional details about the item
 * 
 * 2. Format as JSON array (see example above)
 * 
 * 3. Copy the entire array
 * 
 * 4. Click ⚙ Data Editor in the app
 * 
 * 5. Replace the JSON in the text box with your data
 * 
 * 6. Click "Import Items"
 * 
 * 7. Browse your clearance items!
 * 
 * PRINT NAMES TO USE:
 * Match exactly with Kyte's print names from:
 * https://kytebaby.com/en-ca/pages/prints-and-solids
 * 
 * Examples:
 * - Wildflower
 * - Meadow
 * - Ocean Blue
 * - Cloud White
 * - Sage
 * - Forest Green
 * - Navy
 * - Charcoal
 * - Granite
 * - Slate
 * - Blush
 * - Mint
 * - Safari
 * 
 */
