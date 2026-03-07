import React, { useState, useEffect } from "react";
import "./Skillz.css";
import WOW from "wow.js";

import unityIcon from "../../../assets/images/unity.png";
import pwIcon from "../../../assets/images/playwright_logo_icon.png";
import csIcon from "../../../assets/images/cs.png";

const categories = [
  {
    name: "Web & Mobile Development",
    icon: "lni lni-code",
    title: "Web & Mobile Development",
    description:
      "Developing responsive web and cross-platform mobile applications using modern JavaScript frameworks and component-based architectures.",
    skills: [
      {
        iconType: "lineicon",
        icon: "lni lni-javascript",
        title: "JavaScript",
        description:
          "Experienced in implementing dynamic and interactive web functionality, working with asynchronous programming, API integration, and modern frontend frameworks.",
      },
      {
        iconType: "svg",
        icon: '<svg style="transform: translateY(-3px);" fill="#ffffff" width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z"></path> </g></svg>',
        title: "TypeScript",
        description:
          "Strong foundation in building scalable and maintainable code using TypeScript. Strong understanding of static typing, interfaces, and modular architecture to improve code reliability and maintainability.",
      },
      {
        iconType: "lineicon",
        icon: "lni lni-react",
        title: "React & React Native",
        description:
          "Experienced in building reusable UI components and managing application state using React. Familiar with developing cross-platform mobile applications using React Native and TypeScript.",
      },
      {
        iconType: "lineicon",
        icon: "lni lni-html5",
        title: "HTML5 & CSS3",
        description:
          "Experienced in creating responsive layouts and structured web interfaces using modern HTML and CSS. Familiar with Flexbox, responsive design principles, and component-based styling.",
      },
    ],
  },
  {
    name: "Backend Development",
    icon: "lni lni-database",
    title: "Backend Development",
    description:
      "Building backend services and APIs using modern server-side frameworks with a focus on scalability, maintainability, and efficient data handling.",
    skills: [
      {
        iconType: "custom",
        icon: csIcon,
        title: "C#",
        description:
          "Proficient in object-oriented programming using C#. Experience building backend logic and REST APIs within the .NET ecosystem, as well as developing modular gameplay systems in Unity.",
      },
      {
        iconType: "svg",
        icon: '<svg style="transform: translateY(-3px);" fill="#ffffff" viewBox="-9.5 -10 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dotnet</title> <path d="M3.175 20.551c-0.001 0.289-0.123 0.549-0.318 0.733l-0.001 0c-0.2 0.188-0.47 0.303-0.767 0.303s-0.568-0.116-0.769-0.304l0.001 0.001c-0.195-0.184-0.317-0.444-0.317-0.732s0.122-0.549 0.318-0.732l0.001-0c0.2-0.188 0.47-0.303 0.767-0.303s0.567 0.115 0.768 0.304l-0.001-0.001c0.195 0.184 0.317 0.444 0.318 0.733v0zM14.051 21.417h-1.947l-5.126-8.088c-0.118-0.182-0.227-0.392-0.314-0.613l-0.009-0.024h-0.045c0.041 0.365 0.064 0.787 0.064 1.215 0 0.104-0.001 0.208-0.004 0.312l0-0.015v7.213h-1.721v-11.003h2.073l4.955 7.898c0.209 0.326 0.344 0.552 0.404 0.675h0.030c-0.050-0.374-0.078-0.806-0.078-1.245 0-0.083 0.001-0.165 0.003-0.248l-0 0.012v-7.093h1.715zM22.433 21.417h-6.025v-11.003h5.786v1.55h-4.005v3.117h3.69v1.542h-3.69v3.254h4.244zM30.996 11.964h-3.084v9.454h-1.781v-9.454h-3.077v-1.55h7.941z"></path> </g></svg>',
        title: ".NET",
        description:
          "Experience developing backend services using the .NET platform. Familiar with building REST APIs, dependency injection, and maintainable server-side architecture.",
      },
      {
        iconType: "lineicon",
        icon: "lni lni-nodejs",
        title: "Node.js",
        description:
          "Experienced in building server-side applications and REST APIs using Node.js frameworks. Experience integrating databases, handling authentication, and implementing backend logic.",
      },
      {
        iconType: "lineicon",
        icon: "lni lni-database",
        title: "SQL & NoSQL Databases",
        description:
          "Familiar with relational database design and querying using SQL databases such as MySQL and SQLite. Familiar with document-based database systems such as MongoDB.",
      },
    ],
  },
  {
    name: "Game & Graphics Development",
    icon: "lni lni-paint-brush",
    title: "Game & Graphics Development",
    description:
      "Developing interactive applications and visual assets using real-time engines and digital design tools.",
    skills: [
      {
        iconType: "custom",
        icon: unityIcon,
        title: "Unity",
        description:
          "Proficient in developing interactive applications and gameplay systems using Unity and C#. Familiar with implementing gameplay mechanics, scripting behaviours, and optimizing real-time applications.",
      },
      {
        iconType: "lineicon",
        icon: "lni lni-adobe",
        title: "Adobe Photoshop",
        description:
          "Experienced in Adobe Photoshop for creating and editing graphics, textures, and visual assets for games and other creative projects. Experience in using Photoshop's tools and features to enhance the visual quality of game assets and create compelling designs.",
      },
      {
        iconType: "svg",
        icon: '<svg style="transform: translateY(-3px);" width="33px" height="33px" viewBox="8 8 60.000002 60.000002" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.00 76.00" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 23.9216,22.2925L 30.9309,22.2925L 40.7089,52.3818L 34.8148,52.3818L 32.0925,43.8554L 22.5386,43.8554L 19.949,52.3818L 14.2799,52.3818L 23.9216,22.2925 Z M 25.7526,32.2927L 23.4316,39.7038L 31.1545,39.7038L 28.7885,32.2927C 28.2077,30.4626 27.7169,28.4088 27.2706,26.6681L 27.1815,26.6681C 26.7348,28.4088 26.288,30.5071 25.7526,32.2927 Z M 42.7186,41.8462C 42.7186,35.8199 46.3794,30.1499 53.3437,30.1499C 60.4412,30.1499 62.7186,35.954 62.7186,40.7305C 62.7186,41.7567 62.6295,42.5606 62.5399,43.0515L 47.9868,43.0515C 48.1204,46.9808 51.2004,48.676 54.6826,48.676C 57.2272,48.676 59.0578,48.3202 60.7098,47.6948L 61.5133,51.4897C 59.6381,52.2477 57.0495,52.8735 53.9232,52.8735C 46.8702,52.8735 42.7186,48.4979 42.7186,41.8462 Z M 53.031,33.9002C 49.6379,33.9002 48.209,36.9802 47.9868,39.2121L 57.5403,39.2121C 57.5848,37.2038 56.6913,33.9002 53.031,33.9002 Z "></path> </g></svg>',
        title: "After Effects",
        description:
          "Experienced in Adobe After Effects for creating motion graphics, visual effects, and animations for games and other creative projects. Experience in using After Effects' tools and features to enhance the visual quality of game assets and create compelling designs.",
      },
    ],
  },
  {
    name: "QA Automation",
    icon: "lni lni-checkmark-circle",
    title: "QA Automation",
    description:
      "Ensuring software reliability through automated testing, quality assurance principles, and performance testing.",
    skills: [
      {
        iconType: "lineicon",
        icon: "lni lni-bug",
        title: "Test Automation",
        description:
          "Strong foundation in software quality assurance principles, including test case design, automated testing strategies, and debugging workflows.",
      },
      {
        iconType: "custom",
        icon: pwIcon,
        title: "Playwright",
        description:
          "Experienced in writing automated end-to-end tests using Playwright for validating web application functionality across multiple browsers and user scenarios.",
      },
      {
        iconType: "svg",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" style="transform: translateY(-3px);" width="30px" height="30px" viewBox="-17 0 417 331" fill="none"><path d="M373.5 361.998H0.5L124.674 97.1265L199.473 152.115L297.037 0.00146484L373.5 361.998ZM236.74 304.788H237.538C246.77 304.805 255.647 301.236 262.298 294.836C265.707 291.743 268.418 287.961 270.253 283.74C272.088 279.519 273.005 274.957 272.942 270.355C273.094 265.921 272.252 261.51 270.477 257.444C268.702 253.378 266.039 249.761 262.684 246.859C257.028 241.184 249.406 237.902 241.397 237.692H240.785C239.736 237.687 238.693 237.83 237.685 238.117L257.376 208.847L241.689 197.897L234.265 208.847L215.293 237.825C212.033 242.628 209.305 246.859 207.616 249.799C205.863 252.91 204.355 256.153 203.105 259.498C201.684 263.053 200.953 266.846 200.95 270.674C200.906 275.222 201.819 279.728 203.63 283.9C205.44 288.072 208.109 291.816 211.461 294.889C218.025 301.284 226.831 304.856 235.995 304.841L236.74 304.788ZM153.346 273.282L175.086 304.029H198.329L172.757 268.359L195.469 236.827L180.394 226.396L173.742 235.177L153.319 263.969V206.079L132.963 189.488V304.016H153.319V273.255L153.346 273.282ZM236.767 285.589C232.797 285.589 228.99 284.012 226.183 281.205C223.376 278.398 221.799 274.591 221.799 270.621C221.799 266.651 223.376 262.844 226.183 260.037C228.99 257.23 232.797 255.653 236.767 255.653H236.9C238.871 255.655 240.822 256.056 242.635 256.831C244.448 257.606 246.086 258.74 247.45 260.164C248.886 261.482 250.029 263.087 250.806 264.874C251.582 266.662 251.976 268.592 251.961 270.541C251.912 274.538 250.292 278.354 247.451 281.165C244.61 283.976 240.776 285.556 236.78 285.562L236.767 285.589Z" fill="#ffffff"/></svg>',
        title: "k6 Performance Testing",
        description:
          "Familiar with performance and load testing using k6 to evaluate application scalability and response behaviour under simulated traffic conditions.",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "lni lni-cloud",
    title: "DevOps & Tools",
    description:
      "Supporting development workflows using modern tooling for version control, containerization, and cloud deployment.",
    skills: [
      {
        iconType: "lineicon",
        icon: "lni lni-docker",
        title: "Docker",
        description:
          "Familiar with containerizing applications using Docker and managing multi-container environments using Docker Compose.",
      },
      {
        iconType: "lineicon",
        icon: "lni lni-git",
        title: "Git & CI/CD",
        description:
          "Experienced with Git-based workflows including branching, merging, and collaborative development. Familiar with CI/CD pipelines using GitHub Actions and GitLab.",
      },
      {
        iconType: "svg",
        icon: '<svg style="transform: translateY(-3px);" viewBox="-8 -8 32.44 32.44" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ffffff"> <path d="M7.47 12.412l3.348-.592.031-.007-1.722-2.049a291.474 291.474 0 01-1.723-2.058c0-.01 1.779-4.909 1.789-4.926a788.95 788.95 0 012.934 5.066l2.95 5.115.023.039-10.948-.001 3.317-.587zM.9 11.788c0-.003.811-1.412 1.803-3.131L4.507 5.53l2.102-1.764C7.765 2.797 8.714 2 8.717 2a.37.37 0 01-.033.085L6.4 6.981 4.16 11.789l-1.63.002c-.897.001-1.63 0-1.63-.003z"></path> </g> </g></svg>',
        title: "Azure",
        description:
          "Familiar with deploying and managing applications on Microsoft Azure cloud services.",
      },
    ],
  },
];

const Skillz = () => {
  useEffect(() => {
    new WOW().init();
  }, []);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };
  const renderSkillIconContent = (skill) => {
    switch (skill.iconType) {
      case "lineicon":
        return <i className={skill.icon}></i>;

      case "custom":
        return <img src={skill.icon} alt={skill.title} />;

      case "svg":
        return (
          <span
            className="svg-icon"
            dangerouslySetInnerHTML={{ __html: skill.icon }}
          ></span>
        );

      default:
        return null;
    }
  };

  const renderIcon = (skill) => {
    return (
      <div
        className="skill-icon-wrapper"
        onClick={() => openModal(skill)}
        style={{ cursor: "pointer" }}
        title={`Click to see details about ${skill.title}`}
      >
        {renderSkillIconContent(skill)}
      </div>
    );
  };

  return (
    <section id="Skills" className="skills section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Technical Skills
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Continuously Evolving My Expertise
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                A selection of technologies, frameworks, and tools I have worked
                with while developing web, backend, and interactive
                applications. I continuously expand my skill set by exploring
                new technologies and improving my development practices.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {categories.map((category) => (
            <div key={category.name} className="col-lg-4 col-md-6 col-12">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <div className="skill-icons">
                  {category.skills.map((skill, index) => (
                    <div key={index}>{renderIcon(skill)}</div>
                  ))}
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedSkill && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="skill-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedSkill.title}</h3>
            <p>
              {selectedSkill.description ||
                "Expertise in building scalable solutions using this technology."}
            </p>
            <button className="btn-primary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skillz;
