// import logo from './logo.svg';
import './App.css';
import Mybutton from './components/Buttons.js'
import React from 'react';
import { useState } from 'react';
import Entry from './Entry'; // Import the Entry component
import degreeImage from './assets/images/graduation.jpg'; // Import the image
import judoImage from './assets/images/judo.jpg'; // Import the image
import dissImage from './assets/images/dissertationlogo.jpg';
import cotonsImage1 from './assets/images/cotons1.jpg';
import cotonsImage2 from './assets/images/cotons2.jpg';
import dissertation1 from './assets/files/CSDissertation.pdf'; // Import the first dissertation file
import dissertation2 from './assets/files/MathDissertation.pdf';

function App() {

  const [expandedSections, setExpandedSections] = useState({
    experience: {expanded: false, entries: {}},
    education: {expanded: false, entries: {}},
    skills: {expanded:false},
    volunteer: false
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
      </header>

      <section className="Experience-section">
        <h2 onClick={() => toggleSection('experience')}>Experience</h2>
        {expandedSections.experience.expanded && (
          <div className="section-content">
            <Entry
              title="BIG DATA ANALYST/ HRG COMPANY"
              location="Jeju Island, South Korea"
              dates="June 2019 - August 2019"
              details={[
                'Conducted in-depth analysis of veterinary clinics in Korea, focusing on the profitability of services related to dogs and cats.',
                'Gathered, cleaned, and organized large datasets from various sources to ensure data accuracy and integrity.',
                'Applied statistical techniques to identify patterns, trends, and insights related to profit margins, customer behavior, and market demand.',
              ]}
              isExpanded={expandedSections.experience.entries.bigDataAnalyst}
              onClick={() => toggleEntry('experience', 'bigDataAnalyst')}
            />
            <Entry
              title="MATHEMATICIAN/ CARESIX"
              location="Jeju Island, South Korea"
              dates="May 2022 – August 2022"
              details={[
                'Implemented the Fourier Transform algorithm using Python to separate unnecessary signals from an ECG signal, improving the accuracy and reliability of ECG measurements.',
                'Conducted data analysis to validate the effectiveness of the algorithm and identify potential areas for improvement.',
                'Participated in team meetings and discussions to provide insights and recommendations on mathematical and analytical aspects of healthcare technologies.',
                'Documented and communicated the algorithm and its findings to non-technical stakeholders.',
              ]}
              isExpanded={expandedSections.experience.entries.mathematician}
              onClick={() => toggleEntry('experience', 'mathematician')}
            />
            <Entry
              title="APP DEVELOPER/ CARESIX"
              location="Gyeong-gido, South Korea"
              dates="June 2023 – August 2023"
              details={[
                'Created a mobile application to facilitate the production of the Sense1 Pro model. The application efficiently mapped QR codes, barcodes, and subsequently encoded them onto NFC tags.',
                'Designed and developed a Bluetooth version application ‘Cotons ai’ utilizing Kotlin to capture essential data, including the BCG signal, 6-axis sensor signal, and temperature, ensuring accurate and reliable data acquisition.',
                'More Details about CareSix:',
              ]}
              isExpanded={expandedSections.experience.entries.appdeveloper}
              onClick={() => toggleEntry('experience', 'appdeveloper')}
            />
            <Entry
              title="WHAT COMPANY IS CARESIX?"
              location="Jeju Island, South Korea"
              dates="Future Of Veterinary Care"
              details={[
                {
                  title: 'AI collar for future veterinary care',
                  content: (
                    <div>
                      <p>The AI collar developed by CareSix revolutionizes veterinary care by monitoring pets' health in real-time.</p>
                      <img src={cotonsImage1} alt="CareSix AI Collar" style={{ width: '100%', borderRadius: '8px' }} />
                    </div>
                  ),
                },
                {
                  title: 'Awards',
                  content: (
                    <div>
                      <p>CES 2023</p>
                      <img src={cotonsImage2} alt="CareSix AI Collar" style={{ width: '100%', borderRadius: '8px' }} />
                      <ul>
                        <li>Best Tech Innovation Award 2022</li>
                        <li>HealthTech Excellence Award 2023</li>
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
            {/* Add more entries here as needed */}
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
              <li>Fluent in English and Korean.</li>
              <li>Proficient in app development using Kotlin and Flutter- Dart.</li>
              <li>Proficient in app/web development with React (JavaScript).</li>
              <li>Skilled in mathematical modelling in python.</li>
              <li>Experienced in coding with Java, Python, and JavaScript.</li>
              <li>Background in financial mathematics, with strong proficiency in mathematical modelling, risk management, and financial analysis.</li>
              <li>Skilled in game theory, with an understanding of strategic decision-making and competitive behavior analysis. </li>
              <li>Teamwork and Collaboration: Effective communication and collaboration skills to work in a team environment and contribute to project success.</li>
              <li>Leadership</li>
            </ul>
          </div>
        )}
      </section>

      <section className="Volunteer-section">
        <h2 onClick={() => toggleSection('volunteer')}>Volunteer Experience or Leadership</h2>
        {expandedSections.volunteer && (
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
