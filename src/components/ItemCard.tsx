import React from 'react';
import type { ClearanceItem } from '../data/clearanceData';
import { getPrintImageUrl } from '../data/printImages';
import './ItemCard.css';

type SaleDay = 'all' | 'friday' | 'sunday';

interface ItemCardProps {
  item: ClearanceItem;
  filterDay: SaleDay;
  searchTerm?: string;
  onPrintClick?: (printName: string) => void;
  onWishlistClick?: (printName: string, day: 'friday' | 'sunday') => void;
}

const PrintButton: React.FC<{
  print: string;
  dayLabel?: string;
  onClick?: () => void;
  onWishlistClick?: () => void;
}> = ({ print, dayLabel, onClick, onWishlistClick }) => {
  const imageUrl = getPrintImageUrl(print);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWishlistClick?.();
  };

  return (
    <div className="print-tag-wrapper">
      <button
        className="print-tag"
        onClick={onClick}
        title={`Click to view ${print}${dayLabel ? ` - ${dayLabel}` : ''}`}
      >
        {imageUrl ? (
          <div className="print-thumbnail-wrapper">
            <img
              src={imageUrl}
              alt={print}
              className="print-thumbnail"
              loading="lazy"
            />
            <span className="print-name">{print}</span>
          </div>
        ) : (
          <span className="print-name-only">{print}</span>
        )}
      </button>
      <button
        className="wishlist-btn"
        onClick={handleWishlistClick}
        title="Add to wishlist"
        aria-label={`Add ${print} to wishlist`}
      >
        ♡
      </button>
    </div>
  );
};

export const ItemCard: React.FC<ItemCardProps> = ({ item, filterDay, searchTerm, onPrintClick, onWishlistClick }) => {
  // Filter prints based on search term
  const filterPrints = (prints: string[]) => {
    if (!searchTerm) return prints;
    const searchLower = searchTerm.toLowerCase();
    // Only filter prints if the search term doesn't match the item name
    if (item.name.toLowerCase().includes(searchLower)) return prints;
    return prints.filter(print => print.toLowerCase().includes(searchLower));
  };

  const filteredFridayPrints = filterPrints(item.fridayPrints);
  const filteredSundayPrints = filterPrints(item.sundayPrints);

  const renderPrintsSection = () => {
    if (filterDay === 'friday') {
      return (
        <div className="prints-section">
          <h4>Friday Prints ({filteredFridayPrints.length}):</h4>
          <div className="prints-grid">
            {filteredFridayPrints.map((print, index) => (
              <PrintButton
                key={`fri-${index}`}
                print={print}
                onClick={() => onPrintClick?.(print)}
                onWishlistClick={() => onWishlistClick?.(print, 'friday')}
              />
            ))}
          </div>
        </div>
      );
    }

    if (filterDay === 'sunday') {
      return (
        <div className="prints-section">
          <h4>Sunday Prints ({filteredSundayPrints.length}):</h4>
          <div className="prints-grid">
            {filteredSundayPrints.map((print, index) => (
              <PrintButton
                key={`sun-${index}`}
                print={print}
                onClick={() => onPrintClick?.(print)}
                onWishlistClick={() => onWishlistClick?.(print, 'sunday')}
              />
            ))}
          </div>
        </div>
      );
    }

    // Show all prints organized by day
    return (
      <>
        {filteredFridayPrints.length > 0 && (
          <div className="prints-section friday-section">
            <h4 className="day-header friday-header">Friday ({filteredFridayPrints.length})</h4>
            <div className="prints-grid">
              {filteredFridayPrints.map((print, index) => (
                <PrintButton
                  key={`fri-${index}`}
                  print={print}
                  dayLabel="Friday"
                  onClick={() => onPrintClick?.(print)}
                  onWishlistClick={() => onWishlistClick?.(print, 'friday')}
                />
              ))}
            </div>
          </div>
        )}
        {filteredSundayPrints.length > 0 && (
          <div className="prints-section sunday-section">
            <h4 className="day-header sunday-header">Sunday ({filteredSundayPrints.length})</h4>
            <div className="prints-grid">
              {filteredSundayPrints.map((print, index) => (
                <PrintButton
                  key={`sun-${index}`}
                  print={print}
                  dayLabel="Sunday"
                  onClick={() => onPrintClick?.(print)}
                  onWishlistClick={() => onWishlistClick?.(print, 'sunday')}
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
      </div>

      {renderPrintsSection()}

      {item.notes && (
        <p className="item-notes">{item.notes}</p>
      )}
    </div>
  );
};
