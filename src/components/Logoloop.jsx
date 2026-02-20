

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

const logos = [
  { icon: <FaHtml5 />, color: "#E34F26" },
  { icon: <FaCss3Alt />, color: "#1572B6" },
  { icon: <FaJsSquare />, color: "#F7DF1E" },
  { icon: <FaReact />, color: "#61DAFB" },
  { icon: <FaNodeJs />, color: "#339933" },
  { icon: <SiExpress />, color: "#ffffff" },
  { icon: <SiMongodb />, color: "#47A248" },
  { icon: <SiTailwindcss />, color: "#06B6D4" },
  { icon: <SiRedux />, color: "#764ABC" },
  { icon: <SiTypescript />, color: "#3178C6" },
  { icon: <SiFirebase />, color: "#FFCA28" },
  { icon: <FaGitAlt />, color: "#F05032" },
  { icon: <FaGithub />, color: "#ffffff" },
  { icon: <SiVite />, color: "#646CFF" },
  { icon: <SiPostman />, color: "#FF6C37" },
  { icon: <SiNetlify />, color: "#00C7B7" },
];

const LogoLoop = () => {
  return (
    <section id="skills" className="py-8 bg-[#0f172a]  overflow-hidden">
     

      <div className="relative w-full md:py-10">
        {/* Animated Track */}
        <div
          className="flex items-center animate-scroll"
          style={{ gap: "80px" }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{
                height: "60px",
                fontSize: "60px",
                color: logo.color,
              }}
            >
              {logo.icon}
            </div>
          ))}
        </div>
        
      </div>

      

      {/* Animation Styles */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translate3d(0,0,0); }
            to { transform: translate3d(-50%,0,0); }
          }

          .animate-scroll {
            width: max-content;
            animation: scroll 30s linear infinite;
          }

          /* Mobile adjustments */
          @media (max-width: 768px) {
            .animate-scroll {
              animation-duration: 18s;
            }
          }
        `}
      </style>
    </section>
  );
};

export default LogoLoop;
