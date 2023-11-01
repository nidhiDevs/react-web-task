import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { themeColors } from "./theme";
import { topCitiesInIndia } from "./constants";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    
    setIsModalOpen(false);
  };
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
            className="w-full py-2 pl-4 pr-12 rounded-full focus:outline-none"
            placeholder="Search City..."
          />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 p-4">
            <div>
              <h1 style={{ color: themeColors.primary, fontWeight: "bold" }}>
                Top Cities
              </h1>
              {topCitiesInIndia.slice(0,6).map((city) => (
                <div key={city.id}>{city.name}</div>
              ))}
            </div>
            <div>Popular Cities</div>
            <div>Other Cities</div>
            <div>International Cities</div>
          </div>
        </div>
      </Modal>

      <Main />
    </div>
  );
}

export default App;
