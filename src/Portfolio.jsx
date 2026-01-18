import React, { useState, useRef } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const trainingRef = useRef(null);
  const rolesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: 'Stock Price Prediction Using LSTM',
      description: 'Developed an LSTM model for accurate stock price forecasting.',
      details: [
        'LSTM model implementation for time series prediction',
        'Data cleaning and preprocessing of historical stock data',
        'Feature engineering to improve model accuracy',
        'Hyperparameter tuning for optimal performance',
        'RMSE evaluation and model validation'
      ]
    },
    {
      title: 'Traffic Light Simulator Using Python',
      description: 'Simulated traffic light operations with Python.',
      details: [
        'Red-Yellow-Green logic implementation',
        'Signal timing control and state management',
        'User interface for simulation control'
      ]
    },
    {
      title: 'CIVSURE – Anonymous Crime Reporting Platform',
      description: 'A comprehensive web platform for crime reporting.',
      details: [
        'Web platform development with secure user authentication',
        'Image upload functionality for evidence submission',
        'Automated alerts to police and hospital services',
        'Lawyer booking system for legal assistance',
        'AI chatbot integration for user guidance'
      ]
    }
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">P. SREEJA</div>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection(homeRef)}>Home</button>
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
            <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
            <button onClick={() => scrollToSection(educationRef)}>Education</button>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </div>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section ref={homeRef} className="section home">
        <div className="hero-content">
          <div className="profile-pic">
            <div className="pic-placeholder">PS</div>
          </div>
          <h1 className="hero-name">P. SREEJA</h1>
          <p className="hero-tagline">Aspiring Data Scientist | ML & AI Enthusiast</p>
          <button className="cta-button" onClick={() => scrollToSection(aboutRef)}>View Portfolio</button>
        </div>
      </section>

      <section ref={aboutRef} className="section about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="objective-card">
              <h3>Career Objective</h3>
              <p>
                Passionate about leveraging Data Science, Machine Learning, and AI to solve complex problems.
                Proficient in Python and C, with expertise in LSTM models for time series forecasting.
                Committed to data-driven decision making and innovative solutions.
              </p>
            </div>
            <div className="contact-card">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <a href="mailto:sreejapuram@gmail.com" className="contact-link">📧 sreejapuram@gmail.com</a>
                <p>📱 +91 9550363968</p>
                <a href="https://linkedin.com/in/sreeja-puram" className="contact-link" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={skillsRef} className="section skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skill-chips">
                <span className="skill-chip">Python</span>
                <span className="skill-chip">C</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Libraries & Frameworks</h3>
              <div className="skill-chips">
                <span className="skill-chip">TensorFlow</span>
                <span className="skill-chip">PyTorch</span>
                <span className="skill-chip">Pandas</span>
                <span className="skill-chip">NumPy</span>
                <span className="skill-chip">Matplotlib</span>
                <span className="skill-chip">Seaborn</span>
                <span className="skill-chip">Scikit-learn</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>ML & AI</h3>
              <div className="skill-chips">
                <span className="skill-chip">Supervised Learning</span>
                <span className="skill-chip">Regression</span>
                <span className="skill-chip">Classification</span>
                <span className="skill-chip">Time Series Forecasting</span>
                <span className="skill-chip">Deep Learning (LSTM)</span>
                <span className="skill-chip">AI</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data Science</h3>
              <div className="skill-chips">
                <span className="skill-chip">Data Cleaning</span>
                <span className="skill-chip">Normalization</span>
                <span className="skill-chip">Feature Engineering</span>
                <span className="skill-chip">Model Evaluation</span>
                <span className="skill-chip">Hyperparameter Tuning</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Visualization</h3>
              <div className="skill-chips">
                <span className="skill-chip">Matplotlib</span>
                <span className="skill-chip">Seaborn</span>
                <span className="skill-chip">Plotly</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skill-chips">
                <span className="skill-chip">Jupyter Notebook</span>
                <span className="skill-chip">Git</span>
                <span className="skill-chip">GitHub</span>
                <span className="skill-chip">VS Code</span>
                <span className="skill-chip">Command Line</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={projectsRef} className="section projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => setSelectedProject(project)}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-details">
                  <ul>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={educationRef} className="section education">
        <div className="container">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>B.Tech (Pursuing)</h3>
                <p>VNRVJIET, Hyderabad</p>
                <p>2025–2028</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Diploma in Electronics Engineering</h3>
                <p>2022–2025 | 98%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>SSC</h3>
                <p>2021 | 90%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={trainingRef} className="section training">
        <div className="container">
          <h2>Industrial Training</h2>
          <div className="training-card">
            <h3>Jenkins & Maven</h3>
            <p>Gained hands-on experience in CI/CD processes.</p>
            <ul>
              <li>CI concepts and implementation</li>
              <li>Maven automation for build management</li>
              <li>CI/CD workflow setup and maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      <section ref={rolesRef} className="section roles">
        <div className="container">
          <h2>Roles & Responsibilities</h2>
          <ul className="roles-list">
            <li><span className="role-icon">👥</span> Volunteer, Technical Team – Krithomedha, AIML Department, VNRVJIET</li>
            <li><span className="role-icon">👥</span> Volunteer – ISTE, VNRVJIET</li>
          </ul>
        </div>
      </section>

      <section ref={contactRef} className="section contact">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <a href="mailto:sreejapuram@gmail.com" className="contact-link">📧 sreejapuram@gmail.com</a>
              <p>📱 +91 9550363968</p>
              <a href="https://linkedin.com/in/sreeja-puram" className="contact-link" target="_blank" rel="noopener noreferrer">💼 LinkedIn Profile</a>
            </div>
            <div className="contact-form">
              <h3>Send a Message</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 P. SREEJA. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => scrollToSection(homeRef)}>Home</button>
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
            <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
            <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <ul>
              {selectedProject.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;