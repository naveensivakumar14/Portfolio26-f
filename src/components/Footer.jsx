import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0f172a] text-gray-400 pt-12 pb-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Naveen
            </h2>
            <p className="mt-2 text-sm">
              Full Stack Developer | Healthcare Analyst
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-5 text-xl">
            <a
              href="https://github.com/naveensivakumar14"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/naveenksivakumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:naveen14sivakumar@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-6">
          © {new Date().getFullYear()} Naveen. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
