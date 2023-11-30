import logo from '../../assets/taawon.png';
import { NavLink } from "react-router-dom";

function DesktopNav() {
  return (
    <div className="flex justify-left md:items-center md:justify-around md:bg-custom-primary-blue shadow-md w-full fixed top-0 right-0">
          <div className="w-16 bg-white">
          <img src={logo} alt="Logo" className="text-whiteS"/>
          </div>
          <ul className="text-white h-[10vh] flex items-center justify-center gap-12">
            <NavLink to="/" className="cursor-pointer hover:text-custom-primary-yellow">Home</NavLink>
            <NavLink to="/about" className="cursor-pointer hover:text-custom-primary-yellow">About</NavLink>
            <NavLink to="/blog" className="cursor-pointer hover:text-custom-primary-yellow">Blog</NavLink>
            <NavLink to="/contact" className="cursor-pointer hover:text-custom-primary-yellow">Contact</NavLink>
          </ul>
          <button className="text-white px-4 py-2 bg-custom-primary-yellow hover:bg-custom-secondary-yellow">Free Case Evaluation</button>
          <select className="bg-custom-primary-blue text-white h-7 focus:outline-none text-sm cursor-pointer fixed right-8 top-4">
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
    </div>
  );
}

export default DesktopNav;
