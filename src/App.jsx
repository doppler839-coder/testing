import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main>
        <About />
        <Services />
        <News />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
