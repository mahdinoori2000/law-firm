// Icons
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-zinc-300 h-[36px] flex justify-center w-full items-center fixed top-0">
      <div className="w-full px-2 flex justify-between items-center md:w-[720px] lg:w-[970px] xl:w-[1170px]  ">
        <ul className="text-zinc-600 flex gap-[10px] px-[14px]">
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
    </header>
  );
};

function SocialIcon({ icon, link = "#" }) {
  return (
    <a className="hover:text-white" href={link}>
      {icon}
    </a>
  );
}

export default Header;
