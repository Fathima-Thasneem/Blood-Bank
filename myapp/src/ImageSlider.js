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
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAv3ncCC974aZKMAUN9NmV42P203VqI01DA&usqp=CAU" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAv3ncCC974aZKMAUN9NmV42P203VqI01DA&usqp=CAU" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAv3ncCC974aZKMAUN9NmV42P203VqI01DA&usqp=CAU" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAv3ncCC974aZKMAUN9NmV42P203VqI01DA&usqp=CAU" />
      </div>
        </Slider>
    </div>
);
}