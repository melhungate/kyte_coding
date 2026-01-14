import { useState } from 'react'
import './App.css'
import { sampleItems } from './data/clearanceData'
import type { ClearanceItem } from './data/clearanceData'
import { ItemCard } from './components/ItemCard'
import { PrintGallery } from './components/PrintGallery'
import { DataManager } from './components/DataManager'

interface SelectedPrint {
  printName: string;
  itemName: string;
}

function App() {
  const [items, setItems] = useState<ClearanceItem[]>(sampleItems)
  const [selectedPrint, setSelectedPrint] = useState<SelectedPrint | undefined>()
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [imageVersion, setImageVersion] = useState(0)

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(items.map(item => item.category)))]

  // Filter items
  const filteredItems = items.filter(item => {
    const matchCategory = filterCategory === 'all' || item.category === filterCategory
    const matchSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.prints.some(p => p.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchCategory && matchSearch
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛍️ Kyte Clearance Sale</h1>
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
        
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${filterCategory === category ? 'active' : ''}`}
              onClick={() => setFilterCategory(category)}
            >
              {category === 'all' ? '📦 All Items' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <ItemCard
              key={`${item.id}-${imageVersion}`}
              item={item}
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
        onImageChange={() => setImageVersion(v => v + 1)}
      />

      <DataManager
        onItemsUpdate={setItems}
        currentItems={items}
        onImageChange={() => setImageVersion(v => v + 1)}
      />
    </div>
  )
}

export default App
