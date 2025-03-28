import Link from "next/link";
const NavLinks = () => {
 return (
  <nav className="hidden lg:flex gap-6 font-semibold">
   <Link
    href="/resume"
    className="hover:text-slate-500 ">
    Resume
   </Link>
   <Link
    href="/"
    className="hover:text-slate-500 ">
    Services
   </Link>
   <Link
    href="/"
    className="hover:text-slate-500 ">
    Contact
   </Link>
  </nav>
 );
};

export default NavLinks;
