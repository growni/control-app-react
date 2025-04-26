import React from "react";
import app_image_main from '../assets/control_main_img.png';
import UiSlider from "./UI/gallery";

export default function AboutAppNew({images}){
 

    


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
                  arrows: false
                }
            }
        ]
    };


    return (
        <div className="salon-details-gallery">
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

            </UiSlider>
        </div>
    )
}