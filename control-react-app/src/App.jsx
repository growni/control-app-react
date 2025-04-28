import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Download from '../src/components/Download';
import AboutMe from '../src/components/AboutMe';
import AboutApp from '../src/components/AboutApp';
import DonateDesktop from './components/DonateDesktop';
import './App.css';
import ResetPassword from '../src/components/ResetPassword';
import AboutMeCarousel from './components/AboutMeCarousel';
import AboutAppCarousel from './components/AboutAppCarousel';
import DonateMobile from './components/DonateMobile';
import AboutAppNew from './components/AboutAppNew';
import AboutMeNew from './components/AboutMeNew';

function HomePage() {
  return (
    <div className="app-container">
      <header>
        <nav>
          <ScrollLink className='hideAfter600' to="download" smooth={true} duration={500}>Download</ScrollLink>
          <ScrollLink to="aboutApp" smooth={true} duration={800}>About App</ScrollLink>
          <ScrollLink to="aboutMe" smooth={true} duration={1000}>About Me</ScrollLink>
          <ScrollLink to="donate" smooth={true} duration={1500}>Donate</ScrollLink>
        </nav>
      </header>

      <main>
        <Element name="download"><Download /></Element>
        {/* <Element name="aboutApp"><AboutAppCarousel /></Element> */}
        <Element name="aboutApp"><AboutAppNew/></Element>
        {/* <Element name="aboutMe"><AboutMeCarousel /></Element> */}
        <Element name="aboutApp"><AboutMeNew/></Element>
        <Element name="donate"><DonateDesktop /></Element>
        <Element name="donate"><DonateMobile /></Element>

      </main>

      <footer>
        <p>© {new Date().getFullYear()} Control App</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
