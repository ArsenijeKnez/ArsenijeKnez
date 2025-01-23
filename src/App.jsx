import React, { useState, useEffect } from 'react';
import Hero from './components/1. Header Components/Hero/Hero';
import Skillz from './components/2. Content Components/Skillz/Skillz';
import Achievement from './components/2. Content Components/Achievement/Achievement';
import Projects from './components/2. Content Components/Projects/Projects';
import AboutMe from './components/3. Footer Components/AboutMe/AboutMe';
import Spinner from './components/4. Utility Components/Spinner/Spinner';
import ScrollToTopButton from './components/4. Utility Components/ScrollToTopButton/ScrollToTopButton';


function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    document.title = `Arsenije Knežević`;
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Hero />
          <Skillz />
          <ScrollToTopButton />
          <Achievement />
          <Projects />
          <AboutMe />
          
        </>
      )}
    </>
  );
}

export default App;


