import React, { useState, useRef, useEffect } from 'react';
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import reetuImg from "./image/reetu.jpeg";
import './index.css';

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleOutsideClick = (e) => {
      if (!mobileOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target) && burgerRef.current && !burgerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav className="top-nav">
        <div className="container nav-inner">
          <div className="logo">Reeti Singh</div>
          {!isMobile ? (
            <div className="nav-links">
              {['Hero', 'Passion', 'Challenges', 'Goals', 'Hobbies', 'Education', 'Resume', 'Projects', 'Contact Me'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item === 'Contact Me' ? 'contact' : item.toLowerCase())} className="nav-btn">{item}</button>
              ))}
            </div>
          ) : (
            <button ref={burgerRef} className="hamburger-btn" onClick={() => setMobileOpen(s => !s)} aria-label="menu">
              {mobileOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </nav>

      <div ref={menuRef} className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {['Hero', 'Passion', 'Challenges', 'Goals', 'Hobbies', 'Education', 'Resume', 'Projects', 'Contact Me'].map((item) => (
            <button key={item + '-mobile'} onClick={() => { scrollToSection(item === 'Contact Me' ? 'contact' : item.toLowerCase()); setMobileOpen(false); }} className="mobile-menu-item">{item}</button>
          ))}
        </div>
      </div>

      <main>
        <section id="hero" className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1>Hi, I'm <span className="highlight">Reeti Singh</span></h1>
              <p className="hero-tagline">Building interactive web applications with hands-on coding and real-world problem-solving.</p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-outline">Get In Touch</a>
                <a className="btn btn-primary" href="https://drive.google.com/file/d/1BmONLGaOJzorenAnxmDRktpejtlYQKWP/view" target="_blank" rel="noreferrer">View Resume</a>
                <a className="btn btn-outline" href="https://drive.google.com/uc?export=download&id=1BmONLGaOJzorenAnxmDRktpejtlYQKWP" download>Download Resume</a>
              </div>
            </div>

            <div className="hero-image">
              <img src={reetuImg} alt="Reetu" className="hero-img" />
            </div>
          </div>
        </section>

        <section id="passion">
          <div className="container">
            <h2 className="section-title">What Makes Me Tick</h2>
            <p className="section-subtitle">The things that fuel my passion for coding</p>
            <div className="passion-grid">
              <div className="glass-card passion-card"><span className="passion-icon">⚡</span><h3>Writing Code That Comes Alive</h3><p>There's magic in seeing your code transform into something functional and beautiful on screen.</p></div>
              <div className="glass-card passion-card"><span className="passion-icon">⚛️</span><h3>React & JavaScript</h3><p>Turning ideas into interactive websites that users love to interact with.</p></div>
              <div className="glass-card passion-card"><span className="passion-icon">🌍</span><h3>Open Source Contribution</h3><p>Knowing my work can help someone else in the world is incredibly fulfilling.</p></div>
            </div>
          </div>
        </section>

        <ResumeSection />
        <ContactSection />
      </main>

      <footer>
        <div className="container">
          <p>© 2025 Reeti Singh. Built with ❤️ and React.</p>
        </div>
      </footer>
    </div>
  );
}
