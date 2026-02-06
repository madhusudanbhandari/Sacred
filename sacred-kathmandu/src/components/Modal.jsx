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
  
          {/* <div 
             className="site-image"
             style={{
             backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${site.imageUrl})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
            }}
        /> */}
                        <div className="site-image">{site.icon}</div>


               
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