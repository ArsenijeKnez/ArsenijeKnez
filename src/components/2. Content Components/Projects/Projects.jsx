import React from 'react';
import './Projects.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GridChargeGif from '../../../assets/images/GridCharge.gif';
import FitnessDiaryGif from '../../../assets/images/FitnessDiary.gif';
import MellisaWebGif from '../../../assets/images/MellisaWeb.gif';

const projectData = [
  {
    title: 'GridCharger',
    description: 'Promotional Page for Electric Vehicle Charging App',
    thumbnailUrl: GridChargeGif,
    demoUrl: 'https://arsenijeknez.github.io/GridCharge/#gridcharge',
    githubUrl: 'https://github.com/ArsenijeKnez/GridCharge',
  },
  {
    title: 'Base Defender',
    description: '2D strategy game developed in Unity',
    thumbnailUrl: 'https://www.youtube.com/embed/t70LbQjUq00',
    demoUrl: 'https://arsenijeknez.itch.io/base-defender',
  },
  {
    title: 'Fitness Diary',
    description: 'App managing personal fitness',
    thumbnailUrl: FitnessDiaryGif,
    githubUrl: 'https://github.com/ArsenijeKnez/FitnessApp',
  },
  {
    title: 'Mellisa',
    description: 'Web page for an upcoming indie video game',
    thumbnailUrl: MellisaWebGif,
    demoUrl: 'https://arsenijeknez.github.io/MellisaWeb/',
    githubUrl: 'https://github.com/ArsenijeKnez/MellisaWeb',
  },
];


const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  const renderDemoContent = (project) => {
    if (isImageURL(project.thumbnailUrl)) {
      return <img src={project.thumbnailUrl} alt="Project Thumbnail" />;
    } else {
      return  <iframe src={project.thumbnailUrl} title="Project Demo" allowFullScreen />;
    }
  };

  const isImageURL = (url) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    return imageExtensions.some((extension) => url.toLowerCase().endsWith(extension));
  };

  return (
    <section id="Projects" className="projects section">
      <div className="container">
        <div className="section-title">
          <h2 className="wow fadeInUp" data-wow-delay=".4s">
            My Portfolio
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".6s">
          A variety of template projects that have helped me develop and refine my skills.
          </p>
        </div>
        <Slider {...settings} className='slider'>
          {projectData.map((project, index) => (
            <div key={index}>
              <div className="card" >
                <div className="card-content">
                  <div className="card-header">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-description">{project.description}</p>
                  </div>
                  <div className="demo-container">
                    {renderDemoContent(project)}
                  </div>
                  <div className="card-footer">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="btn btn-primary">
                      Demo
                    </a>)
                    }
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="btn btn-secondary">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
