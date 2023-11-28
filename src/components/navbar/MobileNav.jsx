import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegNewspaper, FaSuitcaseRolling } from 'react-icons/fa';
import {
  AiOutlineClose, AiOutlineHome, AiOutlineContacts,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MobileNav() {
  const [openNav, setOpenNav] = useState(false);
  if (openNav) {
    return (
      <div className="h-[100vh] absolute left-0 top-0 z-10 w-[250px] bg-slate-50 ">
        <div className="bg-blue-500 h-[25vh] flex justify-between px-4 py-4 items-start">
          <button type="button" onClick={() => setOpenNav(false)}>
            <AiOutlineClose style={{ width: '1.2rem', height: '1.2rem', color: '#fff' }} />
          </button>
        </div>
        <ul className="p-4 flex flex-col gap-5">
          <MobileNavItems path="/" icon={<AiOutlineHome />} name="Home" />
          <MobileNavItems path="/about" icon={<FaSuitcaseRolling />} name="Destination" onClick={() => setOpenNav(false)} />
          <MobileNavItems path="/blog" icon={<FaRegNewspaper />} name="Blog" />
          <MobileNavItems path="/contact" icon={<AiOutlineContacts />} name="Contact" />
        </ul>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <button type="button" onClick={() => setOpenNav(true)} className="absolute left-3 top-3 z-10">
        <GiHamburgerMenu style={{ width: '2rem', height: '2rem' }} />
      </button>
    </div>
  );
}

function MobileNavItems({ path, icon, name }) {
  return (
    <li>
      <NavLink to={path} className="flex items-center gap-4">
        {icon}
        <span>{name}</span>
      </NavLink>
    </li>
  );
}

MobileNavItems.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};
