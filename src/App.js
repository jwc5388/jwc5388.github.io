// import logo from './logo.svg';
import './App.css';
import Mybutton from './components/Buttons.js'
import React from 'react';
import { useState } from 'react';
import Entry from './Entry';
import degreeImage from './assets/images/graduation.jpg';
import judoImage from './assets/images/judo.jpg';
import dissImage from './assets/images/dissertationlogo.jpg';
import cotonsImage1 from './assets/images/cotons1.jpg';
import cotonsImage2 from './assets/images/cotons2.jpg';
import dissertation1 from './assets/files/CSDissertation.pdf';
import dissertation2 from './assets/files/MathDissertation.pdf';
import productionapk from './assets/files/cotons-production-gateway.apk';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import PythonGame from './components/PythonGame.js';

function App() {

  const [expandedSections, setExpandedSections] = useState({
    experience: {expanded: false, entries: {}},
    education: {expanded: false, entries: {}},
    skills: {expanded:false},
    volunteer: {expanded:false},
    caresixContent: {expanded:false},
  });

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        expanded: !prevState[section].expanded,
      },
    }));
  };

  const toggleEntry = (section, entry) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        entries: {
          ...prevState[section].entries,
          [entry]: !prevState[section].entries[entry],
        },
      },
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jae Woo Chang's Portfolio</h1>
        <div className="contact-icons">
          <a href="mailto:peter.jaewoochang@gmail.com" aria-label="Email">
            <FaEnvelope size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
          <a href="tel:+821074465388" aria-label="Phone">
            <FaPhone size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
          <a href="https://www.linkedin.com/in/jwcbillion33" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} style={{ margin: '0 15px', color: '#000' }} />
          </a>
        </div>
        <PythonGame />
      </header>

      <section className="Experience-section">
        <h2 onClick={() => toggleSection('experience')}>Experience</h2>
        {expandedSections.experience.expanded && (
          <div className="section-content">
            <Entry
              title="AI Algorithm Developer, CareSix Inc."
              location="Seoul, South Korea"
              dates="September 2024 - Present"
              details={[
                'Developed a machine learning-based algorithm for canine heart rate estimation using Long Short-Term Memory (LSTM) models with TensorFlow and Keras.',
                'Designed an AI-driven system for detecting IJK peaks in ballistocardiogram (BCG) signals, leveraging deep learning-based signal processing.',
                'Applied unsupervised learning techniques to automate IJK peak detection, reducing dependency on ECG signals.',
              ]}
              isExpanded={expandedSections.experience.entries.aiAlgorithm}
              onClick={() => toggleEntry('experience', 'aiAlgorithm')}
            />
            <Entry
              title="Web Developer, CareSix Inc."
              location="Seoul, South Korea"
              dates="February 2024 - Present"
              details={[
                'Developed a web-based dog recognition platform using TypeScript with React, integrating a backend algorithm for dog identification.',
                'Designed and built a hospital management system for veterinary hospitals and pet tracking.',
                'Integrated AWS RDS for secure data management and scalability.',
              ]}
              isExpanded={expandedSections.experience.entries.webDeveloper}
              onClick={() => toggleEntry('experience', 'webDeveloper')}
            />
            <Entry
              title="App Developer, CareSix Inc."
              location="Yongin, South Korea"
              dates="June 2023 - August 2023"
              details={[
                <div key="detail-1">
                  Developed a production application for the Sense1 Vet model in Kotlin, mapping NFC tags, QR codes, and barcodes into a structured CSV format. -
                  <a href={productionapk} download style={{ marginLeft: '8px', textDecoration: 'underline', color: '#007BFF' }}>
                    Download app APK
                  </a>
                </div>,
                'Built a Bluetooth-enabled app (Cotons AI) in Flutter for capturing BCG signals, 6-axis sensor data, and temperature readings.',
              ]}
              isExpanded={expandedSections.experience.entries.appdeveloper}
              onClick={() => toggleEntry('experience', 'appdeveloper')}
            />
            <Entry
              title="Mathematician, CareSix Inc."
              location="Jeju, South Korea"
              dates="May 2022 - August 2022"
              details={[
                'Implemented Fourier Transform in Python to filter noise from BCG measurements, enhancing signal clarity.',
                'Conducted statistical analysis using Python and NumPy to validate algorithm effectiveness.',
              ]}
              isExpanded={expandedSections.experience.entries.mathematician}
              onClick={() => toggleEntry('experience', 'mathematician')}
            />
          </div>
        )}
      </section>

      <section className="Skills-section">
        <h2 onClick={() => toggleSection('skills')}>Skills</h2>
        {expandedSections.skills.expanded && (
          <div className="section-content">
            <ul className="skills-list">
              <li>Programming: Python, Java, JavaScript, Kotlin, Dart</li>
              <li>App/Web Development: Kotlin, Flutter-Dart, React (TypeScript, JavaScript)</li>
              <li>Data Analysis: SQL, Python (Mathematical Modeling)</li>
              <li>AI & Machine Learning: LSTM models, Unsupervised Learning, Deep Learning, TensorFlow, Keras</li>
              <li>Mathematics & Finance: Mathematical Modeling, Risk Management, Financial Analysis</li>
              <li>Fluent in English and Korean</li>
            </ul>
          </div>
        )}
      </section>

      <section className="Volunteer-section">
        <h2 onClick={() => toggleSection('volunteer')}>Volunteer Experience or Leadership</h2>
        {expandedSections.volunteer.expanded && (
          <div className="section-content">
            <div className="entry">
              <h3>Volunteer Developer at Non-Profit</h3>
              <p>Community Center, Seoul</p>
              <p>January 2020 - Present</p>
              <ul>
                <li>
                  Helped develop a community-focused application to facilitate communication among members.
                </li>
                <li>
                  Led workshops on coding and technology for young learners.
                </li>
              </ul>
            </div>
            {/* Add more entries here as needed */}
          </div>
        )}
      </section>
    </div>


      );
}


export default App;
