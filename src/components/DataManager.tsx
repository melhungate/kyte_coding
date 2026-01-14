import React, { useState } from 'react';
import type { ClearanceItem } from '../data/clearanceData';
import './DataManager.css';

interface DataManagerProps {
  onItemsUpdate: (items: ClearanceItem[]) => void;
  currentItems: ClearanceItem[];
}

export const DataManager: React.FC<DataManagerProps> = ({ onItemsUpdate, currentItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [jsonInput, setJsonInput] = useState(JSON.stringify(currentItems, null, 2));
  const [error, setError] = useState('');

  const handleImportJSON = () => {
    try {
      setError('');
      const parsed = JSON.parse(jsonInput);
      if (!Array.isArray(parsed)) {
        throw new Error('JSON must be an array of items');
      }
      onItemsUpdate(parsed);
      setIsOpen(false);
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Invalid JSON'}`);
    }
  };

  return (
    <>
      <button className="data-manager-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕ Close Editor' : '⚙ Data Editor'}
      </button>

      {isOpen && (
        <div className="data-manager-panel">
          <h3>Import Items from JSON</h3>
          <p className="help-text">
            Paste your items data as JSON. Copy from your Google Doc and format it as an array.
          </p>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="json-input"
            placeholder='[{"id": "1", "name": "Item", "category": "Category", "prints": ["Print1"]}]'
          />
          {error && <div className="error-message">{error}</div>}
          <button className="import-button" onClick={handleImportJSON}>
            Import Items
          </button>
        </div>
      )}
    </>
  );
};
