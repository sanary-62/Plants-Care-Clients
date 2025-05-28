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
      className="w-full mt-28"
      style={{ height: "80vh", border: "2px solid lime" }}
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
        className="w-full"
        style={{ height: "100%" }}
      >
        {slides.map(({ src, title, desc }, i) => (
          <SwiperSlide key={i} style={{ height: "100%" }}>
            <div
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                src={src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+not+found";
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "20px",
                  maxWidth: "600px",
                }}
              >
                <h2
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </h2>
                <p style={{ fontSize: "1.2rem" }}>{desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
