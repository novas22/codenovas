import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set the breakpoint as per your needs
    };

    handleResize(); // Call the function initially to set the initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src="https://res.cloudinary.com/duw2d3yeh/image/upload/v1689329652/course/blob_qxyzbn.png" alt="logo"/>
        </Link>
        {isMobile ? <MobileNavbar /> : <Navbar />}
      </div>
    </header>
  );
};

export default Header;
