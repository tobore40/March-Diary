import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image1 from "../digi market.jpeg";
import Image2 from "../ecom2.jpg";
import Image3 from "../app dev.jpeg";
import Image4 from "../wb dev.jpg";

function service() {
  return (
    <div className="service py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="mt-2 mb-5 text-center">
              <h1 className="service_heading">OUR SERVICES</h1>
            </div>
            <div className="row ">
              {/* left side data */}
              <div className="col-md-6 mt-md-2 m-0">
                <motion.span
                  className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light"
                  initial={{ x: "-20vw" }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: "120" }}>
                  What We Do
                </motion.span>
                <motion.h4
                  initial={{ y: -150 }}
                  animate={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }} >
                  Awesome with Extra Ordinary Flexibility Features
                </motion.h4>
                <motion.h6
                  className="font-weight-light subtitle"
                  initial={{ y: -150 }}
                  animate={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  You can relay on our amazing features list and also our
                  customer services will be great experience for you without
                  doubt and in no-time
                </motion.h6>
                {/* one more grid sys for services */}
                <div className="row mt-md-5">
                  <div className="col-md-6 mt-3">
                    <motion.h6
                      className="font-weight-medium"
                      initial={{ y: -150 }}
                      animate={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      Web Development
                    </motion.h6>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.5 }}>
                      We help businesses reach their full potential on the web.
                      Let's craft brilliance together. Our websites are built to
                      requirements and you don't have to adjust your
                      specifications.
                    </motion.p>
                  </div>
                  <div className="col-md-6 mt-3">
                    <motion.h6
                      className="font-weight-medium"
                      initial={{ y: -150 }}
                      animate={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      E-Commerce Website
                    </motion.h6>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.5 }} >
                      E-Commerce websites are online portals that facilitate
                      online transactions of goods and services through means of
                      the transfer of information and funds over the Internet.
                    </motion.p>
                  </div>
                  <div className="col-md-6 mt-3">
                    <motion.h6
                      className="font-weight-medium"
                      initial={{ y: -150 }}
                      animate={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      Digital Marketing
                    </motion.h6>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.5 }}>
                      Experts in web application development and mobile
                      application. We at ArtisArk also specialize in digital
                      advertising and internet marketing services.
                    </motion.p>
                  </div>
                  <div className="col-md-6 mt-3">
                    <motion.h6
                      className="font-weight-medium"
                      initial={{ y: -150 }}
                      animate={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}>
                      App Development
                    </motion.h6>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1.5 }}>
                      Mobile app development is the act or process by which a
                      mobile app is developed for mobile devices, such as
                      personal digital assistants, enterprise digital assistants
                      or mobile phones.
                    </motion.p>
                  </div>
                  <motion.div
                    className="col-lg-12 my-4"
                    initial={{ x: "-20vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: "120" }}
                    whileHover={{
                      scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}>
                    <Link className="btn btn-sm btn-info" to="/Cv">
                      {" "}
                      Download my C.V{" "}
                    </Link>
                  </motion.div>
                </div>
              </div>
              {/* right side data */}
              <div className="col-md-6 mt-md-5 m-0">
                <div className="row wrap-service">
                  {/* left side images */}
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-12 img-hover mb-4">
                        <img
                          alt="ux"
                          className="rounded img-shadow img-fluid"
                          src={Image1} />
                      </div>
                      <div className="col-md-12 img-hover mb-4">
                        <img
                          alt="ux"
                          className="rounded img-shadow img-fluid"
                          src={Image2}/>
                      </div>
                    </div>
                  </div>
                  {/* right side images */}
                  <div className="col-md-6 uneven-box">
                    <div className="row">
                      <div className="col-md-12 img-hover mb-4">
                        <img
                          alt="ux"
                          className="rounded img-shadow img-fluid"
                          src={Image3}/>
                      </div>
                      <div className="col-md-12 img-hover mb-4">
                        <img
                          alt="ux"
                          className="rounded img-shadow img-fluid"
                          src={Image4}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default service;
