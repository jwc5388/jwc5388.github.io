import React from 'react';

// 본문 속 성과 숫자(%, %p, 배수, 분수, Top N 등)만 굵게 표시
// 연도·버전 같은 일반 숫자는 그대로 둠
const NUMBER = /([Tt]op \d+|상위 \d+개사|VND [\d,]+|\d[\d,]*(?:\.\d+)?\s?(?:%p| ?pp\b|%|×|배)|\d[\d,]* ?\/ ?\d[\d,]*|\b0\.\d+)/g;
// **키워드:** 처럼 감싼 부분은 기술 키워드로 강조
const KEYWORD = /\*\*(.+?)\*\*/;

function numbers(text, prefix) {
  const parts = text.split(NUMBER);
  if (parts.length === 1) return text;
  return parts.map((p, i) => (i % 2 === 1 ? <strong className="num" key={`${prefix}${i}`}>{p}</strong> : p));
}

export default function emphasize(text) {
  if (typeof text !== 'string') return text;
  if (!KEYWORD.test(text)) return numbers(text, 'n');
  return text.split(/\*\*(.+?)\*\*/).map((p, i) => (
    i % 2 === 1
      ? <strong className="kw" key={`k${i}`}>{p}</strong>
      : <React.Fragment key={`t${i}`}>{numbers(p, `n${i}-`)}</React.Fragment>
  ));
}
