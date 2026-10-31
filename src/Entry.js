import React from 'react';
import './App.css'; // Ensure you have proper styling in App.css
import { useState } from 'react';

// 메타 박스 (라벨 / 값 행, chips가 있으면 칩으로 표시)
function MetaBox({ rows, links = [] }) {
  if (rows.length === 0 && links.length === 0) return null;
  return (
    <div className="entry-meta">
      {rows.map(({ label, value, chips }) => (
        <div className="entry-meta-row" key={label}>
          <span className="entry-meta-label">{label}</span>
          {chips ? (
            <ul className="stack-chips">
              {chips.map((c) => <li key={c}>{c}</li>)}
            </ul>
          ) : (
            <span className="entry-meta-value">{value}</span>
          )}
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
  );
}

// 기존 방식 vs 변경 방식 흐름도
// compare: { title, before: { label, steps, result }, after: { label, steps, result } }
function CompareFlow({ compare }) {
  return (
    <div className="compare">
      <p className="compare-title">{compare.title}</p>
      {['before', 'after'].map((side) => (
        <div className={`compare-row ${side}`} key={side}>
          <span className="compare-label">{compare[side].label}</span>
          <ol className="compare-steps">
            {compare[side].steps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
          {compare[side].result && <p className="compare-result">{compare[side].result}</p>}
        </div>
      ))}
    </div>
  );
}

// 프로젝트 카드: 왼쪽 요약 표 + 오른쪽 그림·사진, 상세 bullet은 접어 둠
// card: { overview, results, team, role, contribution, stack, lessons }
// media: [{ src, caption }]
function ProjectCard({ summary, card, compare, media, details, labels, links }) {
  const [showMore, setShowMore] = useState(false);
  const results = card.results ? card.results.split(' · ') : [];
  const hasVisual = compare || media.length > 0;
  const [first, ...rest] = media;
  return (
    <div className="pcard">
      <div className={`pcard-body ${hasVisual ? 'two-col' : ''}`}>
        <div className="pcard-table">
          {card.overview && (
            <div className="pcard-row"><span className="pcard-label">{labels.overview}</span><p className="pcard-value">{card.overview}</p></div>
          )}
          <div className="pcard-row">
            <span className="pcard-label">{labels.work}</span>
            <ul className="pcard-list">{summary.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </div>
          {results.length > 0 && (
            <div className="pcard-row">
              <span className="pcard-label">{labels.results}</span>
              <ul className="pcard-list accent">{results.map((r, i) => <li key={i}>{r}</li>)}</ul>
            </div>
          )}
          {(card.role || card.team) && (
            <div className="pcard-row">
              <span className="pcard-label">{labels.role}</span>
              <ul className="pcard-list">
                {card.role && <li>{card.role}</li>}
                {card.team && <li>{card.team}</li>}
              </ul>
            </div>
          )}
          {card.stack && (
            <div className="pcard-row">
              <span className="pcard-label">{labels.stack}</span>
              <ul className="stack-chips">{card.stack.split(' · ').map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          )}
        </div>
        {hasVisual && (
          <div className="pcard-visual">
            {compare && <CompareFlow compare={compare} />}
            {first && (
              <a className="pcard-figure" href={first.src} target="_blank" rel="noopener noreferrer">
                <img src={first.src} alt={first.caption} />
                {first.caption && <span className="pcard-caption">{first.caption}</span>}
              </a>
            )}
            {rest.length > 0 && (
              <div className="pcard-thumbs">
                {rest.map((m) => (
                  <a className="pcard-figure" key={m.src} href={m.src} target="_blank" rel="noopener noreferrer">
                    <img src={m.src} alt={m.caption} />
                    {m.caption && <span className="pcard-caption">{m.caption}</span>}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <button type="button" className="pcard-more" onClick={() => setShowMore((v) => !v)}>
        {showMore ? labels.hideDetails : labels.showDetails} {showMore ? '▴' : '▾'}
      </button>
      {showMore && (
        <div className="pcard-details">
          <ul>{details.map((d, i) => <li key={i}>{d}</li>)}</ul>
          <MetaBox
            rows={[
              { label: labels.contribution, value: card.contribution },
              { label: labels.lessons, value: card.lessons },
            ].filter((r) => r.value)}
            links={links}
          />
        </div>
      )}
    </div>
  );
}

// overview: 개요 행(문제), meta: 성과·역할·기여·기술 스택 등
// tags: [{ label, kind }], links: [{ label, href }]
// summary가 있으면 프로젝트 카드 형식으로 표시
function Entry({
  id, title, location, dates, details, imageSrc, isExpanded, onClick,
  tags = [], overview = [], meta = [], compare, links = [], labels = {},
  summary, card, media = [], badge,
}) {
  const [expandedDetails, setExpandedDetails] = useState({});

  const toggleDetail = (index) => {
    setExpandedDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="entry" id={id}>
      <div className="entry-header" onClick={onClick}>
        <div className="entry-heading">
          <h3>{title}</h3>
          {(location || dates) && (
            <p className="entry-sub">{[location, dates].filter(Boolean).join(' · ')}</p>
          )}
          {tags.length > 0 && (
            <div className="entry-tags">
              {tags.map(({ label, kind }) => <span key={label} className={`tag tag-${kind}`}>{label}</span>)}
              {badge && <span className="contrib-badge">{badge}</span>}
            </div>
          )}
        </div>
        <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>&#x25BC;</span>
      </div>
      {isExpanded && summary && card && (
        <ProjectCard summary={summary} card={card} compare={compare} media={media} details={details} labels={labels} links={links} />
      )}
      {isExpanded && !(summary && card) && (
        <div className="entry-details">
          <MetaBox rows={overview} />
          {compare && <CompareFlow compare={compare} />}
          {overview.length > 0 && labels.work && <p className="entry-block-label">{labels.work}</p>}
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
          <MetaBox rows={meta} links={links} />
          {imageSrc && <img src={imageSrc} alt="Related content" className="entry-image" />}
        </div>
      )}
    </div>
  );
}

export default Entry;
