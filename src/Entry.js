// Entry.js
import React, { useState } from 'react';
import './App.css';

function Entry({ title, location, dates, details = [], imageSrc, isExpanded, onClick }) {
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleDetail = (index) => {
    setExpandedDetails((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="entry">
      {/* ✅ 헤더만 토글되게 버튼으로 분리 */}
      <button
        type="button"
        className="entry-header"
        onClick={onClick}
        aria-expanded={!!isExpanded}
        style={{ width: '100%', textAlign: 'left', cursor: 'pointer' }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span className={`arrow ${isExpanded ? 'expanded' : ''}`} aria-hidden>
          ▾
        </span>
      </button>

      {isExpanded && (
        /* ✅ 본문은 클릭/마우스다운 전파를 완전히 막음 (링크 정상 작동) */
        <div
          className="entry-details"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {location && <p>{location}</p>}
          {dates && <p>{dates}</p>}

          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                {/* 문자열/리액트 엘리먼트 그대로 렌더 (a 태그 동작 유지) */}
                {typeof detail === 'string' || React.isValidElement(detail) ? (
                  <div className="detail-line">{detail}</div>
                ) : (
                  <div className="detail-group">
                    <div
                      className="detail-header"
                      onClick={() => toggleDetail(index)}
                      style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        userSelect: 'none',
                      }}
                    >
                      <span>{detail.title || 'More Details'}</span>
                      <span className={`arrow ${expandedDetails[index] ? 'expanded' : ''}`} aria-hidden>
                        ▾
                      </span>
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