function Navbar() {
    return (
        <div className="flex items-center justify-around bg-custom-primary-blue">
        <div></div>
        <ul className="text-white h-[10vh] flex items-center justify-center gap-12">
            <li className="cursor-pointer hover:text-custom-primary-yellow">Home</li>
            <li className="cursor-pointer hover:text-custom-primary-yellow">About</li>
            <li className="cursor-pointer hover:text-custom-primary-yellow">Blog</li>
            <li className="cursor-pointer hover:text-custom-primary-yellow">Contact</li>
        </ul>
        <button className="px-4 py-2 bg-custom-primary-yellow hover:bg-yellow-700">Free Case Evalution</button>
        </div>
    )
}
export default Navbar;