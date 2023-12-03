import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { portFolio } from "../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Contact = () => {
  const swiperRef = useRef(null);
  return (
    <section id="contact">
      <div className="contact">
        <div className="contact__left">
          <div className="contact__left"></div>
          <h1>
            <span>김영민</span> 시리즈 영화
          </h1>
          <div>
            <p>
              드넓은 세상, 그곳에 숨은 위대한 이야기.
              <br /> 전 세계 모든 장르의 영화가 다 모였다.
              <br /> 드라마, 코미디, 스릴러, 로맨스, 액션!
              <br /> 무엇이든 다 찾아보세요. 없는 게 없답니다.
            </p>
          </div>
        </div>

        <div
          className="contact__right"
          onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
          <Swiper
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={30}
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

export default Contact;
