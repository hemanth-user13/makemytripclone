import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const brands = [
  {
    id: 1,
    brand_img:
      "https://promos.makemytrip.com/Growth/Images/B2C/Uncompressed/Artboard_travRep.png",
    description: "Latest travel trends and tips from our Travel Reporter.",
  },
  {
    id: 2,
    brand_img:
      "https://promos.makemytrip.com/Growth/Images/B2C/xhdpi/ic_whatsnew_flight.png",
    description: "Book flights at unbeatable prices for seamless travel.",
  },
  {
    id: 3,
    brand_img:
      "https://promos.makemytrip.com/images/CDN_upload/indiannessapphome2.png",
    description:
      "Explore India's rich cultural heritage with curated packages.",
  },
  {
    id: 4,
    brand_img:
      "https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png",
    description: "Hassle-free international travel with Vande Bharat flights.",
  },
  {
    id: 5,
    brand_img:
      "https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png",
    description: "Multiple languages for an easier booking experience.",
  },
  {
    id: 6,
    brand_img: "https://tripmoneycmsimgak.mmtcdn.com/img/RIL_1_468ef5d7a7.png",
    description: "Best financial deals for your travel plans with TripMoney.",
  },
  {
    id: 7,
    brand_img: "https://tripmoneycmsimgak.mmtcdn.com/img/abhi_1_223c8a2989.png",
    description: "Affordable insurance plans for secure travel bookings.",
  },
  {
    id: 8,
    brand_img: "https://tripmoneycmsimgak.mmtcdn.com/img/Acko_1_a95a85f8c1.png",
    description: "Comprehensive travel insurance from Acko for peace of mind.",
  },
  {
    id: 9,
    brand_img:
      "https://tripmoneycmsimgak.mmtcdn.com/img/AA_70x70_bb9ca3d36b.jpg",
    description: "Top-notch customer service with our trusted partners.",
  },
  {
    id: 10,
    brand_img:
      "https://tripmoneycmsimgak.mmtcdn.com/img/Travel_Guard_Icon_02_97a71bc27f.png",
    description: "Travel Guard’s insurance coverage to protect your trip.",
  },
];

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === brands.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex flex-col items-center  ">
      <div className="w-full flex items-center justify-between mb-4 px-6">
        <h3 className="font-serif font-bold text-3xl text-gray-800 my-0 " style={{marginLeft:"350px"}}>
          Featured Brands
        </h3>
        <div className="flex space-x-2" style={{marginRight:"350px"}}>
          <button
            onClick={handlePrev}
            className="bg-transparent text-blue-500 p-3 rounded-full border border-blue-500 focus:outline-none transition-opacity duration-300 hover:opacity-70 z-10"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="bg-transparent text-blue-500 p-3 rounded-full border border-blue-500 focus:outline-none transition-opacity duration-300 hover:opacity-70 z-10"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        className="relative p-6 overflow-hidden"
        style={{ width: "63%", height: "auto",marginRight:"40px" }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white flex-shrink-0 flex flex-row items-center p-4 border border-slate-200 rounded-md mx-2"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <img
                src={brand.brand_img}
                alt={`Brand ${brand.id}`}
                className="w-1/4 h-full object-cover rounded-md"
              />
              <div className="ml-4">
                <p className="text-sm font-semibold text-gray-800">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
