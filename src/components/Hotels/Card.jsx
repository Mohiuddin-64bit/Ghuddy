import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Mousewheel } from "swiper/modules";
import axios from "axios";
import { VscLocation, VscHome, VscStarFull } from "react-icons/vsc";
import Container from "../Shared/container";
import DiscountBar from "../Buttons/DiscountBar";
import HeartButton from "../Buttons/HeartButton";

const Card = ({ hotels }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          // Responsive breakpoints
          1024: {
            slidesPerView: 3, // 3 slides per view on screens larger than 1024px (e.g., desktop)
          },
        }}
        className="mySwiper"
      >
        {hotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <div className=" cursor-pointer group hover:shadow-2xl transition-all">
              <div className="flex flex-col bg-[#ffffff] hover:bg-[#e0e9f5] rounded-xl h-[600px] w-full">
                <div
                  className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-t-xl
          "
                >
                  <img
                    className="object-cover h-full w-full group-hover:scale-110 transition"
                    src={hotel.images[0]}
                  />

                  <div className="absolute top-3 left-3">
                    <DiscountBar props={hotel.discount_percent}></DiscountBar>
                  </div>
                  <div
                    className="
            absolute
            top-3
            right-3
          "
                  >
                    <HeartButton />
                  </div>
                </div>
                <div className="px-4 pt-3">

                    <div className="flex justify-between">
                      <div className="font-semibold text-[16px]">
                        {hotel.property_name}
                      </div>
                      <div className="flex items-center gap-1">
                        <VscStarFull></VscStarFull>
                        {hotel.class_rating}
                      </div>
                    </div>
                    <div className="pt-2 flex gap-1 text-sm items-center">
                      <VscLocation></VscLocation>
                      {hotel.short_address.slice(0, 40)}
                    </div>
                    <div className="flex pt-2 gap-1">
                      <div>
                        <VscHome />
                      </div>
                      <div className=" text-sm">
                        {hotel.display_facilities
                          .slice(0, 5)
                          .map((facility, index) => (
                            <React.Fragment key={facility.name}>
                              {facility.name}
                              {index < 4 ? ", " : ""}
                            </React.Fragment>
                          ))}
                      </div>
                    </div>
                  <div className="mt-8">
                    <h3 className="text-center my-2">Checkout Price:</h3>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="font-semibold text-center">
                        {hotel.red_price.toFixed(0)} BDT
                      </div>
                      <strike className="text-red-600">
                        {hotel.black_price}
                      </strike>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Card;
