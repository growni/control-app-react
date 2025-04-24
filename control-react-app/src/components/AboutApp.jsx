import app_image_main from '../assets/control_main_img.png';
import React from 'react';
import Slider from 'react-slick';
import app_image_login from '../assets/control_login_img.png';
import app_image_register from '../assets/control_register_img.png';
import app_image_install from '../assets/control_install_img.png';
import app_image_uninstall from '../assets/control_uninstall_img.png';
import app_image_debloat from '../assets/control_debloat_img.png';
import app_image_profile from '../assets/control_profile_img.png';
import '../styles/About.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

const CustomPrevArrow = ({ onClick }) => (
  <div className="arrow arrow-left" onClick={onClick}>‹</div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="arrow arrow-right" onClick={onClick}>›</div>
);

const AboutApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <section id="about-app" className="about-app-section">
      {/* <h2>About <span style={{ color: '#ffca2b' }}>Me</span></h2> */}
      <h2>
  {currentSlide === 0 && (
    <>About the <span style={{ color: '#ffca2b' }}>App</span></>
  )}
  {currentSlide === 1 && (
    <>Login / <span style={{ color: '#ffca2b' }}>Register</span></>
  )}
  {currentSlide === 2 && (
    <>Install / <span style={{ color: '#ffca2b' }}>Uninstall</span></>
  )}
  {currentSlide === 3 && (
    <>Clean up / <span style={{ color: '#ffca2b' }}>Debloat</span></>
  )}
  {currentSlide === 4 && (
    <><span style={{ color: '#ffca2b' }}>Profile</span></>
  )}
</h2>
      <div className="about-app-carousel-wrapper">
      <Slider {...settings} className="about-app-carousel">
  <div className="about-app-slide">
    <div className="slide-content">
      <div className="carousel-item side-item">
      <p className="about-app-p">Control is a desktop application built with JavaFX and Spring Boot that helps you easily install/uninstall different apps, as well as remove bloaters. <br></br>The app is free to use and is still in early stage of development.</p>
      </div>
      <div className="carousel-item center-item">
        <img className="about-app-img" src={app_image_main} alt="Avatar" />
      </div>
      <div className="carousel-item side-item">
        <p className="about-app-p">The next slides are a brief overview of the app. For more details and full documentation visit my <a href="https://github.com/growni/control-app-JavaFX" target='_blank'>github</a> page.</p>
      </div>
    </div>
  </div>

  {/* Login / Register */}

  <div className="about-app-slide">
    <div className="slide-content">
    <div className="carousel-item side-item">
      <img src={app_image_login} alt="Login image placeholder" className="about-app-carousel-img" />
      </div>
      <div className="carousel-item center-item">
      <p className="about-app-p">Simple login and registration pages. Those operations are not available in the website and can only be done through the app.</p>
      </div>
      <div className="carousel-item side-item">
      <img src={app_image_register} alt="Register image placeholder" className="about-app-carousel-img" />
      </div>
    </div>
  </div>

{/* Install / Uninstall */}

  <div className="about-app-slide">
    <div className="slide-content">
    <div className="carousel-item side-item">
    <img src={app_image_install} alt="Install image placeholder" className="about-app-carousel-img" />
      </div>
      <div className="carousel-item center-item">
      <p className="about-app-p">A small, but growing list of apps that can be selected for installation or removal. The process is silent and executed in the background, allowing you to focus on your other tasks.</p>
      </div>
      <div className="carousel-item side-item">
      <img src={app_image_uninstall} alt="Uninstall image placeholder" className="about-app-carousel-img" />
      </div>
    </div>
  </div>

{/* Debloat */}

  <div className="about-app-slide">
    <div className="slide-content">
    <div className="carousel-item side-item">
    <p className="about-app-p">The integrated scanner finds applications on your machine that are considered as bloater apps. Most often, those are not needed and rarely used and are only aggravating the performance of your computer. However, always be cautious and double check the app before removing it. </p>
      </div>
      <div className="carousel-item center-item">
      <img src={app_image_debloat} alt="Debloat image placeholder" className="about-app-carousel-img" />
      </div>
      <div className="carousel-item side-item">
      <p className="about-app-p">You can instantly lighten up and increase the performance of your computer by killing running services and tasks, that are not vital to your system. The functionality does not require scanning and will make an automatic selection of the processes that should be killed.</p>
      </div>
    </div>
  </div>

  {/* Profile */}

  <div className="about-app-slide">
    <div className="slide-content">
    <div className="carousel-item side-item">
    <p className="about-app-p">Registered users have access to additional features, including subscribtion and feedback form. By subscribing, you will receive detailed notes on your email after every update. <br></br>The feedback form is the primary mean of telling me what you like, hate or would like to see in the future.</p>
      </div>
      <div className="carousel-item center-item">
      <img src={app_image_profile} alt="Profile image placeholder" className="about-app-carousel-img" />
      </div>
      <div className="carousel-item side-item">
      <p className="about-app-p">I hope that the Control app will serve your needs well and I am looking forward to receiving your feedback and requests!</p>
      </div>
    </div>
  </div>
</Slider>

      </div>
    </section>
  );
};

export default AboutApp;
  