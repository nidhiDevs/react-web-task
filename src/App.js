import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { themeColors } from "./theme";
import { otherCitiesInIndia, popularCitiesInIndia, topCitiesInIndia } from "./constants";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const[search, setSearch] = useState('');
  // const[filterSearch, setSearchFilter] = useState(popularCitiesInIndia);
  // const handleSearch =(e)=>{
  //   const search = e.target.value;
  //   setSearch(search);
  //   const filterData = popularCitiesInIndia.filter((searchByCity)=>
  //     searchByCity.name.includes(search)
  //   )
  //   setSearchFilter(filterData);   
  //   const filtered = banquetData.filter((banquet) =>
  //   banquet.location.toLowerCase().includes(term)
  // );
  // }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Search Queries

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  // filtered TopCities InIndia
  const filteredTopCitiesInIndia = topCitiesInIndia.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // filteredPopularCitiesInIndia
  const filteredPopularCitiesInIndia = popularCitiesInIndia.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // filtered OtherCities InIndia
  const filteredOtherCitiesInIndia = otherCitiesInIndia.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // filtered InterNational Cities
  const filteredInterNationalCities = internationalCities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">
      <div className="">
        <button onClick={openModal}>Open Modal</button>
      </div>
      <MyNavbar />

      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        width="1000px"
        height="500px"
      >
        <div className="flex items-center bg-white border rounded-full shadow-md mt-8">
          <div className="px-3">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            className="w-full py-2 pl-4 pr-12 rounded-full focus:outline-none"
            placeholder="Search City..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 p-4">
            <div>
              <h1 style={{ color: themeColors.primary, fontWeight: "bold" }}>
                Top Cities 344  344 355 366 377
              </h1>
              {filteredTopCitiesInIndia.slice(0, 10).map((city) => (
                <div key={city.id} className="font-normal text-gray-800">
                  {city.name}
                </div>
              ))}
            </div>
            <div
              className={`${
                filteredPopularCitiesInIndia.length === 0 ? "hidden" : ""
              }`}
            >
              <h1 style={{ color: themeColors.primary, fontWeight: "600" }}>
                Popular Cities
              </h1>

              {filteredPopularCitiesInIndia.slice(0, 10).map((city) => (
                <div key={city.id} className="font-normal text-gray-800">
                  {city.name}
                </div>
              ))}
            </div>
            <div
              className={`${
                filteredOtherCitiesInIndia.length === 0 ? "hidden" : ""
              }`}
            >
              <h1 style={{ color: themeColors.primary, fontWeight: "600" }}>
                Other Cities
              </h1>
              {filteredOtherCitiesInIndia.slice(0, 10).map((City) => (
                <div className="font-normal text-gray-800" key={City.id}>
                  {City.name}
                </div>
              ))}
            </div>
            <div
              className={`${
                filteredInterNationalCities.length === 0 ? "hidden" : ""
              }`}
            >
              <h1 style={{ color: themeColors.primary, fontWeight: "600" }}>
                International Cities
              </h1>
              {topCitiesInIndia.slice(0.10).map((city)=>(
                <div key={city.id} className="font-medium text-gray-900">{city.name}</div>
              ))}
              {/* <div>
                <button onClick={prevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filterSearch.length / itemsPerPage)
                  }
                >
                  Next
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </Modal>
      <Main  openModal={openModal}/>
    </div>
  );
}

export default App;
