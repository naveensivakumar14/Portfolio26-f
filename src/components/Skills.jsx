import AnimatedContent from "./AnimatedContent";



import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiPostman,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiNetlify,
} from "react-icons/si";



const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#15173D" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", icon: <FaGithub />, color: "#15173D" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      md:py-20 
      bg-[#0f172a]
      dark:bg-[#0f172a] 
      text-white
      dark:text-white 
      transition-colors duration-300"
    >

        <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-blue-500">Skills</span>
            </h2>
            <p className="mt-6 text-sm md:text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to craft interative web applications.
          </p>
          </div>


   
      {/* //bounce animation for skill cards */}

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={2}
        ease="bounce.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      >
        <div className="max-w-7xl md:mx-auto px-6">
          {/* 8*2 grid */}
          <div className="grid grid-cols-2 sm:grid-cols-8 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
              group
              flex flex-col items-center justify-center
              p-4 rounded-2xl
              md:bg-slate-100 bg-[#1e293b]
              border border-gray-200 dark:border-gray-700
              hover:shadow-xl
              hover:-translate-y-2
              transition-all duration-300 cursor-pointer"
              >
                <div
                  className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-white md:text-black text-sm md:text-md text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Skills;
