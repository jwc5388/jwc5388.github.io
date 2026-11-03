import React, { useEffect, useState } from 'react';

// 상단 고정 메뉴: 첫 화면(헤더)을 지나면 나타나고, 지금 보는 섹션을 강조
// items: [{ id, label }]
function TopNav({ items, name, lang, setLang }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('.App-header');
      setVisible(header ? header.getBoundingClientRect().bottom < 80 : window.scrollY > 400);
      let current = '';
      items.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  return (
    <nav className={`top-nav ${visible ? 'show' : ''}`} aria-label="Sections">
      <div className="top-nav-inner">
        <a className="top-nav-name" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{name}</a>
        <ul className="top-nav-links">
          {items.map(({ id, label }) => (
            <li key={id}><a href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a></li>
          ))}
        </ul>
        <button type="button" className="top-nav-lang" onClick={() => setLang(lang === 'ENG' ? 'KOR' : 'ENG')}>
          {lang === 'ENG' ? 'KOR' : 'ENG'}
        </button>
      </div>
    </nav>
  );
}

export default TopNav;
