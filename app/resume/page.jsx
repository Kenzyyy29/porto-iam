import Link from "next/link";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
// experience data
const Experience = {
 icon: "/assets/resume/badge.svg",
 title: "My Experience",
 description:
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis explicabo, doloremque numquam aliquid quaerat facere quas.",
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

const Resume = () => {
 return (
  <div className="bg-black text-white flex flex-col lg:flex-row ">
   <section className="flex w-full h-screen pt-[150px]">
    <Tabs
     defaultValue="Experience"
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
        <h3 className="text-4xl font-bold">{Experience.title}</h3>
        <p className="max-w-[600px text-white/60] mx-auot xl:mx-0">
         {Experience.description}
        </p>
        <ScrollArea className="h-[400px]">
         <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {Experience.items.map((item, index) => {
           return (
            <li
             key={index}
             className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
             <span className="text-accent">{item.duration}</span>
             <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
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
     </div>
    </Tabs>
   </section>
  </div>
 );
};

export default Resume;
