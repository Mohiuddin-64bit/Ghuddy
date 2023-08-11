import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import axios from "axios";
import { VscLocation, VscHome, VscStarFull } from "react-icons/vsc";
import Container from "./Shared/container";
import DiscountBar from "./Buttons/DiscountBar";
import HeartButton from "./Buttons/HeartButton";

const Taste = ({hotels}) => {
  // const [hotels, setHotels] = useState([]);
  // useEffect(() => {
  //   axios("https://dev.ghuddy.link/api/v1/open/hotels")
  //     .then((res) => {
  //       setHotels(res.data.esHotelCardList);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {hotels.map((hotel) => (
          <SwiperSlide key={hotel.id}>
            <div className=" w-full cursor-pointer group">
              <div className="flex flex-col bg-[#ffffff] rounded-xl h-full w-full">
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
                    className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                    src={hotel.images[0]}
                    alt="Room"
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
                <div className="px-4 pt-3 ">
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
                      {hotel.display_facilities.slice(0, 5).map((facility, index) => (
                        <React.Fragment key={facility.name}>
                          {facility.name}
                          {index < 4 ? ", " : ""}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-center my-2">Checkout Price:</h3>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="font-semibold text-center">
                      {hotel.red_price.toFixed(0)} BDT
                    </div>
                    <strike>{hotel.black_price}</strike>
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

export default Taste;
