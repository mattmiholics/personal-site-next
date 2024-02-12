"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from '../../node_modules/next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export default function CustSwiper(...data) {
  return (
    <Swiper 
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    className=""
    > 
       { data.map(slide =>
            <SwiperSlide key={slide.id}>
                <div>
                <Image
                src = {slide.src}
                alt= {slide.alt}
                />
                </div> 
                <div>{slide.name}</div> 
            </SwiperSlide>
        )}

    </Swiper>
  )
}