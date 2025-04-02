import Stats from "@/components/Stats";
import Link from "next/link";
import {FaGithub, FaInstagram, FaTiktok} from "react-icons/fa";

const Social = [
 {name: "Github", path: "https://www.github.com/Kenzyyy29", icon: <FaGithub />},
 {
  name: "Instagram",
  path: "https://www.instagram.com/iamarchivess/",
  icon: <FaInstagram />,
 },
 {name: "Tiktok", path: "https://www.tiktok.com/@liliammx", icon: <FaTiktok />},
];

const Home = () => {
 return (
  <div className="bg-black text-white px-[100px] pt-[110px]">
   <section className="flex w-full h-auto bg-black/20">
    <div className="flex flex-col gap-4">
     <div className="flex flex-col">
      <h1 className="text-[#555555]">Hi, Saya</h1>
      <span className="font-semibold text-[#555555]">Ilham Ali Wardiana</span>
     </div>
     <span className="bg-gradient-to-r from-[#354da1] via-[#6981d8] to-[#354da1] bg-clip-text text-transparent text-5xl font-bold">
      Frontend Developer
     </span>
     <div className="flex gap-4 lg:mt-4 w-[250px]">
      {Social.map((item, index) => (
       <Link
        key={index}
        href={item.path}
        className="text-2xl border bg-transparent text-white rounded-full w-[50px] h-[50px] flex items-center justify-center">
        {item.icon}
       </Link>
      ))}
     </div>
     <div className="flex gap-5 mt-5">
      <button className="py-2 px-3 rounded-lg bg-[#354da1]">Hire Me</button>
      <button className="py-2 px-3 rounded-lg bg-transparent border border-white">
       Download CV
      </button>
     </div>
     <Stats />
    </div>
   </section>
  </div>
 );
};

export default Home;
