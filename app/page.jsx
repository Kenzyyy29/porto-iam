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
  <div className="bg-black text-white">
   <section className="flex w-full h-screen pt-[150px]">
    <div className="max-w-[500px] flex flex-col gap-6 lg:gap-4">
     <span className="text-3xl font-bold">Frontend Developer</span>
     <h1 className="text-4xl font-bold">
      Hello I'm <span className="text-accent">Kenzy</span>
     </h1>
     <p className="max-w-[500px] text-lg">
      I Excel at crafting elegant digital experiences and I am proficient in
      various programming languages and technologies.
     </p>
     <Link href="/">
      <button className="cursor-pointer border rounded-full py-3 px-2 w-[250px]">
       Download CV
      </button>
     </Link>
     {/*Socials*/}
     <div className="flex gap-4 lg:mt-4 w-[250px]">
      {Social.map((item, index) => (
       <Link
        key={index}
        href={item.path}
        className="text-2xl border bg-white text-black rounded-full w-[73px] h-[73px] flex items-center justify-center">
        {item.icon}
       </Link>
      ))}
     </div>
    </div>
   </section>
  </div>
 );
};

export default Home;
