import React from 'react';

function SiteCard({ site, onOpenModal }) {
    return (
        <div className="site-card" onClick={() => onOpenModal(site.id)}>
           
{/*            
                <div 
                    className="site-image"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${site.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                /> */}
            
                <div className="site-image">{site.icon}</div>
            
            
            <div className="site-content">
                <div className="site-header">
                    <div>
                        <div className="site-title">{site.name}</div>
                        <span className="site-type">{site.type}</span>
                    </div>
                </div>
                <div className="site-info">
                    <div className="info-row">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{site.location}</span>
                    </div>
                    <div className="info-row">
                        <i className="fas fa-clock"></i>
                        <span>{site.openingHours?.split('(')[0] || site.openingHours}</span>
                    </div>
                    <div className="info-row">
                        <i className="fas fa-ticket-alt"></i>
                        <span>{site.entryFee}</span>
                    </div>
                </div>
                <div className="site-description">
                    {site.significance}
                </div>
                <div className="site-actions">
                    <button className="btn btn-primary">
                        <i className="fas fa-info-circle"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SiteCard;