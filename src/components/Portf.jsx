import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { portFolio } from "../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portf = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper) => {
    let realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
  };
  return (
    <section id="portf">
      <div className="portf__title ">PORTFOLIO</div>
      <div className="portf">
        <div className="portf__left">
          <div className="porf__left__container">
            <div className="portf__inner__title" >
              <h1>{portFolio[activeIndex].title}</h1>
            </div>
            <div className="portf__inner__content">
              <p>{portFolio[activeIndex].desc}</p>
            </div>
          </div>
        </div>

        <div
          className="portf__right"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          <div></div>
          <Swiper
            onSlideChangeTransitionEnd={handleSlideChange}
            slidesPerView={1}
            centeredSlides={false}
            grabCursor={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            ref={swiperRef}
            breakpoints={{
              1200: {
                slidesPerView: 2.3,
                slidesPerGroup: 1,
              },
              1000: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              800: {
                slidesPerView: 2,
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
