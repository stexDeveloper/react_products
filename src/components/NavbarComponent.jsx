import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

function NavbarComponent() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  // function handleCloseToggle() {
  //   setToggle(false);
  // }

  return (
    <div className="h-[120px] flex items-center justify-between px-[20px]">
      <img src={logo} alt="coding" className="w-[300px] h-[300px] " />

      {/* desktop view */}
      <ul className="items-center gap-[10px] hidden lg:flex">
        <li className="text-[20px] text-mainBlue">Home</li>
        <li className="text-[20px] text-mainBlue">About</li>
        <li className="text-[20px] text-mainBlue">Contact</li>
      </ul>

      {/* for mobile view */}
      <div className="flex lg:hidden ">
        <IoMenuSharp
          size={40}
          onClick={handleToggle}
          className="cursor-pointer"
        />

        {/* novi element */}
        {toggle && (
          <div className="absolute top-0 bottom-[60%] right-0 w-[300px] bg-mainBlue">
            <AiOutlineClose
              size={40}
              className="position absolute top-[20px] right-[20px] cursor-pointer"
              onClick={handleToggle}
            />
            <ul className="items-center gap-[10px] flex flex-col mt-[100px]">
              <li className="text-[20px] text-mainGray">Home</li>
              <li className="text-[20px] text-mainGray">About</li>
              <li className="text-[20px] text-mainGray">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarComponent;
