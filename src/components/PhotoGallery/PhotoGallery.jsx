import React from "react";
import './PhotoGallery.css'
import { Swiper, SwiperSlide } from "swiper/react";
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import slide_image_1 from "/images/facilities/photo section/photography (1).png";
import slide_image_10 from "/images/facilities/photo section/photography (10).png";
import slide_image_11 from "/images/facilities/photo section/photography (11).png";
import slide_image_12 from "/images/facilities/photo section/photography (12).png";
import slide_image_2 from "/images/facilities/photo section/photography (2).png";
import slide_image_3 from "/images/facilities/photo section/photography (3).png";
import slide_image_4 from "/images/facilities/photo section/photography (4).png";
import slide_image_5 from "/images/facilities/photo section/photography (5).png";
import slide_image_6 from "/images/facilities/photo section/photography (6).png";
import slide_image_7 from "/images/facilities/photo section/photography (7).png";
import slide_image_8 from "/images/facilities/photo section/photography (8).png";
import slide_image_9 from "/images/facilities/photo section/photography (9).png";

function App() {
  return (
    <div className="container-s">
      <h1 className="heading">Photo <span className="orange-text">Gallery</span></h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <BsArrowLeftCircle size={30} color="#3e804b"/>
          </div>
          <div className="swiper-button-next slider-arrow">
            <BsArrowRightCircle size={30} color="#3e804b"/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
