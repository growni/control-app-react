import React from "react";
import app_image_main from '../assets/control_main_img.png';
import UiSlider from "./UI/gallery";
import { useState } from "react";
import avatar from '../assets/avatar.png';
import humble_stones from '../assets/humble_stones.jpg';
import cloud_forest from '../assets/cloud_forest.jpg';
import games from '../assets/games.png';



export default function AboutMeNew(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  dots: false,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true
                }
            }
        ],
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex);
        },
    };

    
    

    return (
        <section className="aboutApp-section">

            <h2>
                <>About <span style={{ color: '#ffca2b' }}>Me</span></>

                {/* {currentSlide === 0 && (
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
                )} */}
            </h2>


            <UiSlider settings={settings}>
                    <div className="gallery-item">
                        <p className="about-me-p">My name is Aleks, and I am a self-taught developer. I am curious about technologies and my goal is to build useful tools that help people save time and get organized.</p>
                    </div>
                    <div className="gallery-item-img">
                        <img className="about-me-img" src={avatar} alt="Avatar" />
                    </div>
                    <div className="gallery-item">
                        <p className="about-me-p">I love playing video games, do photography and explore wild places far from civilization. If you are interested to learn more about me or my app you can connect with me on <a href="https://www.linkedin.com/in/aleks310/" target='_blank'>LinkedIn</a>.</p>
                    </div>
                    <div className="gallery-item-img">
                       <img src={humble_stones} alt="Placeholder 1" className="about-me-carousel-img" />
                    </div>
                    <div className="gallery-item">
                        <p className="about-me-p">I love spending time in the nature with friends and familiy. It helps me detach from the busy everyday life and connect more with myself. Of course, this is the perfect opportunity to take my camera with me and snap some photos. </p>
                    </div>
                    <div className="gallery-item-img">
                        <img src={cloud_forest} alt="Placeholder 2" className="about-me-carousel-img" />
                    </div>
                    <div className="gallery-item">
                        <p className="about-me-p">When the weight of social life and responsibilities start to get heavy, I retreat to the world of video games. Completing immersive stories, developing complex characters, ranking up in competitive leaderboards or simply hanging with online friends, gaming has always been part of my life.</p>
                    </div>
                    <div className="gallery-item-img">
                      <img src={games} alt="My games" className="about-me-carousel-img" />
                    </div>
                    <div className="gallery-item">
                      <p className="about-me-p">If you are looking for someone to play with, find me on the gaming platforms: <br /><br /><b>Steam</b>: <i>growni</i> <br /><b>Battle net</b>: <i>Growni#2965</i></p>
                    </div>
            </UiSlider>
        </section>
    )
}