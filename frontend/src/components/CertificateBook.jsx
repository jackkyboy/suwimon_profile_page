// src/components/CertificateBook.jsx
// src/components/CertificateBook.jsx
import React, { useRef } from "react";
import "./CertificateBook.css";

/**
 * CertificateBook
 * - Flipbook แบบ CSS-only (radio + label)
 * - กันชน name/id ไม่ให้ชนกันด้วย uid เฉพาะ
 */
export default function CertificateBook({
  images = [],
  title = "Certificates",
  author = "Suwimon Kaema",
  startIndex = 0, // 0 = ปก, 1..N = หน้าแรกที่อยากเปิด
}) {
  // ✅ Hooks ต้องถูกเรียกทุกครั้งก่อน return
  const uidRef = useRef(null);
  if (uidRef.current === null) {
    uidRef.current = Math.random().toString(36).slice(2, 9);
  }
  const uid = uidRef.current;

  // ป้องกัน startIndex เพี้ยน: 0..images.length
  const maxPage = images.length;
  const safeStart = Math.min(Math.max(Number(startIndex) || 0, 0), maxPage);

  const name = `page-${uid}`;
  const coverId = `p-cover-${uid}`;

  // เช็คค่าว่างหลังจากเรียก Hook
  if (!images || images.length === 0) return null;

  return (
    <section className="certbook-wrap" aria-label={title}>
      <div className="cover">
        <div className="book">
          {/* หน้าเปิด (ปก) */}
          <input
            type="radio"
            name={name}
            id={coverId}
            defaultChecked={safeStart === 0}
          />
          <label
            htmlFor={`p-1-${uid}`}
            className="book__page book__page--cover"
            style={{ zIndex: images.length + 2 }}
            aria-label="เปิดหน้าที่ 1"
          >
            <div className="page__content">
              <div className="page__content-book-title">{title}</div>
              <div className="page__content-author">{author}</div>
              <div className="page__content-credits">
                เก็บผลงานใบประกาศนียบัตร (Preview เท่านั้น)
                <span>กดที่ปกเพื่อเปิด</span>
              </div>
              <div className="page__number">หน้า 0</div>
            </div>
          </label>

          {/* สร้างหน้าเซอร์ทีละหน้า */}
          {images.map((src, idx) => {
            const page = idx + 1; // เริ่มที่ 1
            const id = `p-${page}-${uid}`;
            const nextId = page < images.length ? `p-${page + 1}-${uid}` : coverId;

            return (
              <React.Fragment key={id}>
                {/* ต้องมี input ตามด้วย label เสมอ เพื่อใช้ :checked + .book__page */}
                <input
                  type="radio"
                  name={name}
                  id={id}
                  defaultChecked={safeStart === page}
                />
                <label
                  htmlFor={nextId}
                  className="book__page"
                  style={{ zIndex: images.length + 1 - idx }}
                  aria-label={page < images.length ? `ไปหน้า ${page + 1}` : "กลับไปปก"}
                >
                  <div className="book__page-front">
                    <div className="page__content">
                      <img
                        src={src}
                        alt={`Certificate ${page}`}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                      <div className="page__number">หน้า {page}</div>
                    </div>
                  </div>

                  <div className="book__page-back">
                    <div className="page__content">
                      <div className="page__content-title">รายละเอียด</div>
                      <div className="page__content-text">
                        ใบประกาศนียบัตรลำดับที่ {page}
                      </div>
                      <div className="page__number">หลัง {page}</div>
                    </div>
                  </div>
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
