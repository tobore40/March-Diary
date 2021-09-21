import React from "react";
import Rowtech from "../rowtech.jpg";
import "./cv.css";

function Cv() {
  return (
    <div className="resume_wrapper">
      <div className="resume_left">
        <div className="resume_image">
          <img src={Rowtech} alt="Resume_image" />
        </div>
        <div className="resume_bottom">
          <div className="resume_item resume_namerole">
            <div className="name">onyetem kenneth efe</div>
            <div className="role">Front-End Developer</div>
          </div>
          <div className="resume_item resume_profile">
            <div className="resume_title">Profile</div>
            <div className="resume_info">
              Onyetem Kenneth is a diversified individual with over a year
              experience in software development (Front End Developer). A
              creative frontend developer with experience in building visually
              appealing web interfaces using suitable web technologies and
              following best practices. I have good communication skills with an
              ability to prioritize workload in demanding environments, with a
              strong sense of customer focus and commitment to meeting
              deadlines. Confident, team focused and an effective relationship
              builder. Kenneth currently works for Open Desk Consult as
              Front-End Developer – In charge of building the Frontend of a
              robust Customer web development using tools such as HTML CSS
              Bootstrap and JavaScript, TypeScript, React, Next UI Libraries.
            </div>
          </div>
          <div className="resume_item resume_address">
            <div className="resume_title">Address</div>
            <div className="resume_info">
              GT 41 UNITS 3, LEKKI GARDENS ESTATE PHASE 1, SANGOTEDO AJAH, LAGOS
            </div>
          </div>
          <div className="resume_item resume_contact">
            <div className="resume_title">Contact</div>
            <div className="resume_info">
              <div className="resume_subtitle">Phone</div>
              <div className="resume_subinfo">
                +234 8038467289, +2349048559595
              </div>
            </div>
            <div className="resume_info">
              <div className="resume_subtitle">Email</div>
              <div className="resume_subinfo">
                dawkystyle@yahoo.com, rowdyp2@gmail.com
              </div>
            </div>
          </div>
          <div className="resume_item resume_skills">
            <div className="resume_title">Skills</div>
            <div className="resume_info">
              <div className="skills_list">
                <div className="skills_left">HTML5</div>
                <div className="skills_bar">
                  <p>
                    <span style={{ width: "95%" }} />
                  </p>
                </div>
              </div>
              <div className="skills_list">
                <div className="skills_left">CSS</div>
                <div className="skills_bar">
                  <p>
                    <span style={{ width: "80%" }} />
                  </p>
                </div>
              </div>
              <div className="skills_list">
                <div className="skills_left">BOOTSTRAP</div>
                <div className="skills_bar">
                  <p>
                    <span style={{ width: "85%" }} />
                  </p>
                </div>
              </div>
              <div className="skills_list">
                <div className="skills_left">JavaScript</div>
                <div className="skills_bar">
                  <p>
                    <span style={{ width: "75%" }} />
                  </p>
                </div>
              </div>
              <div className="skills_list">
                <div className="skills_left">REACT</div>
                <div className="skills_bar">
                  <p>
                    <span style={{ width: "90%" }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resume_right">
        <div className="resume_item resume_namerole">
          <div className="name">onyetem kenneth efe</div>
          <div className="role">Front-End Developer</div>
        </div>
        <div className="resume_item resume_education">
          <div className="resume_title">Education</div>
          <div className="resume_info">
            <div className="resume_data">
              <div className="year">2015-2019</div>
              <div className="content">
                <p>
                  <strong>National Open University Nigeria</strong>
                </p>
                <p>
                  (Bachelor of Science in Information Communication Technology)
                </p>
              </div>
            </div>
            <div className="resume_data">
              <div className="year">1993-1999</div>
              <div className="content">
                <p>
                  <strong>OAHS1</strong>
                </p>
                <p>High School Certificate</p>
              </div>
            </div>
            <div className="resume_data">
              <div className="year">1987-1993</div>
              <div className="content">
                <strong>Army Children School 3, Mokola Ibadan </strong>
                <p>Primary School Certificate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume_item resume_experience">
          <div className="resume_title">Experience</div>
          <div className="resume_info">
            <div className="resume_data">
              <div className="year">OCTOBER 2019 - MARCH 2020</div>
              <div className="content">
                <p>
                  <strong>OPEN DESK CONSULT</strong>
                </p>
                <p>
                  8/10 Broad Street Western House Suite 202, 2nd Floor (C Wing,
                  Lagos Island, Lagos
                </p>
                <br />
                <p>INTERNSHIP</p>
                <br />
                <p>
                  <strong>JOB FUNCTION</strong>
                </p>
                <p>
                  In charge of building the Frontend of a robust Customer web
                  development tools such as HTML CSS Bootstrap and JavaScript.
                </p>
              </div>
            </div>
           <div className="resume_data">
              <div className="year">APRIL 2020- TILL DATE</div>
              <div className="content">
                <p>
                  <strong>OPEN DESK CONSULT</strong>
                </p> 
                <br />
                <p>DEVELOPER</p>
                <br />
                <p>
                  <strong>JOB FUNCTION</strong>
                </p>
                <p>
                  	Implementing web design and development principles to build stable software.
                  	Bringing mock-ups to life using HTML, CSS, JavaScript.
                  	Collaborating closely with the team to support projects during all phases of delivery.
                  	Building websites and apps that are responsive and usable.
                  	Monitoring website performance and rectifying front-end-related issues.
                  	Communicating technical issues in an understandable manner to the team and clients.
                  	Identifying innovative ideas and proof of concepts according to project requirements.
                  	Providing guidance and troubleshooting support to clients.
                  	Maintaining an organized workflow using a project management tool (like GitHub).
                  	Testing to identify bugs and technical issues before and after deploying.
                  	Documenting bug reports, tickets, and any code changes.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="resume_item resmue_interests">
          <div className="resume_title">Interests</div>
          <div className="resume_info">
            <div className="interests">
              <div className="int_icon">
                <i class="far fa-futbol" />
              </div>
              <div className="int_data">Football</div>
            </div>
            <div className="interests">
              <div className="int_icon">
                <i className="fa fa-book-open" />
              </div>
              <div className="int_data">Reading</div>
            </div>
            <div className="interests">
              <div className="int_icon">
                <i className="fas fa-film" />
              </div>
              <div className="int_data">Recreation</div>
            </div>
            <div className="interests">
              <div className="int_icon">
                <i className="fa fa-car" aria-hidden="true" />
              </div>
              <div className="int_data">Travelling</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
