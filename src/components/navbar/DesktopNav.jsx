import { NavLink, useLocation } from "react-router-dom";

// Icons
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

// Photos
import taawon from "../../assets/taawon.png";

function DesktopNav() {
  const location = useLocation();
  return (
    <nav className="flex justify-between gap-10 px-5 pt-12">
      {/* LOGO */}
      <div className="mt-[-30px]">
        <img src={taawon} alt="Taawon Logo" className="w-48" />
      </div>
      {/* NAV ITEMS */}
      <div className="flex gap-10 ">
        <div>
          <ul className="flex items-center text-lg text-gray-600 justify-end gap-x-8 gap-y-4 font-sans font-bold uppercase flex-wrap">
            <DesktopNavItem
              to="/"
              value="Home"
              className={location.pathname == "/" && "text-blue-600"}
            />

            <li className="relative group">
              <NavLink
                to="/"
                className=" hover:text-gray-100 px-5 group-focus-within:text-gray-100 group-focus-within:bg-blue-600 py-2 hover:bg-blue-600 transition-all duration-300"
              >
                About Us
              </NavLink>
              <div className="w-[29rem] absolute left-0 mt-2 hidden pl-14 pr-20 py-10 bg-gray-700 text-gray-100 shadow-lg group-hover:block group-focus-within:block">
                <Submenu to="/" menuName="Mission Statement" />
                <Submenu to="/" menuName="Our Team" />
                <Submenu to="/" menuName="President's Message" />
                <Submenu to="/" menuName="Award and Certificate" />
                <Submenu to="/" menuName="Company Profile" />
              </div>
            </li>

            <DesktopNavItem
              to="/legalServices"
              value="Legal Services"
              className={
                location.pathname == "/legalServices" && "text-blue-600"
              }
            />

            <DesktopNavItem
              to="/expertise"
              value="Expertise"
              className={location.pathname == "/expertise" && "text-blue-600"}
            />
            <DesktopNavItem
              to="/ask-a-lawyer"
              value="Ask A Lawyer"
              className={
                location.pathname == "/ask-a-lawyer" && "text-blue-600"
              }
            />
            <DesktopNavItem
              to="/multimedia"
              value="Legal Services"
              className={location.pathname == "/multimedia" && "text-blue-600"}
            />
            <DesktopNavItem
              to="/contact"
              value="Contact"
              className={location.pathname == "/contact" && "text-blue-600"}
            />
          </ul>
        </div>
        {/* LANUAGE */}
        <div className="relative">
          <div className="w-20 relative inline-block">
            <select
              name="language"
              id="language"
              className="appearance-none w-full bg-white border border-gray-300 rounded-md py-1 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
            >
              <option value="persian">دری</option>
              <option value="pashto">پشتو</option>
              <option value="english">English</option>
            </select>
            <span className="absolute left-2 top-2 pointer-events-none">
              🌐
            </span>
          </div>
          <div className="absolute right-5 top-20 flex flex-col gap-5 ">
            <a href="#" target="_blank">
              <FaFacebookF size={28} fill="#555" />
            </a>
            <a href="#" target="_blank">
              <RiInstagramFill size={28} fill="#555" />
            </a>
            <a href="#" target="_blank">
              <FaWhatsapp size={28} fill="#555" />
            </a>
            <a href="#" target="_blank">
              <FaYoutube size={28} fill="#555" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function DesktopNavItem({ to, value, className }) {
  return (
    <li>
      <NavLink
        to={to}
        className={`relative inline-block group transition-all duration-300 hover:text-blue-600 ${className} `}
      >
        {value}{" "}
        <span className="absolute left-0 bottom-[-7px] h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
    </li>
  );
}

function Submenu({ to, menuName }) {
  return (
    <NavLink
      to={to}
      className="block px-4 py-6 transition-all duration-300 hover:bg-gray-500"
    >
      {menuName}
    </NavLink>
  );
}

export default DesktopNav;
