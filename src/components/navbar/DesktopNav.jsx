import logo from "../../assets/taawon.png";
import { NavLink } from "react-router-dom";

// Icons
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

// Photos
import hammer from "../../assets/hammer.png";
import taawon from "../../assets/taawon.png";

function DesktopNav() {
  return (
    <nav>
      {/* Top Nav */}
      <div className="bg-zinc-300 h-[36px] flex  justify-center  items-center ">
        <div className="px-[14px] flex justify-between items-center mx-auto md:w-[720px] lg:w-[970px] xl:w-[1170px]  ">
          <ul className="  text-zinc-600 flex gap-[10px] px-[14px] ">
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

      {/* LOGO */}
      <div>
        <div className="px-[14px] flex justify-between items-center mx-auto md:w-[720px] lg:w-[970px] xl:w-[1170px]  ">
          <img src={taawon} alt="" className="h-[120px]" />
          <img src={hammer} alt="" className="h-[120px]" />
        </div>
      </div>

      {/* Navbar */}
      <div>
        <div className="bg-zinc-300  text-zinc-700 font-bold min-h-[38px]   flex items-center">
          <div className="px-[14px] flex justify-center items-center  mx-auto md:w-[720px] lg:w-[970px] xl:w-[1170px]  ">
            <ul className="flex flex-shrink-0 flex-wrap gap-y-[12px] w-full  justify-center  items-center">
              <li>
                <NavBtn to="/" title="home" />
              </li>
              <li>
                <NavBtn to="/" title="about us" />
              </li>
              <li>
                <NavBtn to="/" title="legal services" />
              </li>
              <li>
                <NavBtn to="/" title="expertise" />
              </li>
              <li>
                <NavBtn to="/ask-a-lawyer" title="ask a lawyer" />
              </li>
              <li>
                <NavBtn to="/" title="jobs" />
              </li>
              <li>
                <NavBtn to="/" title="multimedia" />
              </li>
              <li>
                <NavBtn to="/" title="contact us" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ icon, link = "#" }) {
  return (
    <a className="hover:text-white" href={link}>
      {icon}
    </a>
  );
}

function NavBtn({ title, to }) {
  return (
    <NavLink
      to={to}
      className={`hover:bg-slate-500 text-[15px] xl:text-[16px] uppercase py-2 hover:text-zinc-50 px-2 xl:px-4 border-white border-r-[1px] ${
        title == "home" ? "border-l-[1px]" : ""
      } `}
    >
      {title}
    </NavLink>
  );
}

export default DesktopNav;
