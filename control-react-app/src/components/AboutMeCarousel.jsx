import Slider from "react-slick";
import AboutMe from './AboutMe';
import AboutApp from './AboutApp';

const AboutCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="about-me-carousel" className="section">
      <Slider {...settings}>
        <div><AboutMe /></div>
      </Slider>
    </section>
  );
};

export default AboutCarousel;
