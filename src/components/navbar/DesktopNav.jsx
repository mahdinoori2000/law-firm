import { NavLink } from "react-router-dom";
function DesktopNav() {
  return (
    <div className="flex justify-left md:items-center md:justify-around md:bg-[#082f49] right-4 w-full">
          <div></div>
          <ul className="text-white h-[10vh] flex items-center justify-center gap-12">
            <NavLink to="/" className="cursor-pointer hover:text-custom-primary-yellow">Home</NavLink>
            <NavLink to="/about" className="cursor-pointer hover:text-custom-primary-yellow">About</NavLink>
            <NavLink to="/blog" className="cursor-pointer hover:text-custom-primary-yellow">Blog</NavLink>
            <NavLink to="/contact" className="cursor-pointer hover:text-custom-primary-yellow">Contact</NavLink>
          </ul>
          <button className="px-4 py-2 bg-custom-primary-yellow hover:bg-yellow-700">Free Case Evaluation</button>
    </div>
  );
}

export default DesktopNav;
