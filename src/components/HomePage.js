import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Web Developer and App Promotions
        </motion.h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "Web Development",
            "Application Design",
            "HTML CSS and Javascript",
            "Using React and Nextjs Liberies",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
        <motion.a
          href="https://github.com/blewice"
          className="btn-main-offer"
          initial={{ x: "50vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: "120" }}
          whileHover={{
            scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Link to my Github
        </motion.a>
      </div>    
    </div>
  );
};

export default HomePage;
