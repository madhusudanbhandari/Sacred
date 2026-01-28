import React from 'react';

function SearchFilter({ 
    searchTerm, 
    onSearchChange, 
    currentFilter, 
    onFilterChange,
    currentDistrict,
    onDistrictChange,
    districts 
}) {
    const filters = [
        { value: 'all', label: 'All Sites' },
        { value: 'Hindu Temple', label: 'Hindu Temples' },
        { value: 'Buddhist Monastery', label: 'Monasteries' },
        { value: 'Mosque', label: 'Mosques' },
        { value: 'Church', label: 'Churches' }
    ];

    // SAFETY CHECK: Log to see what we're receiving
    console.log('Districts received:', districts);

    return (
        <div className="search-filter">
            <div className="search-box">
                <i className="fas fa-search"></i>
                <input
                    type="text"
                    value={searchTerm || ''}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search religious sites..."
                />
            </div>

            {/* DISTRICT FILTER - WITH SAFETY CHECKS */}
            <div className="district-filter">
                <label htmlFor="district-select">
                    <i className="fas fa-map-marker-alt"></i> District:
                </label>
                <select 
                    id="district-select"
                    value={currentDistrict || 'all'}
                    onChange={(e) => onDistrictChange(e.target.value)}
                    className="district-select"
                >
                    <option value="all">All Districts</option>
                    {districts && Array.isArray(districts) && districts.map(district => (
                        <option key={district} value={district}>
                            {district}
                        </option>
                    ))}
                </select>
            </div>

            {/* TYPE FILTER */}
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
