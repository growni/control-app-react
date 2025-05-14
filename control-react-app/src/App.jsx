import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Download from '../src/components/Download';
import './App.css';
import ResetPassword from '../src/components/ResetPassword';
import Donate from './components/Donate';
import AboutApp from './components/AboutApp';
import AboutMe from './components/AboutMe';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/About.css'; 


function HomePage() {
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
        <Element style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} name="download"><Download /></Element>
        <Element name="aboutApp"><AboutApp/></Element>
        <Element name="aboutMe"><AboutMe/></Element>
        <Element style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} name="donate"><Donate /></Element>
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
