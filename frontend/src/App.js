import React, { useState } from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
import SuwimonProfile from './components/SuwimonProfile';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import CatCowSwing from './components/CatCowSwing';
import SuwimonWelcome from './components/SuwimonWelcome'; // ✅ เพิ่ม

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <SuwimonWelcome onDone={() => setEntered(true)} />} {/* ✅ โผล่ทับทั้งหน้า */}
      {entered && (
        <>
          <Clock />
          <Header />
          <SuwimonProfile />
          <Portfolio />
          <CatCowSwing />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
