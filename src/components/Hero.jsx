

import profile from '../assets/images/profile-img.png';

// React Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Particles from './Particles';




const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0f172a] text-white flex items-center" data-aos="fade-up duration-3000"
    >
       <div className='absolute w-full h-full'>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={130}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="md:space-y-6  md:text-left">

          <h1 className="text-3xl pt-8 md:pt-0 md:text-6xl font-extrabold leading-tight md:text-left text-center">
            Hi, I'm
            <br />
            <span className=" from-blue-400 to-cyan-400 bg-clip-text text-transparent bg-linear-to-r animate-gradient-x">
              Naveen Sivakumar
            </span>
          </h1>

          <p className="text-gray-200 text-md py-3 md:py-0 md:text-xl max-w-xl">
            MERN Stack Developer crafting scalable and high-performance
            web applications. Passionate about creating seamless user experiences. let's build something amazing together!
          </p>

         {/* Buttons */}
          <div className="flex gap-4 pt-4m justify-center md:justify-start">

              <a
                href="https://linkedin.com/in/your-link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm md:px-6 md:py-3 md:text-lg rounded-lg 
                bg-blue-600 hover:bg-blue-700 
                transition duration-300 font-medium shadow-lg"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm md:px-6 md:py-3 md:text-lg rounded-lg 
                border border-gray-600 
                hover:bg-gray-200 hover:text-black transition duration-300 font-medium"
              >
                <FaGithub size={18} />
                GitHub
              </a>
        </div>


        </div>

        

        {/* RIGHT SIDE */}
      <div className="flex justify-center md:justify-end">

        <div className="relative w-72 md:w-96 group">

            {/* Creative Rectangle Shape */}
            <div className="overflow-hidden 
              rounded-[40px_10px_40px_10px] 
              border-4 border-blue-500/60
              shadow-2xl
              from-blue-500/20 to-cyan-500/20
            ">

              <img
                src={profile}
                alt="Naveenkumar"
                className="w-full h-full object-cover 
                transition-transform duration-700 ease-in-out 
                group-hover:scale-130"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
