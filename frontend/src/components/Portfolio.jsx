// src/components/Portfolio.jsx
import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    title: "📊 สถิติยอดเข้าถึง Facebook หลังยิงแอด",
    image: "/images/fb_ads_stats_aug.png",
    description: "ผลลัพธ์จากการโปรโมทเพจร้านค้าในเดือน ส.ค. 2568 ที่ทำให้ยอดเข้าถึงพุ่งขึ้นกว่า 20,000 คน",
    link: "https://www.facebook.com/share/19BcYGgUtq/?mibextid=wwXIfr"
  },
  {
    title: "🎨 ออกแบบคอนเทนต์โพสต์ขายของ",
    image: "/images/sample_post1.jpg",
    description: "โพสต์ขายสินค้าบน Facebook ที่ดึงดูดความสนใจ พร้อม CTA ชัดเจน",
    link: ""
  },
  {
    title: "🎥 โปรไฟล์ TikTok ร้านค้า",
    image: "/images/sample_tiktok_cover.jpg",
    description: "วิดีโอสั้นสไตล์ธรรมชาติ พร้อมยอดเข้าชมและโต้ตอบในช่วงสัปดาห์แรก",
    link: "https://www.tiktok.com/@aya30433?_t=ZS-8yqe6reRlJt&_r=1"
  }
];

export default function Portfolio() {
  return (
    <div className="container portfolio-wrapper mt-5">
      <h3 className="text-pink mb-4 text-center">🌟 ผลงานของสุวิมล</h3>
      <div className="row gy-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="portfolio-card shadow-sm">
              <img src={item.image} alt={item.title} className="img-fluid rounded mb-2" />
              <h6 className="text-pink">{item.title}</h6>
              <p className="small text-muted">{item.description}</p>
              {item.link && (
                <a href={item.link} className="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  ดูเพิ่มเติม
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
