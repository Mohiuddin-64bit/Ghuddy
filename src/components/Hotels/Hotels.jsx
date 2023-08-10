import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from '../Shared/container';
import Card from './Card';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios("https://dev.ghuddy.link/api/v1/open/hotels")
      .then(res => {
        setHotels(res.data.esHotelCardList);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      <div className='pt-12 gap-8 grid lg:grid-cols-3 '>
      {hotels.map(hotel => (
        <Card hotel={hotel} key={hotel.id}></Card>
      ))}
      </div>
    </Container>
  );
};

export default Hotels;
