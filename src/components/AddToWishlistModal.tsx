import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { getAvailableSizes, getPriceForSize, parsePriceString, formatPrice } from '../utils/priceUtils';
import './AddToWishlistModal.css';

interface AddToWishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemId: string;
  itemName: string;
  printName: string;
  day: 'friday' | 'sunday';
  sizes: string | undefined;
  price: string | undefined;
}

export const AddToWishlistModal: React.FC<AddToWishlistModalProps> = ({
  isOpen,
  onClose,
  itemId,
  itemName,
  printName,
  day,
  sizes,
  price,
}) => {
  const { addItem, isInWishlist } = useWishlist();
  const availableSizes = getAvailableSizes(sizes);
  const priceOptions = parsePriceString(price);
  const [selectedSize, setSelectedSize] = useState(availableSizes[0] || 'One Size');

  const currentPrice = getPriceForSize(price, selectedSize);
  const alreadyInWishlist = isInWishlist(itemId, printName);

  const handleAdd = () => {
    addItem({
      itemId,
      itemName,
      printName,
      size: selectedSize,
      price: currentPrice,
      day,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="add-wishlist-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <h3>Add to Wishlist</h3>

        <div className="modal-item-info">
          <span className="modal-item-name">{itemName}</span>
          <span className="modal-print-name">{printName}</span>
          <span className={`modal-day ${day}`}>{day}</span>
        </div>

        {alreadyInWishlist && (
          <div className="already-added-notice">
            This print is already in your wishlist. Adding again will create a duplicate.
          </div>
        )}

        <div className="size-selection">
          <label>Select Size:</label>
          <div className="size-buttons">
            {availableSizes.map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {priceOptions.length > 1 && (
          <div className="price-info">
            <span className="price-note">Pricing varies by size:</span>
            <ul className="price-list">
              {priceOptions.map((opt, idx) => (
                <li key={idx}>{opt.label}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-price">
          <span>Price:</span>
          <span className="price-value">{formatPrice(currentPrice)}</span>
        </div>

        <button className="add-btn" onClick={handleAdd}>
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};
