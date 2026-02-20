import React from 'react';
import reetuImg from "./image/reetu.jpeg";
import './index.css';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.5rem 0',
        background: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Reeti Singh
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Hero', 'Passion', 'Challenges', 'Goals', 'Hobbies', 'Education', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  transition: 'var(--transition-smooth)',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="animate-in">
                Hi, I'm <span className="highlight">Reeti Singh</span>
              </h1>
              <p className="hero-tagline animate-in delay-1">
                Building interactive web applications with hands-on coding and real-world problem-solving.
              </p>
              <p className="hero-intro animate-in delay-2">
                I'm a BSc Mathematics student from Jashpur, Chhattisgarh — but my heart lives in the world of codes, apps, and problem-solving. I've always been curious: how things work, why things break, and how I can create solutions that people actually enjoy.
                <br /><br />
                Learning is not just about books — it's about building, failing, fixing, and celebrating every small win.
              </p>
              <div className="hero-cta animate-in delay-3">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
            </div>
            <div className="hero-image animate-in delay-2">
              <div className="hero-image-wrapper">
                <div className="hero-image-placeholder">
                  <img src={reetuImg} alt="Reetu" className="hero-img" />
                </div>
              </div>
              <div className="hero-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Tick - Passion Section */}
      <section id="passion">
        <div className="container">
          <h2 className="section-title">What Makes Me Tick</h2>
          <p className="section-subtitle">The things that fuel my passion for coding</p>

          <div className="passion-grid">
            <div className="glass-card passion-card">
              <span className="passion-icon">⚡</span>
              <h3>Writing Code That Comes Alive</h3>
              <p>There's magic in seeing your code transform into something functional and beautiful on screen.</p>
            </div>
            <div className="glass-card passion-card">
              <span className="passion-icon">⚛️</span>
              <h3>React & JavaScript</h3>
              <p>Turning ideas into interactive websites that users love to interact with.</p>
            </div>
            <div className="glass-card passion-card">
              <span className="passion-icon">🌍</span>
              <h3>Open Source Contribution</h3>
              <p>Knowing my work can help someone else in the world is incredibly fulfilling.</p>
            </div>
            <div className="glass-card passion-card">
              <span className="passion-icon">🤝</span>
              <h3>Helping Others Learn</h3>
              <p>Mentoring and helping people grow in their coding journey brings me joy.</p>
            </div>
            <div className="glass-card passion-card">
              <span className="passion-icon">🎨</span>
              <h3>Creating From Scratch</h3>
              <p>Building apps and web projects from scratch gives me joy and achievement.</p>
            </div>
            <div className="glass-card passion-card">
              <span className="passion-icon">🧠</span>
              <h3>Logic & Creativity</h3>
              <p>Programming blends logic, creativity, and continuous learning in a unique way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges">
        <div className="container">
          <h2 className="section-title">A Challenge That Made Me Stronger</h2>
          <p className="section-subtitle">My journey through difficulties</p>

          <div className="challenges-content glass-card">
            <p>
              Learning programming while pursuing my BSc in Mathematics wasn't easy. There were days I stared at the screen for hours, struggling with bugs and complex logic.
              <br /><br />
              When I stepped out of my home for the first time, I realized how vast and beautiful the world is. Meeting new people, exploring new places, and learning from others taught me valuable lessons about growth and perseverance.
            </p>

            <div className="challenge-quote">
              "Truly understanding a problem is 75% of the solution, and the remaining 25% is action"
            </div>

            <div className="lessons-grid">
              <div className="glass-card lesson-item">
                <div className="lesson-number">01</div>
                <p className="lesson-text">Approach big challenges step by step</p>
              </div>
              <div className="glass-card lesson-item">
                <div className="lesson-number">02</div>
                <p className="lesson-text">Observe and learn from others</p>
              </div>
              <div className="glass-card lesson-item">
                <div className="lesson-number">03</div>
                <p className="lesson-text">Understand before solving</p>
              </div>
            </div>

            <p style={{ marginTop: '2rem', color: 'var(--text-secondary)' }}>
              This challenge taught me resilience, patience, curiosity, and structured problem-solving. Growth comes not just from success, but from embracing struggles and learning from every step.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals">
        <div className="container">
          <h2 className="section-title">My Goals</h2>
          <p className="section-subtitle">Dreaming big and working towards it</p>

          <div className="goals-content">
            <div className="goals-list">
              <div className="glass-card goal-item">
                <span className="goal-icon">🎯</span>
                <div>
                  <h3>Build Apps People Love to Use</h3>
                  <p>Create intuitive, user-friendly applications that solve real problems and provide delightful experiences.</p>
                </div>
              </div>
              <div className="glass-card goal-item">
                <span className="goal-icon">🌐</span>
                <div>
                  <h3>Contribute to Open Source</h3>
                  <p>Give back to the community by contributing to projects that help developers worldwide.</p>
                </div>
              </div>
              <div className="glass-card goal-item">
                <span className="goal-icon">📚</span>
                <div>
                  <h3>Mentor Beginners</h3>
                  <p>Help newcomers fall in love with coding and guide them on their programming journey.</p>
                </div>
              </div>
            </div>

            <div className="goal-quote">
              <p>"Every small step counts – keep learning, keep growing."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies">
        <div className="container">
          <h2 className="section-title">My Little Joys</h2>
          <p className="section-subtitle">Things I enjoy beyond coding</p>

          <div className="hobbies-grid">
            <div className="glass-card hobby-item">
              <span className="hobby-icon">🚀</span>
              <div>
                <h4>Creating Web Apps</h4>
                <p>Bringing ideas to life through mini projects</p>
              </div>
            </div>
            <div className="glass-card hobby-item">
              <span className="hobby-icon">🔍</span>
              <div>
                <h4>Exploring Frameworks</h4>
                <p>Curiosity fuels my learning</p>
              </div>
            </div>
            <div className="glass-card hobby-item">
              <span className="hobby-icon">🧩</span>
              <div>
                <h4>Solving Problems</h4>
                <p>Like puzzles waiting to be cracked</p>
              </div>
            </div>
            <div className="glass-card hobby-item">
              <span className="hobby-icon">🎓</span>
              <div>
                <h4>Teaching Others</h4>
                <p>Sharing knowledge is fulfilling</p>
              </div>
            </div>
            <div className="glass-card hobby-item">
              <span className="hobby-icon">🎨</span>
              <div>
                <h4>Creative Experiments</h4>
                <p>Designing and trying new UI/UX ideas</p>
              </div>
            </div>
            <div className="glass-card hobby-item">
              <span className="hobby-icon">👀</span>
              <div>
                <h4>Observing & Learning</h4>
                <p>Growth happens when we notice and adapt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">My Learning Path</h2>
          <p className="section-subtitle">Qualifications and continuous learning</p>

          <div className="education-timeline">
            <div className="glass-card education-item">
              <span className="education-year">2024 - Present</span>
              <div>
                <h3>Software Programming & Web Development</h3>
                <p className="institution">NavGurukul, Jashpur</p>
                <p>Currently learning modern web development technologies including React, JavaScript, and building real-world projects.</p>
              </div>
            </div>
            <div className="glass-card education-item">
              <span className="education-year">2025 - Present</span>
              <div>
                <h3>BSc Mathematics</h3>
                <p className="institution">Government M.D.P College, Bilaspur (C.G.)</p>
                <p>Pursuing undergraduate degree in Mathematics, which strengthens my logical thinking and problem-solving abilities.</p>
              </div>
            </div>
            <div className="glass-card education-item">
              <span className="education-year">2023 - 2024</span>
              <div>
                <h3>Diploma in Computer Applications</h3>
                <p className="institution">Dr. C.V. Raman University, Bilaspur</p>
                <p>Foundation in computer applications and programming concepts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Creations I'm proud of</p>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="glass-card project-card">
              <div className="project-header">
                <h3>Smart Study Planner</h3>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">localStorage</span>
                </div>
              </div>
              <div className="project-body">
                <p>
                  Developed a study planning and productivity web app with task management, scheduling, and user-friendly interface. Implemented structured data handling and state management using localStorage. Ensured clean, responsive design and efficient task tracking.
                </p>
                <div className="project-links">
                  <a
                    href="https://smart-study-planner-nine-pi.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    📂 GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card project-card">
              <div className="project-header">
                <h3>E-commerce Website</h3>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">localStorage</span>
                  <span className="tech-tag">Responsive</span>
                </div>
              </div>
              <div className="project-body">
                <p>
                  Built a mini e-commerce site where products, carts, and users interact seamlessly. Implemented data handling, localStorage tricks, and clean UI design. Gained experience in state management, cart verification, and responsive layouts.
                </p>
                <div className="project-links">
                  <a
                    href="https://reeti-singh75.github.io/eco-ecommerce-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    📂 GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card project-card">
              <div className="project-header">
                <h3>Task Manager & To-Do List App</h3>
                <div className="project-tech">
                  <span className="tech-tag">Vanilla JavaScript</span>
                  <span className="tech-tag">CRUD</span>
                  <span className="tech-tag">Responsive</span>
                </div>
              </div>
              <div className="project-body">
                <p>
                  Created a fully functional Task Manager and To-Do List app using vanilla JavaScript. Implemented CRUD operations, responsive UI, and smooth user experience. Learned how to structure code, manage state, and design an intuitive interface.
                </p>
                <div className="project-links">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    📂 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <p>© 2025 Reeti Singh. Built with ❤️ and React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

