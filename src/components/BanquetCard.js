// BanquetCard.js

import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import { FaHotel } from 'react-icons/fa';
import { BiRupee } from 'react-icons/bi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgEditBlackPoint } from 'react-icons/cg';
import { MdBedroomParent } from 'react-icons/md';


const BanquetCard = ({ banquet }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl m-4">
      <img src={banquet.image} alt={banquet.name} className="w-full rounded-xl" />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{banquet.name}</div>
        <p className="text-gray-700 text-base flex items-center gap-1"> <MdLocationOn /> {banquet.location}</p>
        <p className="text-gray-700 text-base flex items-center gap-1"><AiFillStar style={{color: "#e72e77"}} /> Rating: {banquet.rating} ({banquet.count} Reviews) </p>
        <p className="text-gray-700 text-base flex items-center gap-1"><FaHotel />Category: {banquet.category}</p>
        <p className="text-gray-700 text-base flex items-center gap-1"><CgEditBlackPoint style={{color: "green"}}/> Veg Price: {banquet.vegPrice} <BiRupee /></p>
        <p className="text-gray-700 text-base flex items-center gap-1"><CgEditBlackPoint style={{color: "#e72e77"}} /> Non-Veg Price: {banquet.nonVegPrice} <BiRupee /></p>
        <p className="text-gray-700 text-base flex items-center gap-1"><BsFillPeopleFill /> Capacity: {banquet.pax}</p>
        <p className="text-gray-700 text-base flex items-center gap-1"><MdBedroomParent /> Rooms: {banquet.rooms}</p>
      </div>
    </div>
  );
};

export default BanquetCard;
