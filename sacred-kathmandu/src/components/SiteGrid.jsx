import React from 'react';
import SiteCard from './SiteCard';

function SiteGrid({ sites, onOpenModal }) {
    if (sites.length === 0) {
        return (
            <div className="no-results">
                <i className="fas fa-search"></i>
                <h3>No sites found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        );
    }

    return (
        <div className="sites-grid">
            {sites.map(site => (
                <SiteCard
                    key={site.id}
                    site={site}
                    onOpenModal={onOpenModal}
                />
            ))}
        </div>
    );
}

export default SiteGrid;