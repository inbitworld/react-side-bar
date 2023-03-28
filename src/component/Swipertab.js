import React from "react";
// import avatarIImg from "./assets/1.jpg";
// import avatarIIImg from "./assets/2.jpg";
// import avatarIIIImg from "./assets/3.jpg";
// import avatarIVImg from "./assets/4.png";
// import avatarVImg from "./assets/5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
export default function App() {
  return (
    <>
      
        <div className="">
          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Navigation]}
            className=" mb-8"
            effect={""}
            coverflowEffect={{
              rotate: 0,
              stretch: 20,
              depth: 150,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide className="swiper-slide bg-red-400">
             
                
                <p className="text-xl">
                  Total Users
                </p>
                <h6 className="review-by">543</h6>
             
            </SwiperSlide>

            <SwiperSlide className="swiper-slide bg-yellow-100 ">
            
                
                <p className="text-xl">
                  SQ Results
                </p>
                <h6 className="review-by">176</h6>
              
            </SwiperSlide>

            <SwiperSlide className="swiper-slide bg-green-200">
              
                
                <p className="text-xl">
                  PQ Results
                </p>
                <h6 className="review-by">142</h6>
              
            </SwiperSlide>

            <SwiperSlide className="swiper-slide bg-orange-200">
              
               
                <p className="text-xl">
                  NO. of Draft
                </p>
                <h6 className="review-by">121 </h6>
             
            </SwiperSlide>

            <SwiperSlide className="swiper-slide bg-blue-200">
              
               
                <p className="text-xl">
                  Total Products
                </p>
                <h6 className="review-by">989 </h6>
              
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  );
}