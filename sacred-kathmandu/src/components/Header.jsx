import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <i className="fas fa-om"></i>
                        <span>Sacred Kathmandu</span>
                    </div>
                    <div style={{ color: '#fef3c7' }}>
                        <i className="fas fa-map-marker-alt"></i> Exploring Religious Heritage
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;