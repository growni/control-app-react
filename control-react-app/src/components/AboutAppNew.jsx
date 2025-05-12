import React from "react";
import app_image_main from '../assets/control_main_img.png';
import UiSlider from "./UI/gallery";
import { useState } from "react";
import app_image_login from '../assets/control_login_img.png';
import app_image_register from '../assets/control_register_img.png';
import app_image_install from '../assets/control_install_img.png';
import app_image_uninstall from '../assets/control_uninstall_img.png';
import app_image_debloat from '../assets/control_debloat_img.png';
import app_image_profile from '../assets/control_profile_img.png';



export default function AboutAppNew({images}){
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
                // arrows: false
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
                <>About the <span style={{ color: '#ffca2b' }}>App</span></>
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
                    <p className="about-app-p">Control is a desktop application built with JavaFX and Spring Boot that helps you easily install/uninstall different apps. <br></br>The app is free to use and still in early stage of development.</p>
                </div>
                <div className="gallery-item-img">
                    <img className="about-app-img" src={app_image_main} alt="Avatar" />
                </div>
                <div className="gallery-item">
                    <p className="about-app-p">The next slides are a brief overview. For more details and full documentation visit my <a href="https://github.com/growni/control-app-JavaFX" target='_blank'>github</a> page.</p>
                </div> 

                {/* Login / Register */}

                <div className="gallery-item-img">
                    <img src={app_image_install} alt="Install image placeholder" className="about-app-carousel-img" />
                </div>
                <div className="gallery-item">
                    <p className="about-app-p">A small, but growing list of apps that can be selected for installation or removal. If possible, the process is silent and executed in the background, allowing you to focus on your other tasks.</p>
                </div>
                <div className="gallery-item-img">
                    <img src={app_image_uninstall} alt="Uninstall image placeholder" className="about-app-carousel-img" />
                </div>


                <div className="gallery-item-img">
                    <img src={app_image_install} alt="Install image placeholder" className="about-app-carousel-img" />
                </div>
                <div className="gallery-item">
                    <p className="about-app-p">A small, but growing list of apps that can be selected for installation or removal. If possible, the process is silent and executed in the background, allowing you to focus on your other tasks.</p>
                </div>
                <div className="gallery-item-img">
                    <img src={app_image_uninstall} alt="Uninstall image placeholder" className="about-app-carousel-img" />
                </div>



                <div className="gallery-item">
                    <p className="about-app-p">The integrated scanner retrieves all store apps that are installed on your machine. Most often, those are not needed and rarely used and are only aggravating the performance and memory of your computer. However, always be cautious and double check the app before removing it. </p>
                </div>
                <div className="gallery-item-img">
                    <img src={app_image_debloat} alt="Debloat image placeholder" className="about-app-carousel-img" />
                </div>
                <div className="gallery-item">
                    <p className="about-app-p">You can instantly lighten up and increase the performance of your computer by killing running services and tasks, that are not vital to your system. The functionality does not require scanning and will make an automatic selection of the processes that should be killed.</p>
                </div>



                <div className="gallery-item">
                    <p className="about-app-p">Registered users have access to additional features, including subscribtion and feedback form. By subscribing, you will receive detailed notes on your email after every update. <br></br>The feedback form is the primary mean of telling me what you like, hate or would like to see in the future.</p>
                </div>
                <div className="gallery-item-img">
                    <img src={app_image_profile} alt="Profile image placeholder" className="about-app-carousel-img" />
                </div>
                <div className="gallery-item">
                    <p className="about-app-p">I hope that the Control app will serve your needs well and I am looking forward to receiving your feedback and requests!</p>
                </div>

            </UiSlider>
        </section>
    )
}