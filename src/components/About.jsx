import React, { useEffect, useState } from 'react';

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000/api/about')
      .then(res => res.json())
      .then(data => setAbout(data))
      .catch(() => {});
  }, []);
  return (
    <section id="about" className="about">
      <h2>{about.title || 'About Us'}</h2>
      <div className="about-content">
        <img src={about.image || 'https://via.placeholder.com/600x360'} alt="About" />
        <p>{about.description || 'Company description goes here.'}</p>
      </div>
    </section>
  );
};

export default About;
