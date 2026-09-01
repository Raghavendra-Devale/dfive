import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Coaching from './components/Coaching/Coaching';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Chatbot from './components/Chatbot/Chatbot';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Find all sections and apply the reveal class for animation readiness
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Coaching />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}

export default App;