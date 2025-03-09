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
import favaImage1 from './assets/images/fava1.jpeg';
import favaImage2 from './assets/images/fava2.jpeg';
import cesImage1 from './assets/images/ces1.jpeg';
import cesImage2 from './assets/images/ces2.jpeg';
import cesImage3 from './assets/images/ces3.jpeg';
import jagriImage1 from './assets/images/jagri1.jpeg';
import jagriImage2 from './assets/images/jagri2.jpeg';
import edisonImage from './assets/images/edison.jpeg';
import dissertation1 from './assets/files/CSDissertation.pdf';
import dissertation2 from './assets/files/MathDissertation.pdf';
import productionapk from './assets/files/cotons-production-gateway.apk';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
// import PythonGame from './components/PythonGame.js';

function App() {

  const [expandedSections, setExpandedSections] = useState({
    experience: {expanded: false, entries: {}},
    education: {expanded: false, entries: {}},
    skills: {expanded:false},
    volunteer: {expanded:false},
    caresixContent: {expanded:false},
    engagements: {expanded: false, entries: {}},
    projects: {expanded: false, entries: {}},
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
        {/* <PythonGame /> */}
      </header>

      <section className="Experience-section">
        <h2 onClick={() => toggleSection('experience')}>Work Experience</h2>
        {expandedSections.experience.expanded && (
          <div className="section-content">
            <Entry
              title="AI Algorithm Developer, CareSix Co., LTD"
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
              title="Web Developer, CareSix Co., LTD"
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
              title="App Developer, CareSix Co., LTD"
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
              title="Mathematician, CareSix Co., LTD"
              location="Jeju, South Korea"
              dates="May 2022 - August 2022"
              details={[
                'Implemented Fourier Transform in Python to filter noise from BCG measurements, enhancing signal clarity.',
                'Conducted statistical analysis using Python and NumPy to validate algorithm effectiveness.',
              ]}
              isExpanded={expandedSections.experience.entries.mathematician}
              onClick={() => toggleEntry('experience', 'mathematician')}
            />

            <Entry
              title="What Company is CareSix?"
              location="Jeju Island, South Korea"
              dates="Future Of Veterinary Care"
              details={[
                {
                  title: 'AI collar for future veterinary care',
                  content: (
                    <div style={{ paddingBottom: '20px' }}>
                      <p>The AI collar developed by CareSix revolutionizes veterinary care by monitoring pets' health in real-time.</p>
                      <img src={cotonsImage1} alt="CareSix AI Collar" style={{ width: '100%', borderRadius: '8px' }} />
                    </div>
                  ),
                },
                // <div style={{ marginBottom: '20px' }}></div>,
                {
                  title: 'Awards',
                  content: (
                    <div>
                      <p>CES 2023</p>
                      <div key="awards-images">
                        <img src={cotonsImage2} alt="ces awards" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                        <img src={edisonImage} alt="edison awards" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                      </div>
                      <ul>
                        <li>CES Best Tech Innovation Award 2022</li>
                        <li>Edison Awards Nominee 2024</li>
                      </ul>
                    </div>
                  ),
                },

                {
                  title: 'More about the company',
                  content: (
                    <div>
                      <p>
                        CareSix is at the forefront of pet healthcare technology. Learn more on their{' '}
                        <a href="https://cotons.ai" target="_blank" rel="noopener noreferrer">
                          official website
                        </a>
                        .
                      </p>
                    </div>
                  ),
                },
              ]}
              isExpanded={expandedSections.experience.entries.caresix}
              onClick={() => toggleEntry('experience', 'caresix')}
            />
          </div>
        )}
      </section>

      <section className="Engagement-section">
        <h2 onClick={() => toggleSection('engagements')}>Professional Engagements</h2>
        {expandedSections.engagements.expanded && (
          <div className="section-content">
            <Entry
              title="J-AGRI Exhibition, Tokyo"
              location="Tokyo, Japan"
              dates="October 9-11, 2024"
              details={[
                'Represented HRG as Lead Manager, showcasing the 2025 CES Innovation Awards-winning project: the first-ever wearable cow health monitor.',
                'Engaged with industry leaders, shared insights, and connected with experts in agricultural technology.',
                'Demonstrated innovative approaches to livestock health monitoring, receiving significant industry recognition.',
                <div key="jagri-images">
                  <img src={jagriImage1} alt="J-Agri Exhibition 1" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                </div>
              ]}
              isExpanded={expandedSections.engagements.entries.jAgri}
              onClick={() => toggleEntry('engagements', 'jAgri')}
            />
            <Entry
              title="FAVA 2024 - 23rd Federation of Asian Veterinary Associations Congress"
              location="Daejeon, South Korea"
              dates="October 25-27, 2024"
              details={[
                'Represented CareSix, connecting with veterinary professionals and industry innovators across Asia.',
                'Showcased award-winning devices, including the Sense1 Pro dog wearable and the Sense1 Guardian, both receiving positive feedback from doctors and professionals.',
                'Engaged in discussions about advancing veterinary technology and animal healthcare solutions.',
                <div key="fava-images">
                  <img src={favaImage1} alt="Fava Exhibition 1" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                  <img src={favaImage2} alt="Fava Exhibition 2" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                </div>
              ]}
              isExpanded={expandedSections.engagements.entries.fava2024}
              onClick={() => toggleEntry('engagements', 'fava2024')}
            />
            <Entry
              title="CES 2025 Exhibition"
              location="Las Vegas, USA"
              dates="January 2025"
              details={[
                'Invited to exhibit at CES 2025 in Venetian Suite 29-225.',
                'Showcasing the latest advancements in veterinary technology and wearable animal health monitoring devices.',
                'Networking with global tech leaders and innovators to push the boundaries of animal healthcare solutions.',
                <div key="ces2025-images">
                  <img src={cesImage1} alt="CES 2025 Exhibition 1" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                  <img src={cesImage2} alt="CES 2025 Exhibition 2" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                  <img src={cesImage3} alt="CES 2025 Exhibition 3" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                </div>
              ]}
              isExpanded={expandedSections.engagements.entries.ces2025}
              onClick={() => toggleEntry('engagements', 'ces2025')}
            />
          </div>
        )}
      </section>

      <section className="Project-section">
        <h2 onClick={() => toggleSection('projects')}>Project Engagements</h2>
        {expandedSections.engagements.expanded && (
          <div className="section-content">
            <Entry
              title="Royal Game of Ur"
              location="University Project"
              dates="[Your Project Date Here]"
              details={[
                'Developed a digital version of the ancient board game "Royal Game of Ur" as part of a major university project.',
                'Implemented advanced game logic, AI opponents, and an interactive user interface to simulate strategic gameplay.',
                'Focused on enhancing user experience through a well-designed UI and optimized game mechanics.',
                // <div key="ur-images">
                //   <img src={urImage1} alt="Royal Game of Ur 1" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                //   <img src={urImage2} alt="Royal Game of Ur 2" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                // </div>
              ]}
              isExpanded={expandedSections.projects.entries.royalGame}
              onClick={() => toggleEntry('projects', 'royalGame')}
            />
            <Entry
              title="Sudoku Game"
              location="University Project"
              dates="[Your Project Date Here]"
              details={[
                'Designed and developed an advanced Sudoku game with unique puzzle generation and difficulty settings.',
                'Implemented a backend algorithm for efficient puzzle solving and validation using mathematical techniques.',
                'Integrated a user-friendly interface to provide an engaging and interactive gaming experience.',
                // <div key="sudoku-images">
                //   <img src={sudokuImage1} alt="Sudoku Game 1" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                //   <img src={sudokuImage2} alt="Sudoku Game 2" style={{ width: '100%', borderRadius: '8px', marginTop: '10px' }} />
                // </div>
              ]}
              isExpanded={expandedSections.projects.entries.sudokuGame}
              onClick={() => toggleEntry('projects', 'sudokuGame')}
            />
          </div>
        )}
      </section>


      <section className="Education-section">
        <h2 onClick={() => toggleSection('education')}>Education/Qualification</h2>
        {expandedSections.education.expanded && (
          <div className="section-content">
            <Entry
              title="Bachelor of Science in Mathematics and Computer Science"
              location="University of St Andrews, St Andrews, Scotland"
              dates="Graduated June 2024"
              details={[
                <div key="dissertation1" className="download-link">
                  <a href={dissertation1} download="Dissertation1.pdf">
                    <img src={dissImage} alt="Download Dissertation 1" className="download-icon" />
                  </a>
                  <span>Computer Science Dissertation</span>
                </div>,
                <div key="dissertation2" className="download-link">
                <a href={dissertation2} download="Dissertation2.pdf">
                  <img src={dissImage} alt="Download Dissertation 2" className="download-icon" />
                </a>
                <span>Mathematics Dissertation</span>
              </div>,

              ]}
              imageSrc={degreeImage} // The image to display
              isExpanded={expandedSections.education.entries.degree}
              onClick={() => toggleEntry('education', 'degree')}
            />
            <Entry
              title="St Andrews Judo Club/ Registered as member of Judo Scotland"
              location=""
              dates=""
              details={[
              ]}
              imageSrc={judoImage} // The image to display
              isExpanded={expandedSections.education.entries.judo}
              onClick={() => toggleEntry('education', 'judo')}
            />
            <Entry
              title="Committee member of St Andrews Korean Society"
              location="Treasurer for St Andrews Korean Society"
              details={[
              ]}
              isExpanded={expandedSections.education.entries.society}
              onClick={() => toggleEntry('education', 'society')}
              />
            {/* Add more entries here as needed */}
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
              <li>Native level in English and Korean</li>
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
