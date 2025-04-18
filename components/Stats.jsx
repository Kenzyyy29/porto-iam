"use client";

import CountUp from "react-countup";

const stats = [
 {
  num: 2,
  text: "Years of Experience",
 },
 {
  num: 2,
  text: "Projects Completed",
 },
 {
  num: 2,
  text: "Technologies mastered",
 },
];

const Stats = () => {
 return (
  <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
   <div className="container mx-auto">
    <div className="flex flex-wrap gap-6 max-w-[200px] mx-auto xl:max-w-none bg-[#1e1e1e] py-8 px-4 rounded-lg">
     {stats.map((item, index) => {
      return (
       <div
        className="flex-1 flex-col flex gap-4 justify-center xl:justify-start"
        key={index}>
        <CountUp
         end={item.num}
         duration={5}
         delay={2}
         className="text-4xl xl:text-6xl font-extrabold"
        />
        <p
         className={`${
          item.text.length < 15 ? "w-[200px]" : "w-[200px]"
         } text-white/80 flex items-center`}>
         {item.text}
        </p>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
};

export default Stats;
