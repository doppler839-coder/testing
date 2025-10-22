import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => {});
  }, []);
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-cards">
        {services.map(s => (
          <article key={s.id} className="card">
            <div className="icon" aria-hidden="true">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
