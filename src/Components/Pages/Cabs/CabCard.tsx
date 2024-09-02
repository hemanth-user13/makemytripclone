import React from "react";
import Card from "../../Helpers/OfferCard";

const CabCard = () => {
  const handleBookNowClick = () => {
    console.log("railway button is clciked!");
  };
  return (
    <div>
      <Card
        imageSrc="data:image/jpeg;base64,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"
        title="TEST ------> TEST1"
        description="YEAR-END RAILWAY BOOKINGS OPEN"
        subDescription="Book by paying 25% of the fare* with our Seat Lock feature!"
        buttonText="BOOK NOW"
        onButtonClick={handleBookNowClick}
        termsText="T&C's Apply"
      />
    </div>
  );
};

export default CabCard;