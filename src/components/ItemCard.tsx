import React from 'react';
import type { ClearanceItem } from '../data/clearanceData';
import { getPrintImageUrl } from '../data/printImages';
import './ItemCard.css';

interface ItemCardProps {
  item: ClearanceItem;
  onPrintClick?: (printName: string) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onPrintClick }) => {
  return (
    <div className="item-card">
      <div className="item-header">
        <h3>{item.name}</h3>
        <span className="category-badge">{item.category}</span>
      </div>

      <div className="item-meta">
        {item.price && <span className="price">{item.price}</span>}
        {item.sizes && <span className="sizes">Sizes: {item.sizes}</span>}
      </div>

      <div className="prints-section">
        <h4>Available Prints ({item.prints.length}):</h4>
        <div className="prints-grid">
          {item.prints.map((print, index) => {
            const imageUrl = getPrintImageUrl(print);
            return (
              <button
                key={index}
                className="print-tag"
                onClick={() => onPrintClick?.(print)}
                title={`Click to view ${print}`}
              >
                {imageUrl ? (
                  <div className="print-thumbnail-wrapper">
                    <img
                      src={imageUrl}
                      alt={print}
                      className="print-thumbnail"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <span className="print-name">{print}</span>
                  </div>
                ) : (
                  <span className="print-name-only">{print}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {item.notes && (
        <p className="item-notes">{item.notes}</p>
      )}
    </div>
  );
};
