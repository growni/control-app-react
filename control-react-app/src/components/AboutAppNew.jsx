import React, { useEffect, useRef, useState } from "react";
import UiSlider from "./UI/gallery";
import app_image_main from '../assets/control_main_img.png';
import app_image_login from '../assets/control_login_img.png';
import app_image_register from '../assets/control_register_img.png';
import app_image_install from '../assets/control_install_img.png';
import app_image_uninstall from '../assets/control_uninstall_img.png';
import app_image_debloat from '../assets/control_debloat_img.png';
import app_image_profile from '../assets/control_profile_img.png';

// ✅ Custom hook
function useWindowWidth(onResizeCallback) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            if (onResizeCallback) onResizeCallback(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [onResizeCallback]);

    return width;
}

export default function AboutAppNew({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevWidth = useRef(window.innerWidth);

    // ✅ Handle full-screen reset logic here
    const handleResize = (newWidth) => {
        const wasBelow = prevWidth.current < 1000;
        const isNowFull = newWidth >= 1000;
        if (wasBelow && isNowFull) {
            setCurrentSlide(0); // Reset carousel
        }
        prevWidth.current = newWidth;
    };

    const width = useWindowWidth(handleResize);

    const getTitleForAboutApp = (index) => {
        let sectionIndex;

        if (width < 800) {
            sectionIndex = Math.floor(index / 1);
        } else if (width < 1000) {
            sectionIndex = Math.floor(index / 2);
        } else {
            sectionIndex = Math.floor(index / 3);
        }

        switch (sectionIndex) {
            case 0:
                return <>About the <span style={{ color: '#ffca2b' }}>App</span></>;
            case 1:
                return <>Login / <span style={{ color: '#ffca2b' }}>Register</span></>;
            case 2:
                return <>Install / <span style={{ color: '#ffca2b' }}>Uninstall</span></>;
            case 3:
                return <>Clean up / <span style={{ color: '#ffca2b' }}>Debloat</span></>;
            default:
                return <><span style={{ color: '#ffca2b' }}>Profile</span></>;
        }
    };

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
            <h2>{getTitleForAboutApp(currentSlide)}</h2>

            <UiSlider settings={settings}>
                {/* Your slides here... */}
                <div className="gallery-item">
                    <p className="about-app-p">Control is a desktop application built with JavaFX and Spring Boot...</p>
                </div>
                <div className="gallery-item-img">
                    <img className="about-app-img" src={app_image_main} alt="Avatar" />
                </div>
                <div className="gallery-item">
                    <p className="about-app-p">The next slides are a brief overview. Visit <a href="https://github.com/growni/control-app-JavaFX" target="_blank">GitHub</a>.</p>
                </div>

                {/* Add the rest of your slides here... */}
            </UiSlider>
        </section>
    );
}
