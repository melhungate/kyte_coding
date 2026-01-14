// Custom product images saved by the user
// These are stored in localStorage and override the default print swatches

const STORAGE_KEY = 'kyte-clearance-custom-images';

export interface CustomImageEntry {
  itemName: string;
  printName: string;
  imageUrl: string;
}

// Get all custom images from localStorage
export function getCustomImages(): Record<string, string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

// Generate a unique key for an item+print combination
export function getImageKey(itemName: string, printName: string): string {
  return `${itemName}|||${printName}`;
}

// Get custom image URL for a specific item+print combination
export function getCustomImageUrl(itemName: string, printName: string): string | null {
  const images = getCustomImages();
  const key = getImageKey(itemName, printName);
  return images[key] || null;
}

// Save a custom image URL for an item+print combination
export function saveCustomImageUrl(itemName: string, printName: string, imageUrl: string): void {
  const images = getCustomImages();
  const key = getImageKey(itemName, printName);
  images[key] = imageUrl;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

// Remove a custom image URL
export function removeCustomImageUrl(itemName: string, printName: string): void {
  const images = getCustomImages();
  const key = getImageKey(itemName, printName);
  delete images[key];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

// Generate Google Image search URL for an item+print combination
export function getGoogleSearchUrl(itemName: string, printName: string): string {
  const query = `kyte baby ${itemName} ${printName}`;
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
}

// Export all custom images as JSON (for backup)
export function exportCustomImages(): string {
  return JSON.stringify(getCustomImages(), null, 2);
}

// Import custom images from JSON
export function importCustomImages(json: string): void {
  try {
    const images = JSON.parse(json);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  } catch (e) {
    throw new Error('Invalid JSON format');
  }
}
