"use client";

import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
 {
  num: "01",
  category: "Frontend",
  title: "Project 1",
  description:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, molestias.",
  stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
  image: "/project/1.jpg",
  live: "https://www.codevora.id",
  github: "",
 },
];

const Project = () => {
 const [project, setProject] = useState(projects[0]);


 return (
  <section
   className="h-auto flex flex-col justify-center pt-[70px] xl:px-0">
   <div className="w-full mx-auto">
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
     <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
      <div className="flex flex-col gap-[30px] h-[50%]">
       {/* Outline Num */}
       <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
        {project.num}
       </div>
       {/* Project Category */}
       <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {project.category} Project
       </h2>
       {/* Project Description */}
       <p className="text-white/60">{project.description}</p>
       {/* Stack */}
       <ul className="flex gap-4">
        {project.stack.map((item, index) => {
         return (
          <li
           key={index}
           className="text-xl text-accent">
           {item.name}
           {/* Remove the last Comma */}
           {index !== project.stack.length - 1 && ","}
          </li>
         );
        })}
       </ul>
       {/* Border */}
       <div className="border border-white/20"></div>
       {/* Buttons */}
       <div className="flex items-center gap-4">
        {/* Live Project Buttons */}
        <Link href={project.live}>
         <TooltipProvider delayDuration={100}>
          <Tooltip>
           <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
           </TooltipTrigger>
           <TooltipContent>
            <p>Live Project</p>
           </TooltipContent>
          </Tooltip>
         </TooltipProvider>
        </Link>
        {/* Github Project Buttons */}
        <Link href={project.github}>
         <TooltipProvider delayDuration={100}>
          <Tooltip>
           <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
            <BsGithub className="text-white text-3xl group-hover:text-accent" />
           </TooltipTrigger>
           <TooltipContent>
            <p>Github Repository</p>
           </TooltipContent>
          </Tooltip>
         </TooltipProvider>
        </Link>
       </div>
      </div>
     </div>
     <div className="w-full xl:w-[50%]">
      <div
       className="xl:h-[520px] ">
       {projects.map((project, index) => {
        return (
         <div
          key={index}
          className="w-full h-[300px] mt-[95px]">
          <div className="h-full relative group flex justify-center items-center bg-pink-50/20">
           {/* Image */}
           <div className="relative w-full h-full">
            <Image
             src={project.image}
             fill
             className="object-cover"
             alt=""
            />
           </div>
          </div>
         </div>
        );
       })}
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Project;
