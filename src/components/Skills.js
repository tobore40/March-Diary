import React from "react";
import "./Skills.css";
import SkillImage from "../skills.jpg";
import { motion } from "framer-motion";

function skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section-title2">Skills</h2>
        <div className="skills__container bd-grid">          
          <div>
            <motion.h2
            className="skills__subtitle"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: "120" }}
          >
            Profesional Skills
          </motion.h2>
          <motion.p
            className="skills__text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ delay: 0.5, duration: 1.3 }}
          >
            Creating web and mobile applications Maintaining, optimizing,
            troubleshooting, and improving websites Implementation of apps and
            landing pages from concept through deployment
          </motion.p>
             <motion.div
            className="skills__data"
            whileHover={{ scale: 1.1, originX: 1 }}
            transition={{ type: "spring", stiffness: "300" }}
          >
            <div className="skills__names">
              <i className="bx bxl-html5 skills__icon" />
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">95%</span>
            </div>
          </motion.div>
          <motion.div
            className="skills__data"
            whileHover={{ scale: 1.1, originX: 1 }}
            transition={{ type: "spring", stiffness: "300" }}
          >
            <div className="skills__names">
              <i className="bx bxl-css3 skills__icon" />
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">80%</span>
            </div>
          </motion.div>
          <motion.div
            className="skills__data"
            whileHover={{ scale: 1.1, originX: 1 }}
            transition={{ type: "spring", stiffness: "300" }}
          >
            <div className="skills__names">
              <i className="bx bxl-javascript skills__icon" />
              <span className="skills__name">JAVASCRIPT</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </motion.div>

          <motion.div
            className="skills__data"
            whileHover={{ scale: 1.1, originX: 1 }}
            transition={{ type: "spring", stiffness: "300" }}
          >
            <div className="skills__names">
              <i className="bx bxl-react skills__icon" />
              <span className="skills__name">REACT</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </motion.div>
        </div>
         <motion.div
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3,
              yoyo: Infinity,
            },
          }}
          className="ski"
        >
          <img src={SkillImage} alt="" className="skills__img" />
        </motion.div>
        </div>
      </section>

  );
}

export default skills;
