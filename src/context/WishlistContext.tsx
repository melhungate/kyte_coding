import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface WishlistItem {
  id: string;
  itemId: string;
  itemName: string;
  printName: string;
  size: string;
  price: number;
  day: 'friday' | 'sunday';
}

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (item: Omit<WishlistItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateItemSize: (id: string, size: string, price: number) => void;
  clearWishlist: () => void;
  totalPrice: number;
  isInWishlist: (itemId: string, printName: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = 'kyte-clearance-wishlist';

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: Omit<WishlistItem, 'id'>) => {
    const newItem: WishlistItem = {
      ...item,
      id: `${item.itemId}-${item.printName}-${Date.now()}`,
    };
    setItems(prev => [...prev, newItem]);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateItemSize = useCallback((id: string, size: string, price: number) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, size, price } : item
    ));
  }, []);

  const clearWishlist = useCallback(() => {
    setItems([]);
  }, []);

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const isInWishlist = useCallback((itemId: string, printName: string) => {
    return items.some(item => item.itemId === itemId && item.printName === printName);
  }, [items]);

  return (
    <WishlistContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateItemSize,
      clearWishlist,
      totalPrice,
      isInWishlist,
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
