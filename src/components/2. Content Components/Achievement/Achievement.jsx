import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievement.css';

const Achievement = () => {
 
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
