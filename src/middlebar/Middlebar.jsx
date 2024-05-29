import React from 'react'
import "./middlebar.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import shopimage1 from "../assets/shopsmartimage1.jpg"
import shopimage3 from "../assets/shopsmartimage3.jpg"
import shopimage4 from "../assets/shopsmartimage4.jpg"
import shopimage5 from "../assets/shopsmartimage5.jpg"
import shopimage6 from "../assets/shopsmartimage6.png"



const Middlebar = () => {
  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={shopimage1} style={{objectFit:"fill",backgroundAttachment:
          "fixed",objectPosition:"center", 
        }}></img>
        </SwiperSlide>
        <SwiperSlide><img src={shopimage3} style={{objectFit:"fill",backgroundAttachment:
          "fixed",objectPosition:"center", 
        }}>
          </img></SwiperSlide>
        <SwiperSlide><img src={shopimage4}  style={{objectFit:"fill",backgroundAttachment:
          "fixed",objectPosition:"center", 
        }}       ></img></SwiperSlide>
        <SwiperSlide><img src={shopimage5} style={{objectFit:"fill",backgroundAttachment:
          "fixed",objectPosition:"center", 
        }}></img></SwiperSlide>
        <SwiperSlide><img src={shopimage6}  style={{objectFit:"fill",backgroundAttachment:
          "fixed",objectPosition:"center", 
        }}></img></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Middlebar