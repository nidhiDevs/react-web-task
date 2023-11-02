// BanquetList.js

import React, { useState } from "react";
import BanquetCard from "./BanquetCard"; // Import your BanquetCard component

const BanquetList = ({ banquetData,setopen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBanquets, setFilteredBanquets] = useState(banquetData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = banquetData.filter((banquet) =>
      banquet.location.toLowerCase().includes(term)
    );
    setFilteredBanquets(filtered);
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage:
            'url("https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="my-2 text-white relative">
          <h1 className="text-5xl font-semibold mb-4 pt-36">
            Book a Banquet Hall
          </h1>
          <input
            type="text"
            placeholder="Search by location"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 text-gray-900 outline-none focus:border-gray-400 rounded w-[100%]"
          />
        </div>
        <div className="">
          <button onClick={setopen}>Open Modal</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6 p-4">
        {filteredBanquets.map((banquet) => (
          <BanquetCard key={banquet.id} banquet={banquet} />
        ))}
      </div>
    </div>
  );
};

export default BanquetList;
