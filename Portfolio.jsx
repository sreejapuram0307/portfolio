import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="profile-pic">
          <div className="pic-placeholder">PS</div>
        </div>
        <h1 className="name">P. SREEJA</h1>
        <div className="contact-info">
          <a href="mailto:sreejapuram@gmail.com" className="contact-link">sreejapuram@gmail.com</a>
          <p>+91 9550363968</p>
          <a href="https://linkedin.com/in/sreeja-puram" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </header>

      <section className="section career-objective">
        <h2>Career Objective</h2>
        <div className="objective-card">
          <p>
            Passionate about leveraging Data Science, Machine Learning, and AI to solve complex problems.
            Proficient in Python and C, with expertise in LSTM models for time series forecasting.
            Committed to data-driven decision making and innovative solutions.
          </p>
        </div>
      </section>

      <section className="section academic-background">
        <h2>Academic Background</h2>
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
      </section>

      <section className="section technical-skills">
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
            <h3>Libraries/Frameworks</h3>
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
      </section>

      <section className="section projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Stock Price Prediction Using LSTM</h3>
            <p>Developed an LSTM model for accurate stock price forecasting.</p>
            <ul>
              <li>LSTM model implementation</li>
              <li>Data cleaning and preprocessing</li>
              <li>Feature engineering</li>
              <li>Hyperparameter tuning</li>
              <li>RMSE evaluation</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Traffic Light Simulator Using Python</h3>
            <p>Simulated traffic light operations with Python.</p>
            <ul>
              <li>Red-Yellow-Green logic implementation</li>
              <li>Signal timing control</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>CIVSURE – Crime Reporting Platform</h3>
            <p>A comprehensive web platform for crime reporting.</p>
            <ul>
              <li>Web platform development</li>
              <li>Image upload functionality</li>
              <li>Police and hospital alerts</li>
              <li>Lawyer booking system</li>
              <li>AI chatbot integration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section industrial-training">
        <h2>Industrial Training</h2>
        <div className="training-card">
          <h3>Jenkins & Maven</h3>
          <p>Gained hands-on experience in CI/CD processes.</p>
          <ul>
            <li>CI concepts</li>
            <li>Maven automation</li>
            <li>CI/CD workflow</li>
          </ul>
        </div>
      </section>

      <section className="section roles-responsibilities">
        <h2>Roles & Responsibilities</h2>
        <ul className="roles-list">
          <li><span className="role-icon">•</span> Volunteer, Technical Team – Krithomedha, AIML Department, VNRVJIET</li>
          <li><span className="role-icon">•</span> Volunteer – ISTE, VNRVJIET</li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;