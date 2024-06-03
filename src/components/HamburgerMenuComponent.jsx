import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function HamburgerMenuComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-green-500 w-full h-full">
      <div
        className="absolute top-4 right-4 text-3xl cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav
        className={`md:flex md:items-center md:justify-end ${
          isOpen ? "block" : "hidden"
        } absolute md:static bg-green-500 w-full md:w-auto p-[30px]`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          {navItems.map((item, index) => (
            <li key={index} className="text-white text-lg py-2 md:py-0">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenuComponent;
