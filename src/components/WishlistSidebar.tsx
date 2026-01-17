import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import type { WishlistItem } from '../context/WishlistContext';
import { formatPrice } from '../utils/priceUtils';
import { getKytePrintUrl } from '../utils/kyteUrls';
import { getPrintImageUrl } from '../data/printImages';
import './WishlistSidebar.css';

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Generate CSV export content
const generateCsvContent = (items: WishlistItem[]): string => {
  const escapeField = (field: string) => {
    if (field.includes(',') || field.includes('"') || field.includes('\n')) {
      return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
  };

  const header = 'Day,Style,Size,Print,Price,Link';
  const rows = items.map(item => {
    const link = getKytePrintUrl(item.printName, item.itemName);
    return [
      escapeField(item.day.charAt(0).toUpperCase() + item.day.slice(1)),
      escapeField(item.itemName),
      escapeField(item.size),
      escapeField(item.printName),
      escapeField(formatPrice(item.price)),
      escapeField(link)
    ].join(',');
  });

  return [header, ...rows].join('\n');
};

// Download file
const downloadFile = (content: string, filename: string, mimeType: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};

// Group items by body style, then by print
interface PrintGroup {
  printName: string;
  itemName: string;
  imageUrl: string | undefined;
  items: WishlistItem[];
  totalPrice: number;
}

interface BodyStyleGroup {
  itemName: string;
  prints: PrintGroup[];
  totalPrice: number;
}

const groupItems = (items: WishlistItem[]): BodyStyleGroup[] => {
  const bodyStyleMap = new Map<string, Map<string, WishlistItem[]>>();

  // Group by itemName, then by printName
  items.forEach(item => {
    if (!bodyStyleMap.has(item.itemName)) {
      bodyStyleMap.set(item.itemName, new Map());
    }
    const printMap = bodyStyleMap.get(item.itemName)!;
    if (!printMap.has(item.printName)) {
      printMap.set(item.printName, []);
    }
    printMap.get(item.printName)!.push(item);
  });

  // Convert to array structure
  const result: BodyStyleGroup[] = [];
  bodyStyleMap.forEach((printMap, itemName) => {
    const prints: PrintGroup[] = [];
    let bodyStyleTotal = 0;

    printMap.forEach((printItems, printName) => {
      const printTotal = printItems.reduce((sum, item) => sum + item.price, 0);
      bodyStyleTotal += printTotal;
      prints.push({
        printName,
        itemName,
        imageUrl: getPrintImageUrl(printName),
        items: printItems,
        totalPrice: printTotal,
      });
    });

    result.push({
      itemName,
      prints,
      totalPrice: bodyStyleTotal,
    });
  });

  return result;
};

type DayFilter = 'all' | 'friday' | 'sunday';

export const WishlistSidebar: React.FC<WishlistSidebarProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, clearWishlist } = useWishlist();
  const [isExpanded, setIsExpanded] = useState(false);
  const [dayFilter, setDayFilter] = useState<DayFilter>('all');

  // Filter items based on selected day
  const filteredItems = dayFilter === 'all'
    ? items
    : items.filter(item => item.day === dayFilter);

  const groupedItems = groupItems(filteredItems);
  const fridayItems = items.filter(item => item.day === 'friday');
  const sundayItems = items.filter(item => item.day === 'sunday');
  const fridayTotal = fridayItems.reduce((sum, item) => sum + item.price, 0);
  const sundayTotal = sundayItems.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = fridayTotal + sundayTotal;

  // Calculate filtered total
  const filteredTotal = filteredItems.reduce((sum, item) => sum + item.price, 0);

  const handleExport = () => {
    const content = generateCsvContent(items);
    downloadFile(content, 'kyte-wishlist.csv', 'text/csv');
  };

  return (
    <>
      <div className={`wishlist-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`wishlist-sidebar ${isOpen ? 'open' : ''} ${isExpanded ? 'expanded' : ''}`}>
        <div className="wishlist-header">
          <h2>Wishlist ({items.length})</h2>
          <div className="header-buttons">
            <button
              className="expand-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? 'Collapse wishlist' : 'Expand wishlist'}
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? '→' : '←'}
            </button>
            <button className="close-btn" onClick={onClose} aria-label="Close wishlist">
              &times;
            </button>
          </div>
        </div>

        {items.length > 0 && (
          <div className="day-filter">
            <button
              className={`filter-btn ${dayFilter === 'all' ? 'active' : ''}`}
              onClick={() => setDayFilter('all')}
            >
              All ({items.length})
            </button>
            <button
              className={`filter-btn friday ${dayFilter === 'friday' ? 'active' : ''}`}
              onClick={() => setDayFilter('friday')}
            >
              Friday ({fridayItems.length})
            </button>
            <button
              className={`filter-btn sunday ${dayFilter === 'sunday' ? 'active' : ''}`}
              onClick={() => setDayFilter('sunday')}
            >
              Sunday ({sundayItems.length})
            </button>
          </div>
        )}

        <div className="wishlist-content">
          {items.length === 0 ? (
            <div className="wishlist-empty">
              <p>Your wishlist is empty</p>
              <p className="hint">Click the heart icon on any print to add it!</p>
            </div>
          ) : (
            <div className="wishlist-grouped">
              {groupedItems.map(bodyStyle => (
                <div key={bodyStyle.itemName} className="body-style-group">
                  <div className="body-style-header">
                    <span className="body-style-name">{bodyStyle.itemName}</span>
                    <span className="body-style-total">{formatPrice(bodyStyle.totalPrice)}</span>
                  </div>
                  <div className="prints-list">
                    {bodyStyle.prints.map(print => (
                      <div key={print.printName} className="print-group">
                        <div className="print-group-header">
                          {print.imageUrl && (
                            <div className="item-swatch">
                              <img src={print.imageUrl} alt={print.printName} />
                            </div>
                          )}
                          <div className="print-group-info">
                            <a
                              href={getKytePrintUrl(print.printName, print.itemName)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="print-name-link"
                              title={`Search Kyte for ${print.printName} ${print.itemName}`}
                            >
                              {print.printName}
                            </a>
                            {print.items.length > 1 && (
                              <span className="print-qty">x{print.items.length}</span>
                            )}
                          </div>
                          <span className="print-total">{formatPrice(print.totalPrice)}</span>
                        </div>
                        <div className="size-list">
                          {print.items.map(item => (
                            <div key={item.id} className="size-item">
                              <div className="size-item-info">
                                <span className={`day-badge ${item.day}`}>{item.day}</span>
                                <span className="size-badge">{item.size}</span>
                                <span className="size-price">{formatPrice(item.price)}</span>
                              </div>
                              <button
                                className="remove-btn"
                                onClick={() => removeItem(item.id)}
                                aria-label="Remove from wishlist"
                              >
                                &times;
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="wishlist-footer">
            <div className="footer-top">
              <div className="day-subtotals">
                {fridayItems.length > 0 && (
                  <span className="subtotal friday">Fri: {formatPrice(fridayTotal)}</span>
                )}
                {sundayItems.length > 0 && (
                  <span className="subtotal sunday">Sun: {formatPrice(sundayTotal)}</span>
                )}
              </div>
              <div className="total-display">
                <span className="total-price">{formatPrice(dayFilter === 'all' ? grandTotal : filteredTotal)}</span>
              </div>
            </div>
            <div className="footer-buttons">
              <button className="export-btn" onClick={handleExport}>
                Export
              </button>
              <button className="clear-btn" onClick={clearWishlist}>
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
