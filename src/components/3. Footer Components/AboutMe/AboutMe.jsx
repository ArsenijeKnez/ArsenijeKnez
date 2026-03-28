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
                <hr /> I hold a Master’s degree in Applied Software Engineering
                and continue to develop my skills through academic work and
                hands-on projects, focusing on building practical and
                well-structured software solutions.
                <br />
                <br />
                I am passionate about problem-solving, software architecture,
                and continuous improvement. For a full overview of my career and
                contact information, please check my resume at the top of the
                page, or feel free to reach out using the contact form.
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
