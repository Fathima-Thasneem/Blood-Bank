import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './imageslider.css';
export default function ImageSlider() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    
};
return (
    <div class = "container">
       
        <Slider  {...settings}>
        <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
        </Slider>
    </div>
);
}