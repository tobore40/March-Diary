import React from "react";
import Logo from "../logo.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./About.css";

function About() {
  return (
    <>
      <section className="section about" id="about">
        <div className="title">
          <h1>About me</h1>
        </div>
        <div className="about-center container">
          <div className="left" data-aos="fade-right" data-aos-duration={2000}>
            <motion.img
                src={Logo}
                alt=""
                initial={{ x: "-20vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: "120" }}
              />
          </div>
          <div className="right" data-aos="fade-left" data-aos-duration={2000}
          
          >
            <motion.h1
            initial={{ y: -150 }}
              animate={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >Soft<span>Code</span></motion.h1>
            <motion.p
            initial={{ x: "10vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: "120" }}
            >
              Hi, I'm Ken a JavaScript Developer, Competitive Programmer, a
              Technical Writer, and an Open Source Enthusiast who is highly
              passionate about building fast, creative applications and
              writing beautiful code. Web Performance and Refactoring are my
              areas of interest and I've been working to enhance my skills.
              Also, I'm a young talented developer who loves to build and design Experiences which
              make peoples life easy
            </motion.p>
            <motion.div
            className="skills__data"
            initial={{ x: "-20vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: "120" }}
                    whileHover={{
                      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
                    }}
            >
              <Link className="btn btn-sm btn-info" to="/Cv">
                      {" "}
                      Download my C.V{" "}
                    </Link>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
