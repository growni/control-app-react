import Slider from "react-slick";



export default function UiSlider({children, settings}) {
    return (
        <div className="slider-container" style={{width:"90%", margin: '0 auto'}}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}