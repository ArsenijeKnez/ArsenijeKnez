import React from 'react';
import './AboutMe.css';
import ContactMe from '../ContactMe/ContactMe';


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
                <hr /> I'm a 23-year-old software engineer based in Novi Sad, Serbia. I hold a bachelor's degree in Applied Software Engineering and am currently pursuing my master's degree. While I'm most experienced with C#, C++, JavaScript, and Python, I enjoy exploring new technologies and continually expanding my skill set.
              
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



