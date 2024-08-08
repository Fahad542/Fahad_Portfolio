import React from "react";
import { motion } from "framer-motion";
import MobileCanvas from "./Mobile";


const Hero = () => {
  return (
    <div className="container hero-section">
      <div className="row d-flex align-items-center">
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="col-md-6"
        >
          <div className="round"></div>
          <div className="line"></div>
          <div className="hero">
            <p className="hero-text oleo">
              Hi I am <span className="myname">Fahad</span>
            </p>
            <p>Frontend Developer</p>

            <div className="hero-buttons">
              <button className="button">Download CV</button>
              <button className="button">Contact Me</button>
            </div>
          </div>
        </motion.div>
        <div className="col-md-6 position-relative">
          {/* <div className="circle-behind"></div> */}
          <div className="mobilediv">
            <MobileCanvas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
