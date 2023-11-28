import React, { useState, useEffect } from 'react';
import menuIcon from '../assets/icons/menu-icon.svg';

function Navbar() {
  const [mobileNav, setMobileNav] = useState(window.innerWidth < 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileNav(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-left md:items-center md:justify-around md:bg-[#082f49]">
      {mobileNav ? (
        <img src={menuIcon} alt="Humbarger Logo" className="w-[1.4rem]" onClick={toggleMobileMenu}/>
      ) : (
        <React.Fragment>
          <div></div>
          <ul className="text-white h-[10vh] flex items-center justify-center gap-12">
            <li className="cursor-pointer hover:text-custom-primary-yellow">Home</li>
            <li className="cursor-pointer hover:text-custom-primary-yellow">About</li>
            <li className="cursor-pointer hover:text-custom-primary-yellow">Blog</li>
            <li className="cursor-pointer hover:text-custom-primary-yellow">Contact</li>
          </ul>
          <button className="px-4 py-2 bg-custom-primary-yellow hover:bg-yellow-700">Free Case Evaluation</button>
        </React.Fragment>
      )}
    </div>
  );
}

export default Navbar;
