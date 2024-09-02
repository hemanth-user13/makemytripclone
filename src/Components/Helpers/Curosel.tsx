import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselItem {
  id: number;
  image: string;
  description: string;
}

interface CarouselProps {
  title: string;
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 5;
  const itemWidth = 300;
  const itemGap = 16;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(items.length - visibleItems, 0) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative bg-white shadow-lg rounded-lg p-4 border border-gray-300 max-w-6xl">
        {/* Header with Title and Buttons */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-serif font-bold text-3xl text-gray-800 my-0">
            {title}
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-white text-blue-500 p-3 rounded-full border border-blue-500 focus:outline-none z-10 hover:opacity-70 transition-opacity duration-300"
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="bg-white text-blue-500 p-3 rounded-full border border-blue-500 focus:outline-none z-10 hover:opacity-70 transition-opacity duration-300"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <div
            className="flex overflow-hidden"
            style={{
              width: "100%",
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(itemWidth + itemGap) * items.length}px`,
                transform: `translateX(-${
                  currentIndex * (itemWidth + itemGap)
                }px)`,
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="relative flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
                  style={{ width: itemWidth, marginRight: itemGap }}
                >
                  <div className="absolute inset-0 bg-gray-500 opacity-20 rounded-md -z-10" />

                  <div className="relative">
                    <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-tr-md rounded-bl-md z-20">
                      Top-One
                    </div>
                    <img
                      src={item.image}
                      alt={`Item ${item.id}`}
                      className="w-full h-[300px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold rounded-b-md bg-gradient-to-t from-black via-transparent">
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
