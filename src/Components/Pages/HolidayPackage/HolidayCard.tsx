import React from "react";
import Card from "../../Helpers/OfferCard";

const HolidayCard = () => {
  const handleBookNowClick = () => {
    console.log("Holiday button is clciked!");
  };
  return (
    <div>
      <Card
        imageSrc="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/2016072005194324962-2e9781f0f3f611ea96bb0242ac110004.jpg?&output-quality=75&downsize=243:162&output-format=webp"
        title="Goa Hotel"
        description="YEAR-END HOTEL PACKAGES BOOKINGS OPEN"
        subDescription="Book by paying 25% of the fare* with our Seat Lock feature!"
        buttonText="BOOK NOW"
        onButtonClick={handleBookNowClick}
        termsText="T&C's Apply"
      />
    </div>
  );
};

export default HolidayCard;
