import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievement.css';

const achievements = [
  { word: 'years of coding', value: 8, unit: '+' },
  { word: 'technologies explored', value: 15, unit: '+' },
  { word: 'completed projects', value: 21, unit: '+' },
  { word: 'cups of coffee', value: 11000, unit: '+' },
];

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="our-achievement section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
            <div className="title">
              <h2>"Programming isn't about what you know; it's about what you can figure out."</h2>
              <p>I'm committed to improving with every opportunity and applying what I’ve learned in real-world situations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
