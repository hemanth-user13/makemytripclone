import React, { useEffect, useState } from "react";
import axios from "axios";
import FlightCard from "./FlightCard";
import { FlightCardProps } from "./type";
import Carousel, { CarouselItem } from "../../../Helpers/OffersCurosel";
import Card from "../../../Helpers/OfferCard";

const FlightsData = () => {
  const [flights, setFlights] = useState<FlightCardProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const FLIGHT_URL = "http://localhost:8003/flight";

  const handleBookNowClick = () => {
    console.log("Flight button is clicked!");
  };

  const fetchFlightsData = async () => {
    try {
      const response = await axios.get(FLIGHT_URL);
      setFlights(response.data);
      setError(null);
    } catch (error) {
      console.error("There is an error in the API", error);
      setError("Unable to fetch flights data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchFlightsData();
  }, []);

  const result = flights[0]?.data || [];

  const carouselItems: CarouselItem[] = result.map((item, index) => ({
    id: index,
    content: (
      <FlightCard
        flight_date={item.flight_date}
        flight_status={item.flight_status}
        departure={item.departure}
        arrival={item.arrival}
        airline={item.airline}
        flight={item.flight}
      />
    ),
  }));

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {carouselItems.length > 0 ? (
        <Carousel items={carouselItems} visibleItems={3} />
      ) : (
        <p>There is no data</p>
      )}
      
    </div>
  );
};

export default FlightsData;
