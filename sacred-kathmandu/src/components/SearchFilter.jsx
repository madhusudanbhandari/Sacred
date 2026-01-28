import React from 'react';

function SearchFilter({ searchTerm, onSearchChange, currentFilter, onFilterChange }) {
    const filters = [
        { value: 'all', label: 'All Sites' },
        { value: 'Hindu Temple', label: 'Hindu Temples' },
        { value: 'Buddhist Monastery', label: 'Monasteries' },
        { value: 'Mosque', label: 'Mosques' },
        { value: 'Church', label: 'Churches' }
    ];

    return (
        <div className="search-filter">
            <div className="search-box">
                <i className="fas fa-search"></i>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search religious sites..."
                />
            </div>
            <div className="filter-buttons">
                {filters.map(filter => (
                    <button
                        key={filter.value}
                        className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
                        onClick={() => onFilterChange(filter.value)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SearchFilter;