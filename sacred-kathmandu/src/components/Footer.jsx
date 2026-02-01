import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About</h3>
                        <p>Sacred Kathmandu is your comprehensive guide to exploring the rich religious heritage of Kathmandu Valley.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <p>Plan Your Visit<br />Cultural Guidelines<br />Contact Us</p>
                    </div>
                    {/* <div className="footer-section">
                        <h3>Connect</h3>
                        <p>
                            <i className="fab fa-facebook"></i> Facebook<br />
                            <i className="fab fa-instagram"></i> Instagram<br />
                            <i className="fab fa-twitter"></i> Twitter
                        </p>
                    </div> */}
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Sacred Kathmandu. Preserving Heritage, Inspiring Faith.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;