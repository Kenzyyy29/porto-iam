"use client";

import {FaHtml5, FaCss3, FaJs, FaReact} from "react-icons/fa";

import {
 SiTailwindcss,
 SiNextdotjs,
 SiAdobephotoshop,
 SiAdobeillustrator,
} from "react-icons/si";

// about data
const about = {
 title: "About Me",
 description:
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis explicabo, doloremque numquam aliquid quaerat facere quas.",
 info: [
  {
   fieldName: "Name",
   fieldValue: "Ilham Ali Wardiana",
  },
  {
   fieldName: "Phone",
   fieldValue: "(+62) 877 4615 6529",
  },
  {
   fieldName: "Experience",
   fieldValue: "2 Years",
  },
  {
   fieldName: "Instagram",
   fieldValue: "@simp4iammm",
  },
  {
   fieldName: "Nationality",
   fieldValue: "Indonesian",
  },
  {
   fieldName: "Email",
   fieldValue: "kenzyworld29@gmail.com",
  },
  {
   fieldName: "Freelance",
   fieldValue: "Available",
  },
  {
   fieldName: "Languages",
   fieldValue: "Bahasa, English",
  },
 ],
};

// experience data
const experience = {
 icon: "/assets/resume/badge.svg",
 title: "Pengalaman",
 description:
  "Saya memiliki pengalaman kerja dalam beberapa bidang pekerjaan seperti berikut : ",
 items: [
  {
   company: "Codevora Tech",
   position: "Founder, Project Manager, UI Designer",
   duration: "December 2024 - Present",
  },
  {
   company: "911 Coffee Tasikmalaya",
   position: "Digital Marketing",
   duration: "July 2023 - Present",
  },
  {
   company: "Trashthetic Clothing",
   position: "Founder, Graphic Designer",
   duration: "June 2022 - July 2022",
  },
  {
   company: "Macaloz ",
   position: "Graphic Designer",
   duration: "February 2022 - May 2022",
  },
 ],
};

// education data
const education = {
 icon: "/assets/resume/cap.svg",
 title: "My Education",
 description:
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis explicabo, doloremque numquam aliquid quaerat facere quas.",
 items: [
  {
   institution: "SMA Negeri 4 Tasikmalaya",
   degree: "Ilmu Pengetahuan Sosial",
   duration: "2018 - 2021",
  },
  {
   institution: "Online Course Platform",
   degree: "Front-end Development",
   duration: "2021 - present",
  },
 ],
};

// skills data
const skills = {
 title: "My Skills",
 description:
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis explicabo, doloremque numquam aliquid quaerat facere quas.",
 skillList: [
  {
   icon: <FaHtml5 />,
   name: "Html 5",
  },
  {
   icon: <FaCss3 />,
   name: "Css 3",
  },
  {
   icon: <FaJs />,
   name: "Javascript",
  },
  {
   icon: <FaReact />,
   name: "React.Js",
  },
  {
   icon: <SiNextdotjs />,
   name: "Next.Js",
  },
  {
   icon: <SiTailwindcss />,
   name: "tailwind.css",
  },
  {
   icon: <SiAdobeillustrator />,
   name: "Adobe Illustrator",
  },
  {
   icon: <SiAdobephotoshop />,
   name: "Photoshop",
  },
 ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";


const Resume = () => {
 return (
  <div className="bg-black text-white flex flex-col lg:flex-row">
   <div className="flex w-full min-h-screen py-[130px]">
    <Tabs
     defaultValue="experience"
     className="flex flex-col xl:flex-row gap-[60px]">
     <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
      <TabsTrigger value="experience">Experience</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="skills">Skills</TabsTrigger>
      <TabsTrigger value="about">About Me</TabsTrigger>
     </TabsList>

     {/*Content*/}
     <div className="min-h-[70vh] w-full">
      {/*Experience*/}
      <TabsContent
       value="experience"
       className="w-full">
       <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="w-full text-white/60] mx-auot xl:mx-0">
         {experience.description}
        </p>
        <ScrollArea className="h-[400px]">
         <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.items.map((item, index) => {
           return (
            <li
             key={index}
             className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
             <span className="text-accent">{item.duration}</span>
             <h3 className="text-xl min-h-[60px] text-center lg:text-left">
              {item.position}
             </h3>
             <div className="flex items-center gap-3">
              {/*dat*/}
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.company}</p>
             </div>
            </li>
           );
          })}
         </ul>
        </ScrollArea>
       </div>
      </TabsContent>

      {/*Education*/}
      <TabsContent
       value="education"
       className="w-full">
       <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{education.title}</h3>
        <p className="max-w-[600px text-white/60] mx-auot xl:mx-0">
         {education.description}
        </p>
        <ScrollArea className="h-[400px]">
         <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {education.items.map((item, index) => {
           return (
            <li
             key={index}
             className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
             <span className="text-accent">{item.duration}</span>
             <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
              {item.degree}
             </h3>
             <div className="flex items-center gap-3">
              {/*dat*/}
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.institution}</p>
             </div>
            </li>
           );
          })}
         </ul>
        </ScrollArea>
       </div>
      </TabsContent>

      {/*skills*/}
      <TabsContent
       value="skills"
       className="w-full h-full">
       <div className="flex flex-col gap-[30px] w-full">
        <div className="flex flex-col gap-[30px] text-center xl:text-left">
         <h3 className="text-4xl font-bold">{skills.title}</h3>
         <p className=" text-white/60 mx-auto xl:mx-0">
          {skills.description}
         </p>
        </div>
        <ul className="grid grid-colds-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
         {skills.skillList.map((skill, index) => {
          return (
           <li key={index}>
            <TooltipProvider delayDuration={100}>
             <Tooltip>
              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
               <div className="text-6xl group-hover:text-accent transition-all duration-300">
                {skill.icon}
               </div>
              </TooltipTrigger>
              <TooltipContent>
               <p className="capitalize">{skill.name}</p>
              </TooltipContent>
             </Tooltip>
            </TooltipProvider>
           </li>
          );
         })}
        </ul>
       </div>
      </TabsContent>

      {/*about*/}
      <TabsContent
       value="about"
       className="w-full text-center xl:text-left">
       <div className="flex flex-col gap-[30px] ">
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className=" text-white/60 mx-auto xl:mx-0">
         {about.description}
        </p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 w-full  ">
         {about.info.map((item, index) => {
          return (
           <li
            key={index}
            className="flex  items-center justify-center xl:justify-start gap-4">
            <span className="text-white/60">{item.fieldName}</span>
            <span className="text-xl">{item.fieldValue}</span>
           </li>
          );
         })}
        </ul>
       </div>
      </TabsContent>
     </div>
    </Tabs>
   </div>
  </div>
 );
};

export default Resume;
