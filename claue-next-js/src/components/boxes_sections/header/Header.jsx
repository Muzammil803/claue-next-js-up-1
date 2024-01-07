import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CurrencySelects from "../../forms/dropdowns/CurrencySelects";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.png"
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";

import  NavMenu  from "./NavMenu";

const Header = () => {
  return (
    <header className="">
      <div className="header_top bg-[#f6f6f8] flex justify-between items-center w-full px-4 py-1">
        <div className="flex flex-1 px-4 items-center text-[#878787] text-sm">
          <IoCallOutline className="mx-2" /> <p className="mr-2">+01 xxxxxxx</p>
          <TfiEmail className="mx-2" /> <p className="">claue@muzammil.com</p>
        </div>
        <div className="flex flex-1 justify-center text-[#878787]">
          <p className="flex text-sm">
            Summer sale discount off{" "}
            <span className="text-[#ec0101]">&nbsp;50%!&nbsp;</span>
            <a href="#" className="text-black">
              {" "}
              Shop Now
            </a>
          </p>
        </div>
        <div className="flex-1 flex justify-end">
          <CurrencySelects />
        </div>
      </div>
      <div className="header_bottom shadow-sm flex py-4 px-4">

        <div className="logo flex-1 flex justify-center items-center">
          <Image src={logo} width={100} alt="logo"/>
        </div>
        <div className="nav flex-[4] flex justify-center items-center">
       
       <NavMenu/>
 
        </div>
        <div className="toolbar flex-1 flex justify-end items-center">
             <span className="mx-2 text-xl"><BsSearch/></span>
             <span className="mx-2 text-xl"><CgProfile/></span>
             <span className="mx-2 text-xl"><CiHeart/></span>
             <span className="mx-2 text-xl"><PiShoppingBagLight/></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
