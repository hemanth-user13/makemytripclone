import React from "react";
import Carousel from "../Helpers/Curosel";
import FLightcard from "../Pages/Flights/FlightCard";
import HotelsCard from "../Pages/Hotels/Hotelcard";
import HolidayCard from "../Pages/HolidayPackage/HolidayCard";
import TrainsCard from "../Pages/Trains/TrainCard";
import CabCard from "../Pages/Cabs/CabCard";

const AlloffersCards = () => {
  // Create an array of card components
  const cardComponents = [
    <FLightcard key="flight" />,
    <HotelsCard key="hotel" />,
    <HolidayCard key="holiday" />,
    <TrainsCard key="train" />,
    <CabCard key="cab" />,
  ];

  // Map card components to a format compatible with the Carousel
  const carouselItems = cardComponents.map((card, index) => ({
    id: index,
    image: "", // You can use placeholder images or remove if not needed
    description: card,
  }));

  return (
    <div className="p-4">
      <Carousel
        title="Our Offers"
        items={carouselItems}
        visibleItems={3} // Adjust based on the number of visible items
      />
    </div>
  );
};

export default AlloffersCards;
