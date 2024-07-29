import React from 'react';
import './footer.css'; 
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer-section pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="yellow-100">Contact Us</h5>
            <p>
              <FaPhoneAlt className="me-2" /> +1 234 567 890
            </p>
            <p>
              <FaEnvelope className="me-2" /> info@artgallery.com
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="yellow-100">Follow Us on </h5>
            <div>
              <a href="https://facebook.com" className="text-light fs-3 me-3">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="text-light fs-3">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0 text-end">
            <h5 className="yellow-100 ">Address</h5>
            <p>123 Art Street</p>
            <p>Art City, AC 12345</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
