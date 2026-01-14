import React, { useState, useRef } from 'react';
import type { ClearanceItem } from '../data/clearanceData';
import { getCustomImages, importCustomImages, exportCustomImages } from '../data/customImages';
import './DataManager.css';

interface DataManagerProps {
  onItemsUpdate: (items: ClearanceItem[]) => void;
  currentItems: ClearanceItem[];
  onImageChange?: () => void;
}

export const DataManager: React.FC<DataManagerProps> = ({ onItemsUpdate, onImageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'items' | 'images'>('images');
  const [jsonInput, setJsonInput] = useState('');
  const [imageJsonInput, setImageJsonInput] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportJSON = () => {
    try {
      setError('');
      setSuccess('');
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed)) {
        throw new Error('JSON must be an array of items');
      }
      onItemsUpdate(parsed);
      setSuccess('Items imported successfully!');
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Invalid JSON'}`);
    }
  };

  const handleExportImages = () => {
    const data = exportCustomImages();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'kyte-custom-images.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSuccess('Custom images exported!');
  };

  const handleImportImages = () => {
    try {
      setError('');
      setSuccess('');
      importCustomImages(imageJsonInput);
      onImageChange?.();
      setSuccess('Custom images imported successfully!');
      setImageJsonInput('');
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Invalid JSON'}`);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setImageJsonInput(content);
    };
    reader.readAsText(file);
  };

  const customImagesCount = Object.keys(getCustomImages()).length;

  return (
    <>
      <button className="data-manager-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕ Close' : '⚙ Settings'}
      </button>

      {isOpen && (
        <div className="data-manager-panel">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'images' ? 'active' : ''}`}
              onClick={() => { setActiveTab('images'); setError(''); setSuccess(''); }}
            >
              Custom Images ({customImagesCount})
            </button>
            <button
              className={`tab-button ${activeTab === 'items' ? 'active' : ''}`}
              onClick={() => { setActiveTab('items'); setError(''); setSuccess(''); }}
            >
              Items Data
            </button>
          </div>

          {activeTab === 'images' && (
            <div className="tab-content">
              <h3>Custom Product Images</h3>
              <p className="help-text">
                Export your custom images to save them, or import a previously saved file.
              </p>

              <div className="button-group">
                <button className="export-button" onClick={handleExportImages}>
                  Export Images ({customImagesCount})
                </button>
              </div>

              <div className="divider">
                <span>Import</span>
              </div>

              <div className="file-upload-section">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".json"
                  style={{ display: 'none' }}
                />
                <button
                  className="file-upload-button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose JSON File
                </button>
                <span className="or-text">or paste JSON below:</span>
              </div>

              <textarea
                value={imageJsonInput}
                onChange={(e) => setImageJsonInput(e.target.value)}
                className="json-input small"
                placeholder='{"item|||print": "https://image-url.com/image.jpg", ...}'
              />

              <button
                className="import-button"
                onClick={handleImportImages}
                disabled={!imageJsonInput.trim()}
              >
                Import Images
              </button>
            </div>
          )}

          {activeTab === 'items' && (
            <div className="tab-content">
              <h3>Import Items Data</h3>
              <p className="help-text">
                Paste clearance items data as JSON array.
              </p>
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="json-input"
                placeholder='[{"id": "1", "name": "Item", "category": "Category", "prints": ["Print1"]}]'
              />
              <button className="import-button" onClick={handleImportJSON}>
                Import Items
              </button>
            </div>
          )}

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
        </div>
      )}
    </>
  );
};
