import logo from '../assets/taawon.png';
import { FaFacebook, FaTwitter, FaLinkedin, FaPhoneAlt,FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-custom-primary-blue text-white py-5">
      <div className="container mx-auto grid justify-items-start px-4 grid-cols-1 md:grid-cols-4 gap-4">
        {/* Column 1: Logo and Social Media */}
        <div className="col-span-1 md:col-span-1 justify-items-start items-center">
          <h3 className="font-serif text-lg">Taawon</h3>
          <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
          <div className="flex space-x-4">
            <a href="#" target="_blank">
              <FaFacebook />
            </a>
            <a href="#" target="_blank">
              <FaTwitter />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Columns 2-5: Text */}
        <div className="col-span-1 md:col-span-1 justify-items-start items-center">
            <h3 className="font-serif text-lg mb-4">Navigation Link</h3>
            <ul className="text-sm">
                <li className="mb-2 hover:underline cursor-pointer">About Us</li>
                <li className="mb-2 hover:underline cursor-pointer">Practice Area</li>
                <li className="mb-2 hover:underline cursor-pointer">FAQs</li>
                <li className="mb-2 hover:underline cursor-pointer">Blog</li>
                <li className="mb-2 hover:underline cursor-pointer">Contact Us</li>
            </ul>
        </div>
        <div className="col-span-1 md:col-span-1 justify-items-start items-center">
          <h3 className="font-serif text-lg mb-4">Contact Info</h3>
          <ul className="text-sm">
                <li className="mb-2 flex gap-2"><FaLocationDot className="mt-1" />4th district 4th street of project taimani Kabul, Afghanistan</li>
                <li className="mb-2 flex items-center gap-2"><FaPhoneAlt />+93 730 23 23 89</li>
                <li className="mb-2 flex items-center gap-2"><MdEmail />info@taawon.af</li>
                
            </ul>
        </div>
        <div className="col-span-1 md:col-span-1 justify-items-start items-center">
          <h3 className="font-serif text-lg mb-4">Stay Updated</h3>
          <input className="bg-transparent border border-t-1 border-r-1 border-b-1 border-l-1 px-2 py-1 border-white focus:outline-none mb-2" type="text" placeholder="Enter Email Address" />
            <button type="submit " className="w-full text-sm px-4 py-2 bg-custom-primary-yellow hover:bg-custom-secondary-yellow mb-3 flex items-center gap-2 justify-center"><span>Subscribe Now</span> <FaArrowRight /></button>
        </div>
      </div>
      <div>
        <hr className="py-3 mt-3" />
        <p className="text-center text-white">Copy right allowed 2023</p>
       
      </div>
    </footer>
  );
};

export default Footer;
