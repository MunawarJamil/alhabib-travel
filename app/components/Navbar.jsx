"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
import { MdOutlineContactPhone } from "react-icons/md";
function Navbar() {
  const [toggle, isToggle] = useState(false);
  function onToggleClick() {
    isToggle(!toggle);
  }
  return (
    <>
      <nav className=" w-full flex justify-between md:justify-around relative items-center bg-slate-200 py-2 px-10">
        {/* toggle buttons */}
        <div className="md:hidden">
          {toggle ? (
            <>
              <GiTireIronCross
                onClick={onToggleClick}
                className="  w-8 h-10 "
              />
              <div className="contact ">
                <button className=" absolute  bg-[#00454A] top-[6rem]   w-[90%]   left-8 py-5 text-white   border-2   font-bold text-lg flex  items-center justify-center gap-3">
                  {" "}
                  <MdOutlineContactPhone /> CONTACT US
                </button>
              </div>
            </>
          ) : (
            <RxHamburgerMenu onClick={onToggleClick} className="w-10 h-10  " />
          )}
        </div>

        {/* Logo */}

        <div>
          <img src="/logo.webp" alt="Logo" />
        </div>

        <div className=" hidden md:flex contact   ">
          <button className=" flex items-center gap-3  bg-[#00454A]   left-0 px-5 py-4   border-b-2  text-white font-bold text-lg ">
            {" "}
            <MdOutlineContactPhone /> CONTACT US
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
