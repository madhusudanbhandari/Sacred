import React from 'react';

function SiteCard({ site, onOpenModal }) {
    // Test image URL
    const testImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pashupatinath_Temple-2021.jpg/800px-Pashupatinath_Temple-2021.jpg";
    
    return (
        <div className="site-card" onClick={() => onOpenModal(site.id)}>
            <div 
                className="site-image"
                style={{
                    width: '100%',
                    height: '250px',
                    backgroundImage: `url(${testImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#f59e0b'
                }}
            >
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    color: 'white'
                }}>
                    {site.icon}
                </div>
            </div>
            
            <div className="site-content">
                <div className="site-header">
                    <div>
                        <div className="site-title">{site.name}</div>
                        <div className="site-badges">
                            <span className="site-type">{site.type}</span>
                            {site.district && (
                                <span className="site-district">{site.district}</span>
                            )}
                        </div>
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