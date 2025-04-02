"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

const Header = () => {
 const [header, setHeader] = useState(false);

 const scrollHeader = () => {
  if (window.scrollY >= 20) {
   setHeader(true);
  } else {
   setHeader(false);
  }
 };

 useEffect(() => {
  window.addEventListener("scroll", scrollHeader);
  return () => {
   window.removeEventListener("scroll", scrollHeader);
  };
 }, []);

 return (
  <header
   className={`fixed z-10 top-0 lg:px-[100px] w-full justify-between flex items-center left-0 transition-all duration-700 text-white ${
    header ? "bg-black shadow-lg px-6 py-6 " : "px-6 py-8 bg-transparent"
   }`}>
   <Link
    href="/"
    className="text-3xl font-bold">
    My Protofolio<span className="text-slate-500">.</span>
   </Link>
   <NavLinks />
   
   <MobileNav />
  </header>
 );
};

export default Header;
