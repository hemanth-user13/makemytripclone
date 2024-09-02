import React from "react";
import Card from "../../Helpers/OfferCard";

const TrainCard = () => {
  const handleBookNowClick = () => {
    console.log("railway button is clciked!");
  };
  return (
    <div>
      <Card
        imageSrc="https://logos-world.net/wp-content/uploads/2020/11/IRCTC-Logo.png"
        title="HYD ----> GOA"
        description="YEAR-END RAILWAY BOOKINGS OPEN"
        subDescription="Book by paying 25% of the fare* with our Seat Lock feature!"
        buttonText="BOOK NOW"
        onButtonClick={handleBookNowClick}
        termsText="T&C's Apply"
      />
    </div>
  );
};

export default TrainCard;
