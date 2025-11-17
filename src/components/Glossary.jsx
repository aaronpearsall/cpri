import { useState } from 'react'
import Navigation from './Navigation'
import { glossaryTerms } from '../data/glossary'
import './Glossary.css'

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', ...new Set(glossaryTerms.map(term => term.category))]
  
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="glossary-page">
      <Navigation />
      <div className="glossary-container">
        <div className="glossary-header">
          <h1>Glossary</h1>
          <p>Comprehensive definitions of key terms in credit and political risk insurance</p>
        </div>

        <div className="glossary-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-button ${
                  selectedCategory === category ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="glossary-content">
          {filteredTerms.length > 0 ? (
            <div className="terms-grid">
              {filteredTerms.map((item, index) => (
                <div key={index} className="term-card">
                  <div className="term-header">
                    <h3>{item.term}</h3>
                    <span className="term-category">{item.category}</span>
                  </div>
                  <p className="term-definition">{item.definition}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No terms found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Glossary

