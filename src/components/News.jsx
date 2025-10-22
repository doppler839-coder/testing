import React, { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(() => {});
  }, []);
  return (
    <section id="news" className="news">
      <h2>News</h2>
      <ul>
        {news.map(n => (
          <li key={n.id}><strong>{n.date}</strong> — {n.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default News;
