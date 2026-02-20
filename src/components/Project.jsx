import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedContent from "./AnimatedContent";

 // Import the project images
import udemyImage from "../assets/images/Udemy-img.png";
import actodoImage from "../assets/images/Actodo-slide.jpg";
import tripadvisorImage from "../assets/images/tripad.jpg";
import nostraImage from "../assets/images/Nostra-img.jpg";
import ezcartImage from "../assets/images/productlist-tile.jpg";
import arunImage from "../assets/images/Arun ice banner.jpg";
import weatherImage from "../assets/images/Wapp.jpg";
import fhubImage from "../assets/images/fhub.jpg";

const projects = [
  {
    title: "Udemy Clone",
    description: "Udemy clone with React, Node.js",
    image: udemyImage,
    preview: "https://udemy-react-webpage-bi97vocvn-naveenkumars-projects-90c0c780.vercel.app/",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Actodo",
    description: "Task management app with React and Express authentication.",
    image: actodoImage,
    preview: "https://actodo-react-mu.vercel.app/",
    github: "#",
  },
  {
    title: "TripAdvisor",
    description: "TripAdvisor clone with user reviews and ratings.",
    image: tripadvisorImage,
    preview: "https://naveensivakumar14.github.io/Tripadviser-clone/",
    github: "#",
  },
  {
    title: "Nostra",
    description: "E-commerce platform with responsive design and product showcase.",
    image: nostraImage,
    preview: "https://naveensivakumar14.github.io/Nostra-Ecomm/",
    github: "#",
  },
  {
    title: "Product List App",
    description: "Product listing and shopping cart with React",
    image: ezcartImage,
    preview: "https://product-list-app-react-js.vercel.app/ProductList",
    github: "#",
  },
  {
    title: "Arun Icecreams",
    description: "Icecream website with React and Express backend.",
    image: arunImage,
    preview: "https://arun-icecream-clone.vercel.app/",
    github: "#",
  },
  {
    title: "Weather App",
    description: "API-based weather app with dynamic UI updates.",
    image: weatherImage,
    preview: "https://weather-app-react-mu.vercel.app/",
    github: "#",
  },
  {
    title: "Fashion Hub",
    description: "E-commerce fashion website with React and Express backend.",
    image: fhubImage,
    preview: "https://fashionhub-react.vercel.app/",
    github: "#",
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-200 mt-4">
            A showcase of my recent work and full-stack development experience.
          </p>
        </div>


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
        {/* 3x3 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition"
                  >
                    <FaExternalLinkAlt size={14} />
                    Preview
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 py-2 rounded-lg transition"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Projects;
