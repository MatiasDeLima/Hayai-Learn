import React from 'react'
import "./Features.css";
import { FeaturesCard } from '../../components/FeaturesCard/FeaturesCard.jsx';
import { features } from '../../assets/data/index.js';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

const Features = () => {
  return (
    <section className="features section">
      <h2 className="features__title">
        <span className="text__line">Exciting</span> and Robust<br /> <span className="orange__text-color">Features</span> That Set Our<br /> <span className="orange__text-color">Product</span> Apart.
      </h2>

      <div className="features__shadow"></div>

      <div className="features__container container">
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={true}
          pagination={true}
          modules={[Pagination]}
          className="feature-swiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={feature.id}>
              <FeaturesCard 
                id={feature.id}
                key={feature.id}
                image={feature.img}
                title={feature.title}
                content={feature.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Features;