// src/components/CertificateShelf.jsx
import React from "react";
import "./CertificateShelf.css";

/** แบ่งรายการตามแพทเทิร์น และวนซ้ำ pattern จนกว่าจะหมดรายการ */
function chunkByPattern(items, pattern = [3, 3, 2]) {
  const rows = [];
  if (!items?.length || !pattern?.length) return rows;

  let i = 0;
  let p = 0;
  while (i < items.length) {
    const take = Math.max(1, Number(pattern[p % pattern.length]) || 1);
    rows.push(items.slice(i, i + take));
    i += take;
    p += 1;
  }
  return rows.filter(row => row.length > 0);
}

export default function CertificateShelf({ items = [], pattern = [3, 3, 2] }) {
  if (!items.length) return null;

  const rowChunks = chunkByPattern(items, pattern);

  return (
    <section className="cert-section" aria-label="Certificates">
      {rowChunks.map((row, rIdx) => (
        <div className="cert-row" key={`cert-row-${rIdx}`}>
          <div className="cert-grid">
            {row.map((c, cIdx) => {
              const key = c.id || `${rIdx}-${cIdx}-${c.src}`;
              const imgEl = (
                <img
                  src={c.src}
                  alt={c.title || "certificate"}
                  loading="lazy"
                  decoding="async"
                />
              );
              return (
                <figure className="cert-card" key={key}>
                  <div className="cert-thumb">
                    {c.link ? (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={c.title || "open certificate"}
                      >
                        {imgEl}
                      </a>
                    ) : (
                      imgEl
                    )}
                  </div>

                  {(c.title || c.issuer || c.date) && (
                    <figcaption className="cert-meta">
                      {c.title && <div className="cert-title">{c.title}</div>}
                      {c.issuer && (
                        <div className="cert-issuer">{c.issuer}</div>
                      )}
                      {c.date && <div className="cert-date">{c.date}</div>}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
          <div className="cert-shelf" />
        </div>
      ))}
    </section>
  );
}
