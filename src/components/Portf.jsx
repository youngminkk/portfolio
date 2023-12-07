import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { portFolio } from "../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portf = () => {
  const swiperRef = useRef(null);
  return (
    <section id="portf">
        <div className="portf__title">PORTFOLIO</div>
        <div className="portf">
           <div className="portfolio__left">
            <div className="portfolio__title" >
              <h1>포트폴리오</h1>
            </div>
            <div className="portfolio__content">
              <p>
                너무 힘든 포트폴리오
                <br /> 너무 힘든 포트폴리오
                <br /> 너무 힘든 포트폴리오
                <br /> 너무 힘든 포트폴리오
              </p>
            </div>
        </div>

        <div
          className="portfolio__right"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          <div></div>
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            ref={swiperRef}
            breakpoints={{
              1000: {
                slidesPerView: 2.3,
                slidesPerGroup: 1,
              },
              800: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              600: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
            }}
          >
            {portFolio.map((item, index) => (
              <div key={index}>
                {" "}
                {/* 각 슬라이드를 감싸는 div */}
                <SwiperSlide key={`slide-${index}`}>
                  <div className="swiper-zoom-container">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="slide__title">{item.title}</div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
         </div>
        </div>
    </section>
  );
};

export default Portf;
