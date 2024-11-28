import logo from "../assets/taawon.png";
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="pt-24 px-5">
      <div className="md:pl-16 lg:flex lg:justify-around">
        <div>
          <Contact
            icon={<FaPhoneAlt size={24} />}
            title="Support and Reservation"
            value="+93 780 23 23 23"
          />
          <Contact
            icon={<FaLocationDot size={24} />}
            title="Address"
            value="Shahr-e-Naw, Kabul, Afghanistan"
          />
          <Contact
            icon={<MdEmail size={24} />}
            title="FEEDBACK"
            value="info@yourdomain.com"
          />
        </div>
        <div className="w-full my-24 lg:w-80 lg:my-0 2xl:w-96">
          <div className="flex items-center gap-8 mb-5">
            <img src={logo} alt="Logo" className="w-20" />

            <div className="p-4 border-[1px] border-gray-600 rounded-[50%] text-gray-400">
              <FaFacebook />
            </div>
            <div className="p-4 border-[1px] border-gray-600 rounded-[50%] text-gray-400">
              <FaLinkedin />
            </div>
            <div className="p-4 border-[1px] border-gray-600 rounded-[50%] text-gray-400">
              <FaSquareXTwitter />
            </div>
          </div>
          <div>
            <p className="text-gray-500 leading-8 text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              possimus exercitationem sit culpa id ducimus soluta et quaerat.
              Debitis nisi atque sint iste. Quidem animi numquam minima
              praesentium voluptas eos.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl mb-16 font-bold">Information</h3>
          <ul className="text-gray-600 flex flex-col gap-4">
            <li>About Us</li>
            <li>Our Menus</li>
            <li>Event Reservation</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function Contact({ icon, title, value }) {
  return (
    <div className="flex items-center gap-12 mb-12">
      <div className="p-4 border-[1px] border-gray-950 rounded-[50%] text-gray-400">
        {icon}
      </div>
      <div>
        <p>{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
