import React, { useState } from 'react';
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
import PopUpMenu from './components/UI/popUp';

function HomePage() {

  //TODO: Add Pop with scans
  // const [isOpenPop, setIsOpen] = useState(true);

  // const handlePopUp = ()=>{
  //   setIsOpen(!isOpenPop)
  // }

  return (
    <div className="app-container">
      <header>
        <nav>
          <div className='nav-links'>
            <ScrollLink className='hideAfter600' to="download" smooth={true} duration={500}>Download</ScrollLink>
            <ScrollLink to="aboutApp" smooth={true} duration={800}>About App</ScrollLink>
            <ScrollLink to="aboutMe" smooth={true} duration={1000}>About Me</ScrollLink>
            <ScrollLink handleOpen to="donate" smooth={true} duration={1500}>Donate</ScrollLink>
          </div>
        </nav>
      </header>

      <main>
        {/* {
          isOpenPop && <PopUpMenu handleClose={handlePopUp} />
        } */}


        <Element style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} name="download"><Download /></Element>
        {/* <Element name="aboutApp"><AboutAppCarousel /></Element> */}
        <Element name="aboutApp"><AboutAppNew/></Element>
        {/* <Element name="aboutMe"><AboutMeCarousel /></Element> */}
        <Element name="aboutMe"><AboutMeNew/></Element>
        {/* <Element name="donate"><DonateDesktop /></Element> */}
        <Element style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} name="donate"><DonateMobile /></Element>

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
