import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import My_projects from "./components/My_projects";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { gsap, Power3 } from "gsap";
import Project from "./components/Project";
// import { Canvas } from '@react-three/fiber';
function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut
  return (
    <>
      <Navbar timeline={tl} ease={ease}/>
      <Hero />
      <About />
   
    </>
  );
}

export default App;
