import React from 'react';
import { getPrintImageUrl } from '../data/printImages';
import './PrintGallery.css';

interface PrintGalleryProps {
  printName?: string;
  onClose?: () => void;
}

export const PrintGallery: React.FC<PrintGalleryProps> = ({ printName, onClose }) => {
  if (!printName) return null;

  const imageUrl = getPrintImageUrl(printName);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{printName}</h2>
        <div className="print-details">
          {imageUrl ? (
            <div className="print-image-container">
              <img
                src={imageUrl}
                alt={printName}
                className="print-full-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="image-fallback hidden">
                <p>Image could not be loaded.</p>
                <a
                  href="https://kytebaby.com/en-ca/pages/prints-and-solids"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Kyte Baby
                </a>
              </div>
            </div>
          ) : (
            <div className="no-image">
              <p className="print-instruction">
                Image not found in database. Visit: <br />
                <a
                  href="https://kytebaby.com/en-ca/pages/prints-and-solids"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  kytebaby.com prints page
                </a>
              </p>
              <p className="print-search">
                Search for "{printName}" on the Kyte prints page to see the visual.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
