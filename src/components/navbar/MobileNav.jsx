import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/taawon.png";

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdGavel } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FiFilm } from "react-icons/fi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdContactMail } from "react-icons/md";
import Header from "./Header";

export default function MobileNav() {
  const location = useLocation();

  const [openNav, setOpenNav] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNav]);

  const handleItemClick = () => {
    setOpenNav(false);
  };

  const toggle = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };
  return (
    <>
      {openNav ? (
        <div className="px-[24px] pt-28 bg-white h-[100vh] fixed top-0 w-[100%] z-[3000]">
          <button
            className="flex justify-end mb-20"
            type="button"
            onClick={() => setOpenNav(!openNav)}
          >
            <AiOutlineClose
              style={{ width: "2rem", height: "2rem", color: "black" }}
            />
          </button>
          <ul className="h-[60vh] overflow-y-scroll flex flex-col items-start justify-start gap-1 text-black">
            <MobileNavItems
              path="/"
              name="Home"
              onClick={handleItemClick}
              icon={<AiOutlineHome />}
              className={
                location.pathname == "/" && "bg-blue-600 px-2 py-3 rounded-lg"
              }
            />

            <li className="relative">
              <button
                type="button"
                onClick={() => toggle("about")}
                className={`font-sans font-semibold py-5 flex items-center gap-4 text-3xl overflow-hidden transition-all duration-300 ease-in-out ${
                  location.pathname == "/ask-a-lawyer" &&
                  "bg-blue-600 px-2 py-3 rounded-lg"
                }`}
              >
                <span>
                  <IoMdInformationCircleOutline />
                </span>
                <span>About {openMenu ? "-" : "+"}</span>
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 ease-in-out space-y-2 mt-2 ${
                  openMenu === "about" ? "block" : "hidden"
                } text-2xl mb-2 md:absolute md:mt-0 md:left-0 pl-5 md:top-full md:w-40 md:bg-gray-700 md:text-gray-300 md:shadow-lg md:rounded-md `}
              >
                <li>
                  <NavLink
                    to="/mission-statement"
                    onClick={handleItemClick}
                    className={`block hover:bg-blue-600 px-4 py-2 ${
                      location.pathname == "/mission-statement" &&
                      "bg-blue-600 px-2 py-3 rounded-lg"
                    }`}
                  >
                    Mission Statement
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/our-team"
                    onClick={handleItemClick}
                    className={`block hover:bg-blue-600 px-4 py-2 ${
                      location.pathname == "/our-team" &&
                      "bg-blue-600 px-2 py-3 rounded-lg"
                    }`}
                  >
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/president-message"
                    onClick={handleItemClick}
                    className={`block hover:bg-blue-600 px-4 py-2 ${
                      location.pathname == "/president-message" &&
                      "bg-blue-600 px-2 py-3 rounded-lg"
                    }`}
                  >
                    President&apos;s Message
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/award-and-certificate"
                    onClick={handleItemClick}
                    className={`block hover:bg-blue-600 px-4 py-2 ${
                      location.pathname == "/award-and-certificate" &&
                      "bg-blue-600 px-2 py-3 rounded-lg"
                    }`}
                  >
                    Award and Certificate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/company-profile"
                    onClick={handleItemClick}
                    className={`block hover:bg-blue-600 px-4 py-2 ${
                      location.pathname == "/company-profile" &&
                      "bg-blue-600 px-2 py-3 rounded-lg"
                    }`}
                  >
                    Company Profile
                  </NavLink>
                </li>
              </ul>
            </li>
            <MobileNavItems
              path="/legalServices"
              name="Legal Services"
              onClick={handleItemClick}
              icon={<MdGavel />}
              className={
                location.pathname == "/legalServices" &&
                "bg-blue-600 px-2 py-3 rounded-lg"
              }
            />
            <MobileNavItems
              path="/expertise"
              name="Expertise"
              onClick={handleItemClick}
              icon={<FaRegLightbulb />}
              className={
                location.pathname == "/expertise" &&
                "bg-blue-600 px-2 py-3 rounded-lg"
              }
            />
            <MobileNavItems
              path="/ask-a-lawyer"
              name="Ask A Lawyer"
              onClick={handleItemClick}
              icon={<HiOutlineChatAlt2 />}
              className={
                location.pathname == "/ask-a-lawyer" &&
                "bg-blue-600 px-2 py-3 rounded-lg"
              }
            />
            <MobileNavItems
              path="/multiMedia"
              name="MultiMedia"
              onClick={handleItemClick}
              icon={<FiFilm />}
              className={
                location.pathname == "/multiMedia" &&
                "bg-blue-600 px-2 py-3 rounded-lg"
              }
            />
            <MobileNavItems
              path="/contact"
              name="Contact"
              onClick={handleItemClick}
              icon={<MdContactMail />}
              className={
                location.pathname == "/contact" &&
                "bg-blue-600 px-2 py-3 rounded-lg"
              }
            />
          </ul>
        </div>
      ) : (
        <>
          <Header />
          {/* fixed top-10 right-4 transition-transform ease-in-out */}
          <div className="w-full px-10 fixed top-9 transition-transform ease-in-out flex justify-between bg-white">
            <button
              type="button"
              onClick={() => setOpenNav(!openNav)}
              className="z-555"
            >
              <GiHamburgerMenu style={{ width: "2rem", height: "2rem" }} />
            </button>

            <div className="bg-white duration-500">
              <div className="w-20">
                <img src={logo} alt="Logo" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function MobileNavItems({ path, name, onClick, icon, className }) {
  return (
    <li className="w-full">
      <NavLink
        to={path}
        className={`flex items-center gap-4 text-3xl py-5 mr-2 ${className}`}
        onClick={onClick}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </NavLink>
    </li>
  );
}
