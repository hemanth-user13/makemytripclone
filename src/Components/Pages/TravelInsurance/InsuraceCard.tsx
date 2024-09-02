import React from "react";
import Card from "../../Helpers/OfferCard";

const InsuraceCard = () => {
  const handleBookNowClick = () => {
    console.log("Insurance button is clciked!");
  };
  return (
    <div>
      <Card
        imageSrc="data:image/png;base64,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"
        title="SBI Offered PAckages"
        description="YEAR-END RAILWAY BOOKINGS OPEN"
        subDescription="Book by paying 25% of the fare* with our Seat Lock feature!"
        buttonText="BOOK NOW"
        onButtonClick={handleBookNowClick}
        termsText="T&C's Apply"
      />
    </div>
  );
};

export default InsuraceCard;