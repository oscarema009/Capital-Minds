import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <h2>Main Menu</h2>
        <ul className=''>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
      <div className="column">
        <h2>Contact Information</h2>
        <p>Email: Luiserbarberan@gmail.com</p>
        <p>Address: 16192 Coastsl Highway  Lewes  Delawere 19958</p>
        <p>Phone: +54 9 11 683-7023</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//<div className="column">
//        <h2>Legal</h2>
//        <ul>
//          <li><a href="/copyright">Copyright Notice</a></li>
//          <li><a href="/privacy-policy">Privacy Policy</a></li>
//          <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
//        </ul>
//      </div>