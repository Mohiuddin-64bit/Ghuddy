import React from "react";
import HeartButton from "../Buttons/HeartButton";
import { VscLocation, VscHome, VscStarFull } from "react-icons/vsc";
import DiscountBar from "../Buttons/DiscountBar";

const Card = ({ hotel }) => {
  const {
    images,
    property_name,
    id,
    class_rating,
    short_address,
    display_facilities,
    black_price,
    red_price,
    discount_percent,
    property_tag,
  } = hotel;

  return (
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
            src={images[0]}
            alt="Room"
          />
          <div className="absolute top-3 left-3">
            <DiscountBar props={discount_percent}></DiscountBar>
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
            <div className="font-semibold text-[16px]">{property_name}</div>
            <div className="flex items-center gap-1">
              <VscStarFull></VscStarFull>
              {class_rating}
            </div>
          </div>
          <div className="pt-2 flex gap-1 text-sm items-center">
            <VscLocation></VscLocation>
            {short_address.slice(0, 40)}
          </div>
          <div className="flex pt-2 gap-1">
            <div>
              <VscHome />
            </div>
            <div className=" text-sm">
              {display_facilities.slice(0, 5).map((facility, index) => (
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
              {red_price.toFixed(0)} BDT
            </div>
            <strike>{black_price}</strike>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
