// src/components/CertificateShelf.jsx
import React from "react";
import "./CertificateShelf.css";

/* แบ่งรายการตามแพทเทิร์น โดย:
   - วนซ้ำ pattern ไปเรื่อยๆ จนกว่าจะหมด items
   - ไม่สร้างแถวว่าง (ข้าม slice ว่าง)
*/
function splitByPattern(items, pattern = [3, 3, 2]) {
  const rows = [];
  if (!items?.length || !pattern?.length) return rows;

  let i = 0;
  let p = 0;
  while (i < items.length) {
    const take = Math.max(1, Number(pattern[p % pattern.length]) || 1);
    const slice = items.slice(i, i + take);
    if (slice.length) rows.push(slice);
    i += take;
    p += 1;
  }
  return rows;
}

export default function CertificateShelf({ items = [] }) {
  if (!items.length) return null;

  const rowChunks = splitByPattern(items, [3, 3, 2]);

  return (
    <section className="cert-section" aria-label="Certificates">
      {rowChunks.map((row, rIdx) => (
        <div className="cert-row" key={`cert-row-${rIdx}`}>
          <div className="cert-grid">
            {row.map((c, cIdx) => {
              const key = c.id || `${rIdx}-${cIdx}-${c.src}`;
              const Img = (
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
                        {Img}
                      </a>
                    ) : (
                      Img
                    )}
                  </div>
                  {(c.title || c.issuer || c.date) && (
                    <figcaption className="cert-meta">
                      {c.title && <div className="cert-title">{c.title}</div>}
                      {c.issuer && <div className="cert-issuer">{c.issuer}</div>}
                      {c.date && <div className="cert-date">{c.date}</div>}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
          <div className="cert-shelf"></div>
        </div>
      ))}
    </section>
  );
}
