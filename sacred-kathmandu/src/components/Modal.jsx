import React, { useEffect } from 'react';

function Modal({ site, isOpen, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !site) return null;

    const viewOnMap = () => {
        const coords = site.coordinates.replace(/°N|°E/g, '').split(', ');
        const mapsUrl = `https://www.google.com/maps?q=${coords[0].trim()},${coords[1].trim()}`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <div className={`modal ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                   {/* Header with Image */}
<div style={{
    position: 'relative',
    height: '300px',
    background: site.imageUrl 
        ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${site.imageUrl})`
        : 'linear-gradient(135deg, #b45309 0%, #d97706 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px 20px 0 0'
}}>
    <button 
        onClick={onClose}
        style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'rgba(255,255,255,0.3)',
            border: 'none',
            color: 'white',
            fontSize: '30px',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
        }}
    >
        ×
    </button>
    <span style={{ fontSize: '80px', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
        {site.icon}
    </span>
</div>
               
                <div className="modal-body">
                    <h2 className="modal-title">{site.name}</h2>
                    <span className="modal-type">{site.type}</span>

                    <div className="detail-section">
                        <h3><i className="fas fa-star"></i> Significance</h3>
                        <p>{site.significance}</p>
                    </div>

                    <div className="detail-section">
                        <h3><i className="fas fa-history"></i> History</h3>
                        <p>{site.history}</p>
                    </div>

                    <div className="detail-section">
                        <h3><i className="fas fa-praying-hands"></i> Religious Values</h3>
                        <p>{site.religiousValues}</p>
                    </div>

                    <div className="detail-section">
                        <h3><i className="fas fa-info-circle"></i> Visitor Information</h3>
                        <div className="detail-grid">
                            <div className="detail-item">
                                <div className="detail-label"><i className="fas fa-clock"></i> Opening Hours</div>
                                <div className="detail-value">{site.openingHours}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label"><i className="fas fa-ticket-alt"></i> Entry Fee</div>
                                <div className="detail-value">{site.entryFee}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label"><i className="fas fa-tshirt"></i> Dress Code</div>
                                <div className="detail-value">{site.dresscode}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label"><i className="fas fa-calendar-check"></i> Best Time</div>
                                <div className="detail-value">{site.bestTimeToVisit}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label"><i className="fas fa-concierge-bell"></i> Facilities</div>
                                <div className="detail-value">{site.facilities}</div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-label"><i className="fas fa-map-signs"></i> Nearby</div>
                                <div className="detail-value">{site.nearbyAttractions}</div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-section">
                        <h3><i className="fas fa-map-marker-alt"></i> Location</h3>
                        <p><strong>{site.location}</strong></p>
                        <p>Coordinates: {site.coordinates}</p>
                        <div style={{ marginTop: '15px' }}>
                             <iframe
                            title={`Map of ${site.name}`}                              width="100%"
                              height="300"
                              style={{ border: 0, borderRadius: '15px' }}
                              loading="lazy"
                              allowFullScreen
                              referrerPolicy="no-referrer-when-downgrade"
                              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(site.coordinates)}&zoom=15`}
                            />
                        </div>
                    </div>

                    <div className="detail-section">
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn btn-primary" onClick={viewOnMap}>
                                <i className="fas fa-directions"></i> Get Directions
                            </button>
                            <button className="btn btn-secondary" onClick={onClose}>
                                <i className="fas fa-times"></i> Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;