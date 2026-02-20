import ScrambledText from "./ScrambledText";



const About = () => {
  return (
    <section id="about" className=" bg-[#0f172a] text-white py-1">

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center md:my-2">
          <h2 className="text-3xl md:text-4xl font-bold p-0">
            About <span className="text-blue-500">Me</span>
          </h2>
        </div>
      </div>

        <div className="flex justify-center items-center">
          {/* LEFT CONTENT */}
          <div className=" text-gray-300 leading-relaxed text-xs md:text-normal">
            <ScrambledText
              className="scrambled-text-demo"
              radius={50}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              <p>
                I am a MERN Stack Developer focused on the building modern,
                scalable web applications Beyond coding, I am passionate about creative design, UI
                aesthetics, and crafting smooth user experiences. let's connect and create something amazing together</p>
            </ScrambledText>
          </div>
        </div>
   
  

      
    </section>
  );
};

export default About;
