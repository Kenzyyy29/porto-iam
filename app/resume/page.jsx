const About = () => {
 return (
  <section className="flex items-center gap-10 px-[100px] pt-[110px] justify-between min-h-screen">
   <div className="flex h-[450px] w-[400px] bg-[#555555] rounded-t-full"></div>
   <div className="flex flex-col gap-5 max-w-[500px]">
    <p className="text-balance text-white">
     A software engineer, the modern-day architect of digital realms, navigates
     the ethereal landscapes of code, sculpting intangible structures that shape
     our technological world. With fingers poised over keyboards like virtuoso
     pianists, they compose symphonies of logic, their minds a labyrinth of
     algorithms and solutions.Their canvas is a screen, a vast expanse where
     lines of code dance in intricate patterns, weaving the fabric of programs
     and applications. Each keystroke is a brushstroke, crafting intricate
     architectures and breathing life into innovative designs.In this digital
     atelier, they don the mantle of problem solvers, confronting bugs and
     glitches like valiant knights in an ever-evolving quest for perfection.
     Debugging becomes a noble pursuit, unraveling the mysteries hidden within
     the tangled webs of code. designs.In this digital atelier.
    </p>
    <button className="px-3 py-2 bg-[#354da1] rounded-lg w-[200px]">
     Download CV
    </button>
   </div>
  </section>
 );
};

export default About;
