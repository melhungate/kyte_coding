import { useState } from 'react'
import './App.css'
import { sampleItems } from './data/clearanceData'
import type { ClearanceItem } from './data/clearanceData'
import { ItemCard } from './components/ItemCard'
import { PrintGallery } from './components/PrintGallery'

interface SelectedPrint {
  printName: string;
  itemName: string;
}

type SaleDay = 'all' | 'friday' | 'sunday';

function App() {
  const [items] = useState<ClearanceItem[]>(sampleItems)
  const [selectedPrint, setSelectedPrint] = useState<SelectedPrint | undefined>()
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [filterDay, setFilterDay] = useState<SaleDay>('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))]

  // Filter items
  const filteredItems = items.filter(item => {
    const matchCategory = filterCategory === 'all' || item.category === filterCategory
    const allPrints = [...item.fridayPrints, ...item.sundayPrints];
    const matchSearch = searchTerm === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      allPrints.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
    // Also filter out items that have no prints for the selected day
    const hasPrintsForDay = filterDay === 'all'
      ? allPrints.length > 0
      : (filterDay === 'friday' ? item.fridayPrints.length > 0 : item.sundayPrints.length > 0)
    return matchCategory && matchSearch && hasPrintsForDay
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>Kyte Clearance Sale - Jan 2026</h1>
        <p className="subtitle">Visual Browser for Clearance Items</p>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search items or prints..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="day-filter">
          <span className="filter-label">Sale Day:</span>
          <button
            className={`day-button ${filterDay === 'all' ? 'active' : ''}`}
            onClick={() => setFilterDay('all')}
          >
            All Days
          </button>
          <button
            className={`day-button friday ${filterDay === 'friday' ? 'active' : ''}`}
            onClick={() => setFilterDay('friday')}
          >
            Friday
          </button>
          <button
            className={`day-button sunday ${filterDay === 'sunday' ? 'active' : ''}`}
            onClick={() => setFilterDay('sunday')}
          >
            Sunday
          </button>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${filterCategory === category ? 'active' : ''}`}
              onClick={() => setFilterCategory(category)}
            >
              {category === 'all' ? 'All Items' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              filterDay={filterDay}
              onPrintClick={(printName) => setSelectedPrint({ printName, itemName: item.name })}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No items found matching your search.</p>
          </div>
        )}
      </div>

      <PrintGallery
        printName={selectedPrint?.printName}
        itemName={selectedPrint?.itemName}
        onClose={() => setSelectedPrint(undefined)}
      />
    </div>
  )
}

export default App
