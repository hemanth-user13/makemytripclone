import React from "react";
import { TrainDataProps } from "../type";


const FlightCard: React.FC<TrainDataProps> = ({
    trainName,
    departure,
    arrival,
    date,
    price,
    imageURL,
    // onButtonClick,
    // buttonText


}) => {
  return (
   <div>
     <div className="flex bg-white shadow-lg rounded-lg mb-4 ">
      <div className="flex items-center justify-center">
        <img
          src={imageURL}
          alt="Train"
          className=""
        />
        <div className="w-auto h-60 p-6 flex flex-col justify-between ml-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{trainName}</h2>
            <p className="text-lg text-gray-600 mt-2">{date}</p>
            <p className="text-lg text-gray-600 mt-2">{arrival}</p>
            <p className="text-lg text-gray-600 mt-2">{departure}</p>
            {/* <p className="text-lg text-gray-600 mt-2">{flight.number}</p> */}
            <p className="text-sm text-gray-500 mt-4">{price}</p>
            {/* <button
            className="bg-green-600 text-white py-2 px-4 rounded  " style={{position:"absolute",left:"460px",top:"180px"}}
            // onClick={onButtonClick}
          >
            Book Now
          </button> */}
          </div>
          
        </div>
      </div>
    </div>
   </div>
  );
};

export default FlightCard;
