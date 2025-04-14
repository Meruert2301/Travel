import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p className="feedback-text">
          Свяжитесь с нами через:
        </p>
        <div className="social-links">
          <a href="https://t.me/+u-kfaZaI08RjODZi" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="https://api.whatsapp.com/send?phone=77051076809" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
        <p>&copy; 2025 EagleTrip</p>
      </div>
    </footer>
  );
}

export default Footer;