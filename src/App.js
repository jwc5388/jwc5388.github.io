// import logo from './logo.svg';
import './App.css';
import Mybutton from './components/Buttons.js'
import React from 'react';
import { useState } from 'react';
import Entry from './Entry';
import degreeImage from './assets/images/graduation.jpg';
import judoImage1 from './assets/images/judo1.jpg';
import judoImage2 from './assets/images/judo2.jpeg';
import judoImage3 from './assets/images/judo2.jpeg';
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
import edisonImage from './assets/images/edison1.jpeg';
import senseoneImage1 from './assets/images/senseone1.png';
import senseoneImage2 from './assets/images/senseone2.png';
import senseoneImage3 from './assets/images/senseone3.png';
import senseoneImage4 from './assets/images/senseone4.png';
import senseoneImage5 from './assets/images/senseone5.png';
import royalUrImage1 from './assets/images/royalur1.png';
import royalUrImage2 from './assets/images/royalur2.png';
import sudokuImage1 from './assets/images/sudoku1.png';
import sudokuImage2 from './assets/images/sudoku2.png';
import sudokuImage3 from './assets/images/sudoku3.png';
import sudokuImage4 from './assets/images/sudoku4.png';
import sudokuImage5 from './assets/images/sudoku5.png';
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
                <div key="jagri-images"style={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  whiteSpace: 'nowrap', 
                  gap: '10px', 
                  padding: '10px 0' 
                }}>
                  <img src={jagriImage1} alt="J-Agri Exhibition 1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={jagriImage2} alt="J-Agri Exhibition 2" style={{height: '400px', borderRadius: '8px'}} />
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
                <div key="fava-images" style={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  whiteSpace: 'nowrap', 
                  gap: '10px', 
                  padding: '10px 0' 
                }}>
                  <img src={favaImage1} alt="Fava Exhibition 1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={favaImage2} alt="Fava Exhibition 2" style={{ height: '400px', borderRadius: '8px' }} />
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
                <div key="ces2025-images" style={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  whiteSpace: 'nowrap', 
                  gap: '10px', 
                  padding: '10px 0' 
                }}>
                  <img src={cesImage1} alt="CES 2025 Exhibition 1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={cesImage2} alt="CES 2025 Exhibition 2" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={cesImage3} alt="CES 2025 Exhibition 3" style={{ height: '400px', borderRadius: '8px' }} />
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
        {expandedSections.projects.expanded && (
          <div className="section-content">
            <Entry
              title="Royal Game of Ur"
              location="University Project"
              dates="January 2021 ~ March 2021"
              details={[
                'Developed a digital version of the ancient board game "Royal Game of Ur" as part of a major university project.',
                'Implemented advanced game logic, AI opponents, and an interactive user interface to simulate strategic gameplay.',
                'Focused on enhancing user experience through a well-designed UI and optimized game mechanics.',
                <div key="RoyalUr-images" style={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  whiteSpace: 'nowrap', 
                  gap: '10px', 
                  padding: '10px 0' 
                }}>
                  <img src={royalUrImage1} alt="SenseOne Project 1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={royalUrImage2} alt="SenseOne Project 2" style={{ height: '400px', borderRadius: '8px' }} />
                </div>
              ]}
              isExpanded={expandedSections.projects.entries.royalGame}
              onClick={() => toggleEntry('projects', 'royalGame')}
            />
            <Entry
              title="Sudoku Game"
              location="University of St Andrews Computer Science Junior Honours Project"
              dates="September 2022 ~ March 2023"
              details={[
                'Developed a collaborative Sudoku puzzle platform that allows users to create, share, and play puzzles.',
                'Designed and built the front-end with React.js, leveraging its flexibility, performance, and rich ecosystem. Implemented lifecycle methods to resolve rendering issues.',
                'Implemented a Node.js and Express.js backend, prioritizing speed, scalability, and security. Managed environment variables for secure authentication and database integration.',
                'Utilized MariaDB as the relational database, implementing primary and foreign keys for structured data relationships and efficient querying.',
                'Followed Agile development (Scrum methodology), utilizing sprints to ensure continuous progress and iterative development.',
                'Engineered advanced Sudoku generation and validation algorithms, supporting multiple difficulty levels for an engaging user experience.',
                'Designed and implemented the front-end using React.JS, chosen for its flexibility, performance, and extensive ecosystem. Addressed rendering issues by utilizing lifecycle methods to correctly update puzzle states.',
                <div key="sodoku-images" style={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  whiteSpace: 'nowrap', 
                  gap: '10px', 
                  padding: '10px 0' 
                }}>
                  <img src={sudokuImage1} alt="Sudoku Project 1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={sudokuImage2} alt="Sudoku Project 2" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={sudokuImage3} alt="Sudoku Project 3" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={sudokuImage4} alt="Sudoku Project 4" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={sudokuImage5} alt="Sudoku Project 5" style={{ height: '400px', borderRadius: '8px' }} />
                </div>
              ]}
              isExpanded={expandedSections.projects.entries.sudokuGame}
              onClick={() => toggleEntry('projects', 'sudokuGame')}
            />
            <Entry
              title="Sense1 Vet AI Algorithm"
              location="CareSix Co., LTD"
              dates="September 2024 ~ Present"
              details={[
                'Developed a machine learning-based AI algorithm for canine heart rate estimation using Long Short-Term Memory (LSTM) models.',
                'Designed and implemented signal processing techniques to analyze ballistocardiogram (BCG) data for heart rate detection.',
                'Built a deep learning pipeline using TensorFlow and Keras to enhance real-time heart rate monitoring accuracy.',
                'Applied unsupervised learning for IJK peak detection, reducing dependency on ECG signals for heart rate analysis.',
                'Collaborated with hardware engineers and production teams to optimize data acquisition and improve signal quality.',
                'Contributed to the development of Sense1 Vet, an AI-powered wearable device for veterinary health monitoring.',
                <div key="sense1vet-images" style={{ 
                  display: 'flex', 
                  overflowX: 'auto', 
                  whiteSpace: 'nowrap', 
                  gap: '10px', 
                  padding: '10px 0' 
                }}>
                  <img src={senseoneImage1} alt="SenseOne Project 1" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={senseoneImage2} alt="SenseOne Project 2" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={senseoneImage3} alt="SenseOne Project 3" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={senseoneImage4} alt="SenseOne Project 4" style={{ height: '400px', borderRadius: '8px' }} />
                  <img src={senseoneImage5} alt="SenseOne Project 5" style={{ height: '400px', borderRadius: '8px' }} />
                </div>
              ]}
              isExpanded={expandedSections.projects.entries.sense1Vet}
              onClick={() => toggleEntry('projects', 'sense1Vet')}
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
              details={[<div key="judo-images" style={{ 
                display: 'flex', 
                overflowX: 'auto', 
                whiteSpace: 'nowrap', 
                gap: '10px', 
                padding: '10px 0' 
              }}>
                <img src={judoImage1} alt="Judo Image 1" style={{ height: '400px', borderRadius: '8px' }} />
                <img src={judoImage2} alt="Judo Image 2" style={{ height: '400px', borderRadius: '8px' }} />
                <img src={judoImage3} alt="Judo Image 3" style={{ height: '400px', borderRadius: '8px' }} />
              </div>
            ]}
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
