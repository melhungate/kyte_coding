import React from 'react';
import type { ClearanceItem } from '../data/clearanceData';
import { getPrintImageUrl } from '../data/printImages';
import { getCustomImageUrl } from '../data/customImages';
import './ItemCard.css';

type SaleDay = 'all' | 'friday' | 'sunday';

interface ItemCardProps {
  item: ClearanceItem;
  filterDay: SaleDay;
  onPrintClick?: (printName: string) => void;
}

const PrintButton: React.FC<{
  print: string;
  itemName: string;
  dayLabel?: string;
  onClick?: () => void;
}> = ({ print, itemName, dayLabel, onClick }) => {
  const customUrl = getCustomImageUrl(itemName, print);
  const defaultUrl = getPrintImageUrl(print);
  const imageUrl = customUrl || defaultUrl;
  const hasCustomImage = !!customUrl;

  return (
    <button
      className={`print-tag ${hasCustomImage ? 'has-custom' : ''}`}
      onClick={onClick}
      title={`Click to view ${print}${hasCustomImage ? ' (custom image)' : ''}${dayLabel ? ` - ${dayLabel}` : ''}`}
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
};

export const ItemCard: React.FC<ItemCardProps> = ({ item, filterDay, onPrintClick }) => {
  const totalPrints = item.fridayPrints.length + item.sundayPrints.length;

  const renderPrintsSection = () => {
    if (filterDay === 'friday') {
      return (
        <div className="prints-section">
          <h4>Friday Prints ({item.fridayPrints.length}):</h4>
          <div className="prints-grid">
            {item.fridayPrints.map((print, index) => (
              <PrintButton
                key={`fri-${index}`}
                print={print}
                itemName={item.name}
                onClick={() => onPrintClick?.(print)}
              />
            ))}
          </div>
        </div>
      );
    }

    if (filterDay === 'sunday') {
      return (
        <div className="prints-section">
          <h4>Sunday Prints ({item.sundayPrints.length}):</h4>
          <div className="prints-grid">
            {item.sundayPrints.map((print, index) => (
              <PrintButton
                key={`sun-${index}`}
                print={print}
                itemName={item.name}
                onClick={() => onPrintClick?.(print)}
              />
            ))}
          </div>
        </div>
      );
    }

    // Show all prints organized by day
    return (
      <>
        {item.fridayPrints.length > 0 && (
          <div className="prints-section friday-section">
            <h4 className="day-header friday-header">Friday ({item.fridayPrints.length})</h4>
            <div className="prints-grid">
              {item.fridayPrints.map((print, index) => (
                <PrintButton
                  key={`fri-${index}`}
                  print={print}
                  itemName={item.name}
                  dayLabel="Friday"
                  onClick={() => onPrintClick?.(print)}
                />
              ))}
            </div>
          </div>
        )}
        {item.sundayPrints.length > 0 && (
          <div className="prints-section sunday-section">
            <h4 className="day-header sunday-header">Sunday ({item.sundayPrints.length})</h4>
            <div className="prints-grid">
              {item.sundayPrints.map((print, index) => (
                <PrintButton
                  key={`sun-${index}`}
                  print={print}
                  itemName={item.name}
                  dayLabel="Sunday"
                  onClick={() => onPrintClick?.(print)}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="item-card">
      <div className="item-header">
        <h3>{item.name}</h3>
        <span className="category-badge">{item.category}</span>
      </div>

      <div className="item-meta">
        {item.price && <span className="price">{item.price}</span>}
        {item.sizes && <span className="sizes">Sizes: {item.sizes}</span>}
        <span className="print-count">{totalPrints} prints total</span>
      </div>

      {renderPrintsSection()}

      {item.notes && (
        <p className="item-notes">{item.notes}</p>
      )}
    </div>
  );
};
