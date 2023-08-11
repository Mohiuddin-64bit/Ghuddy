import React from 'react';
import { IoIosCash } from "react-icons/io";

const DiscountBar = ({props}) => {
  return (
    <div className='bg-red-600 flex gap-1 text-white items-center top-0 left-0 p-1 rounded-lg'>
      <IoIosCash></IoIosCash>
      {-props.toFixed(0)} % <span className='bg-white px-1 text-red-500 rounded-lg'>Deal!</span>
    </div>
  );  
};

export default DiscountBar;