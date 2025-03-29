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
   <section className="flex w-full min-h-screen py-[80px]">
    <div className=" flex flex-col gap-6 lg:gap-10">
     <div className="flex flex-col gap-5 px-[100px]">
      <span className="text-[113px] font-bold">Frontend Developer</span>
      <div className="flex gap-10">
       <p className="max-w-[500px] text-lg">
        Saya merupakan seorang Frontend Developer Pemula, saya belajar Frontend
        secara otodidak, dan saya selalu bersemangat untuk mempalajari hal baru.
       </p>
       <p className="max-w-[500px] text-lg">
        Saya merupakan seorang Frontend Developer Pemula, saya belajar Frontend
        secara otodidak, dan saya selalu bersemangat untuk mempalajari hal baru.
       </p>
      </div>
     </div>
     <div
      className="w-[1180px] h-[400px] bg-[#dbdbd3] rounded-r-full border"
      style={{backgroundImage: "url('/project/1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      }}></div>
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
