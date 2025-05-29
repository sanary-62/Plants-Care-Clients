import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    src: "https://i.postimg.cc/XJNGmZmM/25002041-6990313.jpg",
  },
  {
    src: "https://i.postimg.cc/NMN9csvK/25002040-6965878.jpg",
  },
  {
    src: "https://i.postimg.cc/qB5hDvGY/25002039-6965900.jpg",
  },
];

const Hero = () => {
  return (
    <div
      className="w-full  "
      style={{
        height: "60vh",
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map(({ src, title, desc }, i) => (
          <SwiperSlide key={i} className="h-full">
            <div className="relative w-full h-full">
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover object-center md:object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+not+found";
                }}
              />
              <div className="absolute inset-0 text-white flex flex-col justify-center p-4 max-w-xl ">
                <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-4">
                  {title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg">{desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
