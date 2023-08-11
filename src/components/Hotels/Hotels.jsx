import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../Shared/container";
import Card from "./Card";
import Taste from "../Taste";

const Hotels = ({ selectedCategory }) => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const apiUrl =
      selectedCategory !== null
        ? `https://dev.ghuddy.link/api/v1/open/hotels?propertyType=${selectedCategory}`
        : "https://dev.ghuddy.link/api/v1/open/hotels";

    axios(apiUrl)
      .then((res) => {
        setHotels(res.data.esHotelCardList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCategory]);

  return (

      <div className="pt-12 ">
        <Card hotels={hotels} key={hotels.id} />
      </div>

  );
};

export default Hotels;
