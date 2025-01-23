import React from 'react';
import Navbar from '../Navbar/Navbar';
import Typewriter from '../Typewriter/Typewriter';
import './Hero.css';

const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/arsenije-kne%C5%BEevi%C4%87-977b1b298/',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/ArsenijeKnez',
  },
];

const backgroundImageUrl = 'https://wallpaperbat.com/img/501831-a-nice-simple-blue-space-wallpaper-wallpaper.jpg';

const Hero = () => {
  const firstname = 'Arsenije';
  const lastname = 'Knežević';

  const heroStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <section id='Home' className='hero-area' style={heroStyle}>
      <Navbar />
      <div className='container'>
        <div className='row align-items-center'>
          <div className='hero-content'>
            <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
              <name>
                <h1 className='first-name'>{firstname}</h1>
                <h1 className='last-name'>{lastname}</h1>
              </name>
            </div>
            <div className='typewriter-container wow fadeInLeft' data-wow-delay='.6s'>
              <Typewriter />
      
            </div>
            <div className='btn-pos'>
              {socialProfiles.map((profile, index) => (
                <a
                  href={profile.url}
                  id={`button`}
                  className='btn wow fadeInLeft'
                  data-wow-delay={`${index * 0.2 + 0.8}s`}
                  key={index}
                >
                  <i className={`icon ${profile.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
