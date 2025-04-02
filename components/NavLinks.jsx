import Link from "next/link";
const NavLinks = () => {
 return (
  <nav className="hidden lg:flex items-center gap-6 font-semibold">
   <Link
    href="/resume"
    className="hover:text-slate-500 ">
    Resume
   </Link>
   <Link
    href="/services"
    className="hover:text-slate-500 ">
    Services
   </Link>
   <Link
    href="/contact"
    className="hover:text-slate-500 ">
    Contact
   </Link>
   <Link
    href="/project"
    className="hover:text-slate-500 ">
    Project
   </Link>
   <button className="hidden lg:flex px-5 py-2  items-center justify-center bg-[#354da1] rounded">
    Hire Me
   </button>
  </nav>
 );
};

export default NavLinks;
