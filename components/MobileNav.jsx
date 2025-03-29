"use client";
import Link from "next/link";
import {useState} from "react";
import {CiMenuFries} from "react-icons/ci";
import {IoClose} from "react-icons/io5";

const Links = [
 {name: "Resume", path: "/resume"},
 {name: "Services", path: "/services"},
 {name: "Contact", path: "/contact"},
 {name: "Project", path: "/project"},

];

const Popup = ({isOpen, onClose}) => {
 if (!isOpen) return null;
 return (
  <div className="fixed inset-0 bg-black/60 flex flex-col items-end justify-center">
   <div className="flex flex-col bg-white items-center justify-between w-[300px] h-full">
    <div className="flex flex-col w-full gap-5">
     {/*Header*/}
     <div className="flex flex-col items-center justify-between w-full">
      <div className="flex items-center justify-between w-full p-4">
       <h1 className="text-black text-2xl font-bold">
        My Portofolio<span className="text-slate-500">.</span>
       </h1>
       <IoClose
        onClick={onClose}
        className="text-black text-3xl"
       />
      </div>
      <hr className="w-full border border-black" />
     </div>
     {/*Body*/}
     <div className="flex flex-col gap-5 p-4">
      {Links.map((item, index) => (
       <Link
        key={index}
        href={item.path}
        className="text-black text-lg">
        {item.name}
       </Link>
      ))}
     </div>
    </div>
    {/*Footer*/}
    <div className="flex items-center justify-center text-center p-4 w-full">
     <Link
      href="/"
      className="text-white bg-black rounded-full py-3 px-2 w-full text-lg">
      Hire Me
     </Link>
    </div>
   </div>
  </div>
 );
};

const MobileNav = () => {
 const [popup, openPopup] = useState(false);

 const toggleOpen = () => {
  openPopup(!popup);
 };
 return (
  <nav className="flex lg:hidden">
   <CiMenuFries
    className="text-white text-3xl"
    onClick={toggleOpen}
   />
   {popup && (
    <Popup
     isOpen={popup}
     onClose={toggleOpen}
    />
   )}
  </nav>
 );
};

export default MobileNav;
