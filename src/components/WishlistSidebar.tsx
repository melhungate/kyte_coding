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

export const WishlistSidebar: React.FC<WishlistSidebarProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, clearWishlist } = useWishlist();
  const [isExpanded, setIsExpanded] = useState(false);

  const fridayItems = items.filter(item => item.day === 'friday');
  const sundayItems = items.filter(item => item.day === 'sunday');
  const fridayTotal = fridayItems.reduce((sum, item) => sum + item.price, 0);
  const sundayTotal = sundayItems.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = fridayTotal + sundayTotal;

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

        <div className="wishlist-content">
          {items.length === 0 ? (
            <div className="wishlist-empty">
              <p>Your wishlist is empty</p>
              <p className="hint">Click the heart icon on any print to add it!</p>
            </div>
          ) : (
            <ul className="wishlist-items">
              {items.map(item => {
                const imageUrl = getPrintImageUrl(item.printName);
                return (
                  <li key={item.id} className="wishlist-item">
                    {imageUrl && (
                      <div className="item-swatch">
                        <img src={imageUrl} alt={item.printName} />
                      </div>
                    )}
                    <div className="item-info">
                      <span className="item-name">{item.itemName}</span>
                      <span className="print-name">{item.printName}</span>
                      <div className="item-details">
                        <span className={`day-badge ${item.day}`}>{item.day}</span>
                        <span className="size-badge">Size: {item.size}</span>
                      </div>
                    </div>
                    <div className="item-actions">
                      <span className="item-price">{formatPrice(item.price)}</span>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove from wishlist"
                      >
                        &times;
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="wishlist-footer">
            {fridayItems.length > 0 && (
              <div className="day-total-row friday">
                <span>Friday ({fridayItems.length}):</span>
                <span className="day-total">{formatPrice(fridayTotal)}</span>
              </div>
            )}
            {sundayItems.length > 0 && (
              <div className="day-total-row sunday">
                <span>Sunday ({sundayItems.length}):</span>
                <span className="day-total">{formatPrice(sundayTotal)}</span>
              </div>
            )}
            <div className="total-row">
              <span>Grand Total:</span>
              <span className="total-price">{formatPrice(grandTotal)}</span>
            </div>
            <div className="footer-buttons">
              <button className="export-btn" onClick={handleExport}>
                Export Wishlist
              </button>
              <button className="clear-btn" onClick={clearWishlist}>
                Clear Wishlist
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
