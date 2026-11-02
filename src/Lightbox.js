import React, { useCallback, useEffect, useRef, useState } from 'react';

// 본문 사진을 누르면 새 탭 대신 화면 안에서 크게 보여 줌
// 같은 항목(.entry) 안의 사진끼리 ← → 로 넘김, Esc · 바깥 클릭으로 닫기
const MIN_SIZE = 80; // 아이콘 같은 작은 이미지는 제외

function captionOf(img) {
  const fig = img.closest('.pcard-figure, .pcard-strip');
  const text = fig && fig.querySelector('.pcard-caption, figcaption');
  return (text && text.textContent) || '';
}

function Lightbox() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(-1);
  const open = index >= 0;
  const touchX = useRef(null);

  const close = useCallback(() => setIndex(-1), []);
  const step = useCallback(
    (d) => setIndex((i) => (i + d + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    const onClick = (e) => {
      const img = e.target.closest('section img');
      if (!img || img.closest('.lightbox')) return;
      if (img.naturalWidth < MIN_SIZE && img.width < MIN_SIZE) return;
      e.preventDefault();
      const group = img.closest('.entry') || img.parentElement;
      const imgs = [...group.querySelectorAll('img')].filter((el) => el.width >= MIN_SIZE);
      setItems(imgs.map((el) => ({ src: el.currentSrc || el.src, caption: captionOf(el) })));
      setIndex(Math.max(0, imgs.indexOf(img)));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, step]);

  if (!open) return null;
  const item = items[index];
  const many = items.length > 1;

  // 모바일: 좌우로 밀어서 넘기기
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null || !many) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={close} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <button type="button" className="lightbox-close" aria-label="Close" onClick={close}>×</button>
      {many && (
        <button type="button" className="lightbox-nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img key={item.src} src={item.src} alt={item.caption} />
        {(item.caption || many) && (
          <figcaption>
            {item.caption && <span>{item.caption}</span>}
            {many && <span className="lightbox-count">{index + 1} / {items.length}</span>}
          </figcaption>
        )}
      </figure>
      {many && (
        <button type="button" className="lightbox-nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
      )}
    </div>
  );
}

export default Lightbox;
