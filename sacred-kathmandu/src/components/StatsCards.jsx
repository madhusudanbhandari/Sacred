import React from 'react';

function StatsCards({ sites }) {
    // Calculate counts
    const templeCount = sites.filter(s => s.type === 'Hindu Temple').length;
    const monasteryCount = sites.filter(s => s.type === 'Buddhist Monastery').length;
    const mosqueCount = sites.filter(s => s.type === 'Mosque').length;
    const churchCount = sites.filter(s => s.type === 'Church').length;

    return (
        <div className="stats">
            <div className="stat-card">
                <i className="fas fa-gopuram"></i>
                <div className="stat-number">{templeCount}</div>
                <div className="stat-label">Hindu Temples</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-dharmachakra"></i>
                <div className="stat-number">{monasteryCount}</div>
                <div className="stat-label">Buddhist Monasteries</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-mosque"></i>
                <div className="stat-number">{mosqueCount}</div>
                <div className="stat-label">Mosques</div>
            </div>
            <div className="stat-card">
                <i className="fas fa-church"></i>
                <div className="stat-number">{churchCount}</div>
                <div className="stat-label">Churches</div>
            </div>
        </div>
    );
}

export default StatsCards;