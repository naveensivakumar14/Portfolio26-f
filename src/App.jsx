import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoLoop from "./components/Logoloop";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Counter from "./components/Counter";
import Experience from "./components/Experience";
import GCertification from "./components/GCertifications";
import Footer from "./components/Footer";





// Import AOS library and CSS
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Counter />
      <LogoLoop />
      <Experience />  
      <GCertification />
      <Footer />



     
    </>
  );
}

export default App;
