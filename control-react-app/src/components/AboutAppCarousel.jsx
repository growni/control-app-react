import Slider from "react-slick";
import AboutApp from './AboutApp';

const AboutAppCarousel = () => {
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
        <div><AboutApp /></div>
      </Slider>
    </section>
  );
};

export default AboutAppCarousel;