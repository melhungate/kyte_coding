import React, { useState } from 'react';
import { getPrintImageUrl } from '../data/printImages';
import './PrintGallery.css';

interface PrintGalleryProps {
  printName?: string;
  itemName?: string;
  onClose?: () => void;
}

export const PrintGallery: React.FC<PrintGalleryProps> = ({ printName, itemName, onClose }) => {
  const [imageError, setImageError] = useState(false);

  if (!printName) return null;

  const imageUrl = getPrintImageUrl(printName);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{printName}</h2>
        {itemName && <p className="item-context">for {itemName}</p>}

        <div className="print-details">
          {imageUrl && !imageError ? (
            <div className="print-image-container">
              <img
                src={imageUrl}
                alt={printName}
                className="print-full-image"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="no-image">
              <p className="print-instruction">
                {imageError ? 'Image failed to load.' : 'No image available for this print.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
