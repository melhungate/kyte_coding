import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { formatPrice } from '../utils/priceUtils';
import './WishlistSidebar.css';

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistSidebar: React.FC<WishlistSidebarProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, clearWishlist } = useWishlist();

  const fridayItems = items.filter(item => item.day === 'friday');
  const sundayItems = items.filter(item => item.day === 'sunday');
  const fridayTotal = fridayItems.reduce((sum, item) => sum + item.price, 0);
  const sundayTotal = sundayItems.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = fridayTotal + sundayTotal;

  return (
    <>
      <div className={`wishlist-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`wishlist-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="wishlist-header">
          <h2>Wishlist ({items.length})</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close wishlist">
            &times;
          </button>
        </div>

        <div className="wishlist-content">
          {items.length === 0 ? (
            <div className="wishlist-empty">
              <p>Your wishlist is empty</p>
              <p className="hint">Click the heart icon on any print to add it!</p>
            </div>
          ) : (
            <ul className="wishlist-items">
              {items.map(item => (
                <li key={item.id} className="wishlist-item">
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
              ))}
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
            <button className="clear-btn" onClick={clearWishlist}>
              Clear Wishlist
            </button>
          </div>
        )}
      </div>
    </>
  );
};
