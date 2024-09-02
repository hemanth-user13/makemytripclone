import React from "react";
import Card from "../../Helpers/OfferCard";

const FlightsData = () => {
  const handleBookNowClick = () => {
    console.log("flight button is clciked!");
  };
  return (
    <div>
      <Card
        imageSrc="https://www.gstatic.com/flights/airline_logos/70px/multi.png"
        title="Flights"
        description="YEAR-END FLIGHT BOOKINGS OPEN"
        subDescription="Book by paying 25% of the fare* with our Seat Lock feature!"
        buttonText="BOOK NOW"
        onButtonClick={handleBookNowClick}
        termsText="T&C's Apply"
      />
    </div>
  );
};

export default FlightsData;
