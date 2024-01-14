import React from 'react';
import '../styles/footer.component.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Selly is an amazing e-commerce store</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Connect with us on social media</p>
          {/* Add social media icons or links as needed */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Selly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;