import React, { useState, useEffect } from 'react';
import { getPrintImageUrl } from '../data/printImages';
import { getCustomImageUrl, saveCustomImageUrl, removeCustomImageUrl, getGoogleSearchUrl } from '../data/customImages';
import './PrintGallery.css';

interface PrintGalleryProps {
  printName?: string;
  itemName?: string;
  onClose?: () => void;
  onImageChange?: () => void;
}

export const PrintGallery: React.FC<PrintGalleryProps> = ({ printName, itemName, onClose, onImageChange }) => {
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [customImageUrl, setCustomImageUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (printName && itemName) {
      const saved = getCustomImageUrl(itemName, printName);
      setCustomImageUrl(saved);
      setCustomUrlInput(saved || '');
      setImageError(false);
    }
  }, [printName, itemName]);

  if (!printName) return null;

  const defaultImageUrl = getPrintImageUrl(printName);
  const displayImageUrl = customImageUrl || defaultImageUrl;
  const googleSearchUrl = itemName ? getGoogleSearchUrl(itemName, printName) : getGoogleSearchUrl('', printName);

  const handleSaveUrl = () => {
    if (customUrlInput.trim() && itemName) {
      saveCustomImageUrl(itemName, printName, customUrlInput.trim());
      setCustomImageUrl(customUrlInput.trim());
      setShowUrlInput(false);
      setImageError(false);
      onImageChange?.();
    }
  };

  const handleRemoveCustom = () => {
    if (itemName) {
      removeCustomImageUrl(itemName, printName);
      setCustomImageUrl(null);
      setCustomUrlInput('');
      setImageError(false);
      onImageChange?.();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{printName}</h2>
        {itemName && <p className="item-context">for {itemName}</p>}

        <div className="print-details">
          {displayImageUrl && !imageError ? (
            <div className="print-image-container">
              <img
                src={displayImageUrl}
                alt={printName}
                className="print-full-image"
                onError={() => setImageError(true)}
              />
              {customImageUrl && (
                <div className="custom-image-badge">Custom Image</div>
              )}
            </div>
          ) : (
            <div className="no-image">
              <p className="print-instruction">
                {imageError ? 'Image failed to load.' : 'No image available.'}
              </p>
            </div>
          )}

          <div className="image-actions">
            <a
              href={googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-search-button"
            >
              Search Google Images
            </a>

            <button
              className="add-custom-button"
              onClick={() => setShowUrlInput(!showUrlInput)}
            >
              {showUrlInput ? 'Cancel' : customImageUrl ? 'Change Image' : 'Add Custom Image'}
            </button>

            {customImageUrl && !showUrlInput && (
              <button
                className="remove-custom-button"
                onClick={handleRemoveCustom}
              >
                Use Default
              </button>
            )}
          </div>

          {showUrlInput && (
            <div className="url-input-section">
              <p className="url-input-help">
                Right-click an image in Google Images and select "Copy image address", then paste below:
              </p>
              <input
                type="text"
                value={customUrlInput}
                onChange={(e) => setCustomUrlInput(e.target.value)}
                placeholder="Paste image URL here..."
                className="url-input"
              />
              <button
                className="save-url-button"
                onClick={handleSaveUrl}
                disabled={!customUrlInput.trim()}
              >
                Save Image URL
              </button>
            </div>
          )}

          {!customImageUrl && defaultImageUrl && (
            <p className="fallback-note">
              Showing print swatch. Add a custom image for the actual product photo.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
