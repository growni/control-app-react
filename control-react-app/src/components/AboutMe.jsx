import React from 'react';
import Slider from 'react-slick';
import avatar from '../assets/avatar.png';
import humble_stones from '../assets/humble_stones.jpg';
import cloud_forest from '../assets/cloud_forest.jpg';
import games from '../assets/games.png';
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

const AboutMe = () => {
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
    <section id="about-me" className="about-me-section">
      <h2>
        {currentSlide === 0 && (
          <>About <span style={{ color: '#ffca2b' }}>Me</span></>
        )}
        {currentSlide === 1 && (
          <>About <span style={{ color: '#ffca2b' }}>Photography</span></>
        )}
        {currentSlide === 2 && (
          <>About <span style={{ color: '#ffca2b' }}>Gaming</span></>
        )}
      </h2>
      <div className="about-me-carousel-wrapper">
      <Slider {...settings} className="about-me-carousel">
  <div className="about-me-slide">
    <div className="slide-content">
      <div className="carousel-item side-item">
      <p className="about-me-p">My name is Aleks, and I am a self-taught developer. I am curious about technologies and my goal is to build useful tools that help people save time and get organized.</p>
      </div>
      <div className="carousel-item center-item">
        <img className="about-me-img" src={avatar} alt="Avatar" />
      </div>
      <div className="carousel-item side-item">
        <p className="about-me-p">I love playing video games, do photography and explore wild places far from civilization. If you are interested to learn more about me or my app you can connect with me on <a href="https://www.linkedin.com/in/aleks310/" target='_blank'>LinkedIn</a>.</p>
      </div>
    </div>
  </div>

  <div className="about-me-slide">
    <div className="slide-content">
    <div className="carousel-item side-item">
      <img src={humble_stones} alt="Placeholder 1" className="about-me-carousel-img" />
      </div>
      <div className="carousel-item center-item">
      <p className="about-me-p">I love spending time in the nature with friends and familiy. It helps me detach from the busy everyday life and connect more with myself. Of course, this is the perfect opportunity to take my camera with me and snap some photos. </p>
      </div>
      <div className="carousel-item side-item">
      <img src={cloud_forest} alt="Placeholder 2" className="about-me-carousel-img" />
      </div>
    </div>
  </div>

  <div className="about-me-slide">
    <div className="slide-content">
    <div className="carousel-item side-item">
    <p className="about-me-p">When the weight of social life and responsibilities start to get heavy, I retreat to the world of video games. Completing immersive stories, developing complex characters, ranking up in competitive leaderboards or simply hanging with online friends, gaming has always been part of my life.</p>
      </div>
      <div className="carousel-item center-item">
      <img src={games} alt="My games" className="about-me-carousel-img" />
      </div>
      <div className="carousel-item side-item">
      <p className="about-me-p">If you are looking for someone to play with, find me on the gaming platforms: <br /><br /><b>Steam</b>: <i>growni</i> <br /><b>Battle net</b>: <i>Growni#2965</i></p>
      </div>
    </div>
  </div>
</Slider>

      </div>
    </section>
  );
};

export default AboutMe;
