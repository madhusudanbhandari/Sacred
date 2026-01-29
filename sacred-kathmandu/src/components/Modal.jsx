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
                <div className="modal-header">
                    <button className="close-modal" onClick={onClose}>×</button>
                    {site.icon}
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
                        <div className="map-placeholder">
                            <i className="fas fa-map"></i> Map View (Google Maps integration coming soon)
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