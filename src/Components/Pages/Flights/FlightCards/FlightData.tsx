import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FlightCard from "./FlightCard";
// import { FlightCardProps } from "./type";
import { AppDispatch, RootState } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlightData } from "../FlightSlice";

const FlightsCarousel: React.FC = () => {
  const visibleItems = 5;
  const itemWidth = 600;
  const itemGap = 16;
  
  const dispatch: AppDispatch = useDispatch();

  
  const { data: flights, error } = useSelector(
    (state: RootState) => state.flights
  );


  console.log(flights)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchFlightData());
  }, [dispatch]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(flights.length - visibleItems, 0) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flights.length - visibleItems ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative p-4 border max-w-6xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2" style={{ marginLeft: "990px" }}>
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

        {error && <p className="text-red-500">{error}</p>}

        <div className="relative w-full">
          <div className="flex overflow-hidden" style={{ width: "100%" }}>
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(itemWidth + itemGap) * flights.length}px`,
                transform: `translateX(-${currentIndex * (itemWidth + itemGap)}px)`,
              }}
            >
              {flights.map((flight, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
                  style={{ width: itemWidth, marginRight: itemGap }}
                >
                  <FlightCard
                    flight_date={flight.flight_date}
                    flight_status={flight.flight_status}
                    departure={flight.departure}
                    arrival={flight.arrival}
                    airline={flight.airline}
                    flight={flight.flight}
                    onButtonClick={() => console.log("hi your flight is booked")}
                    buttonText="Book Flight"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {!error && flights.length === 0 && (
          <p className="text-center text-4xl text-red-500">No flight data available</p>
        )}
      </div>
    </div>
  );
};

export default FlightsCarousel;
