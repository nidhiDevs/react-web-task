// BanquetList.js

import React, { useState } from "react";
import BanquetCard from "./BanquetCard"; // Import your BanquetCard component

const BanquetList = ({ banquetData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBanquets, setFilteredBanquets] = useState(banquetData);
  const[currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = banquetData.filter((banquet) =>
      banquet.location.toLowerCase().includes(term)
    );
    setFilteredBanquets(filtered);
    setCurrentPage(1);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredBanquets.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
        {/* <div className="">
          <button onClick={setopen}>Open Modal</button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6 p-4">
        {filteredBanquets.slice(startIndex,endIndex).map((banquet) => (
          <BanquetCard key={banquet.id} banquet={banquet} />
        ))}
      </div>
      <div>
         <div>
                <button onClick={prevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <h1>{}</h1>
                <button
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredBanquets.length / itemsPerPage)
                  }
                >
                  Next
                </button>
                {/* <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={endIndex >= filteredBanquets.length}
          >next</button> */}
              </div>
      </div>
    </div>
  );
};

export default BanquetList;
