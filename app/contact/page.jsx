"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
 SelectLabel,
 SelectGroup,
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
 {
  icon: <FaPhoneAlt />,
  title: "Phone",
  description: "(+62) 859 2745 1743",
 },
 {
  icon: <FaEnvelope />,
  title: "Email",
  description: "kenzyworld29@gmail.com",
 },
 {
  icon: <FaMapMarkerAlt />,
  title: "Address",
  description: "Jl. Anu",
 },
];

const Contact = () => {
 return (
  <section className="bg-black text-white flex flex-col lg:flex-row">
   <div className="flex w-full min-h-screen py-[130px]">
    <div className="flex flex-col xl:flex-row gap-[30px]">
     {/* Form */}
     <div className="xl:w-[54%] order-2 xl:order-none">
      <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
       <h3 className="text-4xl text-accent">Let's Work Together</h3>
       <p className="text-white/60">
        Please fill out the form below to get in touch with me.
       </p>
       {/* Input */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
         type="firstname"
         placeholder="First Name"
        />
        <Input
         type="lastname"
         placeholder="Last Name"
        />
        <Input
         type="email"
         placeholder="Email Address"
        />
        <Input
         type="phone"
         placeholder="Phone Number"
        />
       </div>
       {/* Select */}
       <Select>
        <SelectTrigger className="w-full">
         <SelectValue placeholder="Select a Service" />
        </SelectTrigger>
        <SelectContent>
         <SelectGroup>
          <SelectLabel>Select a Service</SelectLabel>
          <SelectItem value="est">Web Development</SelectItem>
          <SelectItem value="cst">UI/UX Design</SelectItem>
          <SelectItem value="mst">Logo Design</SelectItem>
         </SelectGroup>
        </SelectContent>
       </Select>
       {/* Textarea */}
       <Textarea
        placeholder="Type Your Message Here."
        className="h-[200px]"
       />
       {/* Button */}
       <Button
        className="max-w-40"
        size="md">
        Send Message
       </Button>
      </form>
     </div>
     {/* Info */}
     <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
      <ul className="flex flex-col gap-10">
       {info.map((item, index) => {
        return (
         <li
          key={index}
          className="flex gap-6 items-center">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
           <div className="text-[28px]">{item.icon}</div>
          </div>
          <div className="flex-1">
           <p className="text-white/60">{item.title}</p>
           <h3 className="text-xl">{item.description}</h3>
          </div>
         </li>
        );
       })}
      </ul>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Contact;
