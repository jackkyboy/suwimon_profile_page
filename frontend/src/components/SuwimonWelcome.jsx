import React, { useEffect, useRef } from "react";
import "./SuwimonWelcome.css";

export default function SuwimonWelcome({ onDone }) {
  const containerRef = useRef(null);
  const doneRef = useRef(false);   // 🔒 กันเรียกซ้ำ (StrictMode/dev)

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // call onDone ครั้งเดียวเท่านั้น
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      if (onDone) onDone();
    };

    // ✅ fallback กันพัง ถ้ากราฟิกไม่วิ่ง ให้เข้าหน้าจริงภายใน 9s
    const fallbackTimer = setTimeout(finish, 9000);

    const cW = container.offsetWidth || window.innerWidth;
    const cH = container.offsetHeight || window.innerHeight;

    const gravity = 2.55;
    const lifespan1 = 100;
    const lifespan2 = 150; // 150*50ms ≈ 7.5s
    const ground = 0.3 * cH;
    const r = 38;
    const speedYDown = 3;
    const speedYUp = 15;
    const fontSize = 32;

    let startX, speedX;
    if (cW > 500) {
      startX = 0.25 * cW;
      speedX = 0.005 * cW;
    } else {
      startX = 0.15 * cW;
      speedX = 0.007 * cW;
    }

    function Ball(sLetter, index) {
      this.sLetter = sLetter;
      this.node = null;
      this.x = startX;
      this.y = ground - 50;
      this.index = index;
      this.r = r;
      this.jumpN = 0;
      this.speedY = speedYDown;
      this.speedX = speedX;
      this.opa = 1;
      this.create = () => {
        const el = document.createElement("div");
        el.className = "ball";
        el.style.width = `${this.r}px`;
        el.style.height = `${this.r}px`;
        el.style.left = `${this.x}px`;
        el.style.top = `${this.y}px`;
        el.textContent = this.sLetter;
        el.style.fontSize = `${fontSize}px`;
        container.appendChild(el);
        this.node = el;
      };
      this.move = () => { this.y += this.speedY; this.x += this.speedX; };
      this.display = () => {
        this.node.style.top = `${(this.y / cH) * 100}%`;
        this.node.style.left = `${(this.x / cW) * 100}%`;
      };
    }

    function TextBalls(sText) {
      this.sText = sText + " ";
      this.n = sText.length + 1;
      this.balls = [];
      this.timeIntv = null;
      this.life = 0;
      this.createBalls = () => {
        for (let i = 0; i < this.n; i++) {
          const ball = new Ball(this.sText[i], i);
          this.balls.push(ball);
          ball.create();
        }
        // ลูกสุดท้ายเป็นตัวปิด (cover) สำหรับ fade out
        this.balls[this.n - 1].node.className = "cover";
      };
      this.move = () => {
        this.timeIntv = window.setInterval(() => {
          this.life++;
          if (this.life < lifespan2) {
            for (let i = 0; i < this.n; i++) {
              const ball = this.balls[i];
              if (ball.y < ground) {
                ball.speedY += gravity;
              } else {
                ball.y = ground;
                if (ball.jumpN < i || i === this.n - 1) {
                  ball.jumpN++;
                  ball.speedY = -speedYUp;
                } else {
                  ball.speedY = 0;
                  ball.speedX = 0;
                }
              }
              ball.move();
              ball.display();
            }
            if (this.life > lifespan1) {
              const coverB1 = this.balls[this.n - 1];
              coverB1.opa = coverB1.opa > 0 ? coverB1.opa - 0.025 : 0;
              coverB1.node.style.opacity = coverB1.opa;
            }
          } else {
            clearInterval(this.timeIntv);
            finish(); // 🎯 เรียกจบ แสดงหน้าโปรไฟล์
          }
        }, 50);
      };
      this.createBalls();
    }

    const tb = new TextBalls("WELCOME");
    tb.move();

    return () => {
      clearTimeout(fallbackTimer);
      if (tb.timeIntv) clearInterval(tb.timeIntv);
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, [onDone]);

  return (
    <div
      id="container"
      className="welcome-bounce"
      ref={containerRef}
      // กันกรณี CSS ยังไม่โหลด ให้สูงเต็มจอแน่ๆ
      style={{ position: 'fixed', inset: 0 }}
    />
  );
}
