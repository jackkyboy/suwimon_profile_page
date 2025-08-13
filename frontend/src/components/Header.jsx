// src/components/Header.jsx
import React from 'react';
import './Profile.css';

export default function Header() {
  return (
    <header className="profile-header-bar py-3 mb-4">
      <div className="container text-center">
        <h1 className="header-logo">💗 Suwimon</h1>
        <p className="text-muted">"โปรไฟล์ส่วนตัวของสุวิมล แก้มะ (ฟ้า)"</p>
      </div>
    </header>
  );
}
