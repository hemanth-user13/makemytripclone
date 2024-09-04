import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface CarouselItem {
  id: number;
  content: React.ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  visibleItems?: number;
  itemWidth?: number;
  itemGap?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  visibleItems = 3,
  itemWidth = 300,
  itemGap = 16,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
                className="relative flex-shrink-0"
                style={{ width: itemWidth, marginRight: itemGap }}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
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
  );
};

export default Carousel;
