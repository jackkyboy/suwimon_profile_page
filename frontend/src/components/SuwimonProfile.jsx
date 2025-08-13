import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import CatCowSwing from "./CatCowSwing";
import "./CatCowSwing.css";

// ✅ import สร้างเล่ม PDF และรายการใบเซอร์
import { makeCertificateBook } from "../utils/makeCertificateBook";
import { certificates } from "../data/certificates";

// ✅ import รูปจาก assets
import profileImage from '../assets/suwimon_profile.JPG';

export default function SuwimonProfile() {
  return (
    <div className="container profile-wrapper">
      {/* Header */}
      <div className="text-center profile-header mb-4">

        {/* ✅ รูปจริง + กรอบไล่สีใหญ่ */}
        <div className="avatar-gradient-wrap mx-auto">
          <img
            src={profileImage}
            className="profile-img"
            alt="Suwimon Kaema"
          />
        </div>

        {/* 🎀 แมวลายวัวนม */}
        <div className="cowcat-slot d-none d-md-block">
          <CatCowSwing />
        </div>

        <h2 className="mt-3 text-pink">สุวิมล แกะมา (ฟ้า)</h2>
        <p className="text-muted px-3">
          ผู้เชี่ยวชาญงานจัดซื้อ 📦 | รักการเรียนรู้ 📚{" "}
          <br className="d-sm-none" />
          พูดไทย อังกฤษ ญี่ปุ่นเบื้องต้น 🇹🇭🇬🇧🇯🇵
        </p>

        {/* 🎀 แมวลายวัวนม */}
        <div className="cowcat-slot d-none d-md-block">
          <CatCowSwing />
        </div>
      </div>

      {/* Content */}
      <div className="row mt-4 gx-5 gy-4">
        {/* Personal Info + Education + Certificates */}
        <div className="col-md-6">
          <h5>📍 ข้อมูลส่วนตัว</h5>
          <ul className="list-unstyled">
            <li><strong>วันเกิด:</strong> 10 ตุลาคม 1997 (อายุ 27 ปี)</li>
            <li><strong>กรุ๊ปเลือด:</strong> A</li>
            <li><strong>Line ID:</strong> miyeonx97</li>
            <li><strong>โทร:</strong> 096-171-7604</li>
            <li><strong>อีเมล:</strong> suwimon5001@gmail.com</li>
            <li><strong>ที่อยู่:</strong> 59/264 นันทวันเซนต์ 1 ถ.สังฆสันติสุข แขวงกระทุ่มราย หนองจอก กทม. 10530</li>
          </ul>

          <h5 className="mt-4">🎓 การศึกษา</h5>
          <ul className="list-unstyled">
            <li>มัธยมต้น: วัดหนองจอก (2010–2012) - คณิตศาสตร์ อังกฤษ</li>
            <li>มัธยมปลาย: วัดหนองจอก (2013–2015) - ญี่ปุ่น อังกฤษ</li>
            <li><em>กำลังมองหาโอกาสศึกษาต่อเพิ่มเติม</em></li>
          </ul>

          <h5 className="mt-4">📜 Certificate</h5>
          <ul className="list-unstyled">
            <li>Digital Marketing Strategy (GreatLearning)</li>
            <li>Basics of Marketing on Instagram</li>
            <li>Fundamentals of Content Marketing</li>
            <li>Introduction to Digital Marketing</li>
          </ul>

          {/* ปุ่มดาวน์โหลดเล่มรวม (รวมภาพจาก data/certificates) */}
          <button
            className="btn btn-primary mt-2"
            onClick={() => makeCertificateBook(certificates.map(c => c.imageUrl))}
          >
            📘 ดาวน์โหลดเล่มรวม
          </button>
        </div>

        {/* Work Experience + Skills */}
        <div className="col-md-6">
          <h5>💼 ประสบการณ์ทำงาน</h5>

          <div className="mb-3">
            <strong>P.T. Duct Co., Ltd. (2023–2024)</strong><br />
            <span className="text-muted">ตำแหน่ง: เจ้าหน้าที่จัดซื้อและคลังสินค้า</span>
            <ul>
              <li>ดูแลการออก PR/PO วัสดุท่อลม</li>
              <li>ตรวจสอบสินค้าและสต็อก</li>
              <li>ติดต่อซัพพลายเออร์และต่อรองราคา</li>
              <li>จัดเก็บเอกสารและรายงานสต็อก</li>
            </ul>
          </div>

          <div className="mb-3">
            <strong>Wuexcargo Co., Ltd. (2024)</strong><br />
            <span className="text-muted">ตำแหน่ง: แอดมินเซลล์</span>
            <ul>
              <li>ดูแลตอบแชทลูกค้า เช่น Line OA</li>
              <li>ดูแลเพจ Facebook และเว็บไซต์</li>
              <li>ประสานงานด้านการขายในบริษัท</li>
              <li>สั่งสินค้าจากประเทศจีนและตรวจสอบสินค้าขนส่ง</li>
            </ul>
          </div>

          <div className="mb-3">
            <strong>Cheetah Insurance Broker Co., Ltd. (2023)</strong><br />
            <span className="text-muted">ตำแหน่ง: เจ้าหน้าที่จัดซื้อ</span>
            <ul>
              <li>จัดซื้อ Software / Hardware</li>
              <li>วิเคราะห์ความต้องการแต่ละแผนก</li>
              <li>ติดตามการส่งสินค้า</li>
              <li>ตรวจสอบคุณภาพและวิเคราะห์ปรับปรุงกระบวนการ</li>
            </ul>
          </div>

          <h5 className="mt-4">🧠 ทักษะ</h5>
          <ul className="list-unstyled">
            <li>✔ บริการลูกค้าและสื่อสารดีเยี่ยม</li>
            <li>✔ จัดการเวลาและงานได้ดี</li>
            <li>✔ ตรวจสอบสต็อกและลงข้อมูลละเอียด</li>
            <li>✔ เรียนรู้ไว ปรับตัวเร็ว</li>
            <li>✔ สื่อสารไทย-อังกฤษคล่อง มีพื้นฐานญี่ปุ่น</li>
            <li>✔ ใช้ MS Office, Canva, Bard ได้คล่อง</li>
          </ul>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center mt-5 social-buttons">
        <a href="https://facebook.com/suwimon" className="btn btn-info mx-2" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/suwimon" className="btn btn-warning mx-2" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://line.me/ti/p/miyeonx97" className="btn btn-success mx-2" target="_blank" rel="noopener noreferrer">Line</a>
        <a
          href="https://www.tiktok.com/@aya30433?_t=ZS-8yqe6reRlJt&_r=1"
          className="btn btn-dark mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok — แชร์จากลูกค้า 🎐
        </a>
      </div>
    </div>
  );
}