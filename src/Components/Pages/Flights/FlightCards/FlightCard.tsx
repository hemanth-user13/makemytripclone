import React from "react";
import { FlightCardProps } from './type';

const FlightCard: React.FC<FlightCardProps> = ({
  flight_date,
  flight_status,
  departure,
  arrival,
  airline,
  flight,
  onButtonClick,
  buttonText


}) => {
  return (
   <div>
     <div className="flex bg-white shadow-lg rounded-lg mb-4 ">
      <div className="flex items-center justify-center">
        <img
          src="https://www.gstatic.com/flights/airline_logos/70px/multi.png"
          alt="Flight"
          className=""
        />
        <div className="w-auto h-60 p-6 flex flex-col justify-between ml-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{flight_date}</h2>
            <p className="text-lg text-gray-600 mt-2">{flight_status}</p>
            <p className="text-lg text-gray-600 mt-2">{arrival.timezone}</p>
            <p className="text-lg text-gray-600 mt-2">{airline.name}</p>
            <p className="text-lg text-gray-600 mt-2">{flight.number}</p>
            <p className="text-sm text-gray-500 mt-4">{departure.scheduled}</p>
            <button
            className="bg-green-600 text-white py-2 px-4 rounded  " style={{position:"absolute",left:"460px",top:"180px"}}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
          </div>
          
        </div>
      </div>
    </div>
   </div>
  );
};

export default FlightCard;
