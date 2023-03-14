import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const banner = [
  {
    name: "Any",
    src: "https://template.hasthemes.com/hiraola/hiraola/assets/images/slider/3.jpg",
  },
  {
    // name: "MMMMM",
    src: "https://template.hasthemes.com/hiraola/hiraola/assets/images/slider/1.jpg",
  },
  {
    // name: "MMMMM",
    src: "./Hero/banner1.jpg",
  },
];

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";

function Hero() {
  return (
    <>
      <div className="bg-gray-200  overflow-hidden lg:h-[600px] relative">
        <Swiper
          // onActiveIndexChange={(e) => console.log("any", e)}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          pagination={{
            bulletActiveClass: "swiper-active-bullet",
            clickable: true,
          }}
          effect={"fade"}
          loop={true}
          modules={[Pagination, Autoplay, EffectFade]}
          className=""
        >
          {banner?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <div className="w- z-50 top-[25%] absolute inset-0 flex justify-center">
                  <div>
                    <p className="text-white text-center font-medium text-2xl lg:text-[60px]  drop-shadow-lg">
                      {item?.name?.toUpperCase()}
                    </p>
                  </div>
                </div>
                {/* <div className="absolute bg-[#005C8C]/40 w-full h-full"></div> */}
                <img src={item?.src} className="object-cover w-screen lg:h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
