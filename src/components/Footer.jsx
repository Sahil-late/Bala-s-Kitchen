import React from 'react';

const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 w-full z-10 bg-[rgba(0,0,0,0.8)]  text-white py-3 text-center">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Bala's Kitchen</p>
        <p>Contact us: +91 8767685939</p>
      </div>
    </footer>
  );
};

export default Footer;
