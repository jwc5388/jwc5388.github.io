// src/Entry.js

import React from 'react';
import './App.css'; // Create a CSS file specifically for the Entry component
import { useState } from 'react';

function Entry({ title, location, dates, details, imageSrc, isExpanded, onClick }) {
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleDetail = (index) => {
    setExpandedDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="entry">
      <div className="entry-header" onClick={onClick}>
        <h3>{title}</h3>
        <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>&#x25BC;</span>
      </div>
      {isExpanded && (
        <div className="entry-details">
          {location && <p>{location}</p>}
          {dates && <p>{dates}</p>}
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                {typeof detail === 'string' ? (
                  <span>{detail}</span>
                ) : (
                  <div>
                    <div className="detail-header" onClick={() => toggleDetail(index)}>
                      <span>{detail.title || 'More Details'}</span>
                      <span className={`arrow ${expandedDetails[index] ? 'expanded' : ''}`}>&#x25BC;</span>
                    </div>
                    {expandedDetails[index] && (
                      <div className="detail-content">
                        {detail.content}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
          {imageSrc && <img src={imageSrc} alt="Related content" className="entry-image" />}
        </div>
      )}
    </div>
  );
}

export default Entry;