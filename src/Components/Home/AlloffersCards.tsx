import React from "react";
import Carousel from "../Helpers/Curosel";
import FLightcard from "../Pages/Flights/FlightCards/FlightData";
import HotelsCard from "../Pages/Hotels/Hotelcard";
import HolidayCard from "../Pages/HolidayPackage/HolidayCard";
import TrainsCard from "../Pages/Trains/TrainCard";
import CabCard from "../Pages/Cabs/CabCard";

const AlloffersCards = () => {
  const cardComponents = [
    <FLightcard key="flight" />,
    <HotelsCard key="hotel" />,
    <HolidayCard key="holiday" />,
    <TrainsCard key="train" />,
    <CabCard key="cab" />,
  ];

  const carouselItems = cardComponents.map((card, index) => ({
    id: index,
    image: "",
    description: card,
  }));

  return (
    <div className="p-4">
      <Carousel
        title="Our Offers"
        items={carouselItems}
        visibleItems={3} 
      />
    </div>
  );
};

export default AlloffersCards;
