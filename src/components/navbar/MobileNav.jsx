import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/taawon.png";

// Icons
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function MobileNav() {
  const [openNav, setOpenNav] = useState(false);

  const handleItemClick = () => {
    setOpenNav(false);
  };

  return (
    <div className="relative mb-14 bg-white">
      <div
        className={`fixed top-0 left-0 z-50 h-[15vh] w-full bg-${
          openNav ? "custom-primary-blue" : "white"
        }`}
      >
        {!openNav && (
          <div className="bg-zinc-300 h-[36px] flex justify-center w-full  items-center ">
            <div className="w-full px-2 flex justify-between items-center md:w-[720px] lg:w-[970px] xl:w-[1170px]  ">
              <ul className="  text-zinc-600 flex gap-[10px]  px-[14px] ">
                <li>
                  <SocialIcon icon={<FaFacebookF />} />
                </li>
                <li>
                  <SocialIcon icon={<FaXTwitter />} />
                </li>
                <li>
                  <SocialIcon
                    icon={<TiSocialGooglePlus className="scale-[1.35]" />}
                  />
                </li>
                <li>
                  <SocialIcon icon={<FaYoutube />} />
                </li>
                <li>
                  <SocialIcon icon={<RiInstagramFill />} />
                </li>
              </ul>
              <div>
                <button
                  type="button"
                  className="px-[10px] py-1   hover:bg-slate-500 hover:text-white"
                >
                  دری
                </button>
                <button
                  type="button"
                  className="px-[10px]  py-1  hover:bg-slate-500 hover:text-white"
                >
                  پشتو
                </button>
                <button
                  type="button"
                  className="px-[10px]  py-1  hover:bg-slate-500 hover:text-white"
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpenNav(!openNav)}
          className="fixed left-4 top-14 z-500"
        >
          {openNav ? (
            <AiOutlineClose
              style={{ width: "2rem", height: "2rem", color: "white" }}
            />
          ) : (
            <GiHamburgerMenu style={{ width: "2rem", height: "2rem" }} />
          )}
        </button>
        {!openNav && (
          <div className="fixed top-10 right-4 transition-transform ease-in-out bg-white duration-500">
            <div className="w-20">
              <img src={logo} alt="Logo" />
            </div>
          </div>
        )}
      </div>

      <select
        className={`fixed right-8 top-6 z-${
          openNav ? "50" : "-1"
        } h-7 focus:outline-none text-[18px] text-white cursor-pointer bg-custom-primary-blue`}
        style={{ display: openNav ? "block" : "none" }}
      >
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

      <div
        className={`${
          openNav ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-[100%] h-screen bg-custom-primary-blue text-white transition-transform ease-in-out duration-500`}
      >
        <ul className="h-full flex flex-col items-center justify-center gap-5">
          <MobileNavItems path="/" name="Home" onClick={handleItemClick} />
          <MobileNavItems
            path="/about"
            name="About"
            onClick={handleItemClick}
          />
          <MobileNavItems
            path="/legalServices"
            name="Legal Services"
            onClick={handleItemClick}
          />
          <MobileNavItems
            path="/expertise"
            name="Expertise"
            onClick={handleItemClick}
          />
          <MobileNavItems
            path="/ask-a-lawyer"
            name="Ask A Lawyer"
            onClick={handleItemClick}
          />
          <MobileNavItems
            path="/multiMedia"
            name="MultiMedia"
            onClick={handleItemClick}
          />
          <MobileNavItems
            path="/contact"
            name="Contact"
            onClick={handleItemClick}
          />
        </ul>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link = "#" }) {
  return (
    <a className="hover:text-white" href={link}>
      {icon}
    </a>
  );
}

function MobileNavItems({ path, name, onClick }) {
  return (
    <li>
      <NavLink
        to={path}
        className="flex items-center gap-4 text-2xl"
        onClick={onClick}
      >
        <span>{name}</span>
      </NavLink>
    </li>
  );
}

MobileNavItems.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
