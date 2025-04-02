import {FaGithub} from "react-icons/fa";

const services = [
 {
  name: "Web Development",
  icon: <FaGithub />,
  description: "Lorem Ipsum Sin Dolor Amet",
 },
 {
  name: "Web Development",
  icon: <FaGithub />,
  description: "Lorem Ipsum Sin Dolor Amet",
 },
 {
  name: "Web Development",
  icon: <FaGithub />,
  description: "Lorem Ipsum Sin Dolor Amet",
 },
 {
  name: "Web Development",
  icon: <FaGithub />,
  description: "Lorem Ipsum Sin Dolor Amet",
 },
 {
  name: "Web Development",
  icon: <FaGithub />,
  description: "Lorem Ipsum Sin Dolor Amet",
 },
 {
  name: "Web Development",
  icon: <FaGithub />,
  description: "Lorem Ipsum Sin Dolor Amet",
 },
];

const Services = () => {
 return (
  <section className="flex flex-col gap-4 pt-[80px] px-[100px] text-center w-full h-auto items-center">
   <h1 className="text-2xl text-white font-bold">SERVICES</h1>
   <div className="grid grid-cols-3 gap-10">
    {services.map((item, index) => (
     <div
      key={index}
      className="flex flex-col h-[200px] w-[330px] bg-[#1e1e1e] rounded-lg">
      <div className="bg-black/60 w-full h-full p-4 flex items-center flex-col justify-center gap-4 hover:bg-transparent transition-all ease-in-out duration-500 text-[#555555] hover:text-white">
       <div className="text-5xl text-[#354da1]">{item.icon}</div>
       <h1 className="text-xl font-semibold text-[#354da1]">{item.name}</h1>
       <p className="">{item.description}</p>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
};

export default Services;
