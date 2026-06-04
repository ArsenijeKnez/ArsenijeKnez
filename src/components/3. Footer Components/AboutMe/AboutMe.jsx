import React from "react";
import "./AboutMe.css";
import ContactMe from "../ContactMe/ContactMe";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="section About">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div className="cta-content">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                About me: <br />
              </h2>

              <p className="wow fadeInUp" data-wow-delay=".4s">
                <hr /> Software Engineer with a Master's degree in Applied
                Software Engineering and hands-on experience in full-stack web,
                mobile, and game development. Focused on building practical,
                scalable, and well-structured software solutions.
                <br />
                <br />
                Passionate about problem-solving, software architecture, and
                continuous learning. Always eager to take on new challenges and
                contribute to meaningful projects. Feel free to get in touch
                through the contact form.
                <hr />
                <h2>Coding with purpose. </h2>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="contact-sidebar">
              <ContactMe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
