import  { useState, useEffect } from 'react';
import logo from '../assets/taawon.png';
import emailIcon from '../assets/icons/email-icon.svg';
import phoneIcon from '../assets/icons/phone-icon.svg';

function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth > 786);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth > 786);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    screenWidth && (
      <section className="px-5 h-[10vh] flex justify-around items-center">
        <div className="w-20">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex items-center justify-center gap-7">
          <p className="flex items-center gap-2 text-sm">
            <img src={emailIcon} alt="Email Icon" style={{ fill: 'red' }} />
            info@taawon.af
          </p>
          <p className="flex items-center gap-2 text-sm">
            <img src={phoneIcon} alt="Phone Icon" style={{ fill: 'red' }} />
            +93 730 23 23 89
          </p>
        </div>
        <select className="h-7 focus:outline-none text-sm cursor-pointer">
          <option value="english" className="text-[14px]">
            En
          </option>
          <option value="Persian" className="text-[14px]">
            Fa
          </option>
          <option value="Pashto" className="text-[14px]">
            Pa
          </option>
        </select>
      </section>
    )
  );
}

export default Header;
