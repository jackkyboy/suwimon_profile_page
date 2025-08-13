import React from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
import SuwimonProfile from './components/SuwimonProfile';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import CatCowSwing from './components/CatCowSwing'; // ✅ ปรับพาธให้ตรงตำแหน่งจริง

function App() {
  return (
    <>
      <Clock />
      <Header />
      <SuwimonProfile />
      <Portfolio />
      <CatCowSwing /> {/* ✅ จะอยู่ใต้ Portfolio */}
      <Footer />
    </>
  );
}

export default App;
