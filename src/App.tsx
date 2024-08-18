import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { config } from './constants/config';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from './components';
import AnimatedBackground from './components/sections/AnimatedBackground';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-1">
        <Navbar />
        <Hero />
        <AnimatedBackground />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
