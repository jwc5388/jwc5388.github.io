import React from 'react';
import './App.css'; // Ensure you have proper styling in App.css
import { useState } from 'react';

// meta: [{ label, value }] — 팀/역할/기여/성과 등 (빈 값은 App에서 걸러서 전달)
// links: [{ label, href }]
function Entry({ title, location, dates, details, imageSrc, isExpanded, onClick, meta = [], links = [] }) {
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
          {(meta.length > 0 || links.length > 0) && (
            <div className="entry-meta">
              {meta.map(({ label, value }) => (
                <div className="entry-meta-row" key={label}>
                  <span className="entry-meta-label">{label}</span>
                  <span className="entry-meta-value">{value}</span>
                </div>
              ))}
              {links.length > 0 && (
                <div className="entry-meta-links">
                  {links.map(({ label, href }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                  ))}
                </div>
              )}
            </div>
          )}
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                {typeof detail === 'string' || React.isValidElement(detail) ? (
                  <span>{detail}</span>
                ) : (
                  <div>
                    <div className="detail-header" onClick={() => toggleDetail(index)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
