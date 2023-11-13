import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import SwiperCore from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperData } from "../data";

const QuickRead = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);
  return (
    <section className="px-6 py-16 relative ">
      <h2 className="title section-title mb-10" data-name="Quick read">
        Quick read
      </h2>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          // slidesPerView={3}
          breakpoints={
            {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoHeight={true}
          watchSlidesVisibility={true}
          navigation={{ nextEl: "#arrow-left", prevEl: "#arrow-right" }}
          loop={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          scrollbar={{ draggable: true }}
          style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
        >
          {SwiperData.map((swipe) => (

          <SwiperSlide key={swipe.id}>
            <div className="bg-white swipe">
              <img src={swipe.img} alt="no image" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 bg-black/75 hover:bg-primary-background-color transition-colors ease-in-out duration-300 w-full px-2 py-3">
                <div className="text-light-color-alt text-sm flex justify-between items-center">
                  <span>{swipe.date} </span>
                  <span className="w-[5px] h-[5px] rotate-45 bg-light-color-alt"></span>
                  <span>{swipe.limit}</span>
                </div>
                <h3 className="text-light-color text-xl font-bold">{swipe.desc}</h3>
              </div>
            </div>
          </SwiperSlide>
          ))}
          
        </Swiper>
      </div>

      <button id="arrow-left" className="arrow-left arrow">
        <BsFillArrowLeftCircleFill />
      </button>
      <button id="arrow-right" className="arrow-right arrow">
        <BsFillArrowRightCircleFill />
      </button>
    </section>
  );
};

export default QuickRead;
