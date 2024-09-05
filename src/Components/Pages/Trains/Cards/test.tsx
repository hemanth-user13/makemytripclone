import React from "react";
import { TrainDataProps } from "../type";

const TrainCard: React.FC<TrainDataProps> = ({
  trainName,
  departure,
  arrival,
  date,
  duration,
  price,
  imageURL,
  onButtonClick,
  buttonText,
  onchange
}) => {
  return (
    <div className="cardlayout">
    <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex">
        <img
          src={imageURL}
          alt="Train"
          className="w-1/3 h-48 object-cover border-r border-gray-200"
        />
        <div className="w-2/3 p-6 flex flex-col justify-between bg-gray-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{trainName}</h2>
            <p className="text-lg text-gray-600 mb-1">Date: {date}</p>
            <p className="text-lg text-gray-600 mb-1">Arrival: {arrival}</p>
            <p className="text-lg text-gray-600 mb-1">Departure: {departure}</p>
            <p className="text-sm text-gray-500 mt-4">Price: {price}</p>
            <p className="text-sm text-gray-500 mt-1">Duration: {duration}</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button
              className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white py-2 px-4 rounded-md shadow-md transition-transform transform hover:scale-105 hover:opacity-90 focus:outline-none"
              onClick={onButtonClick}
              onMouseEnter={onchange}
            >
              {buttonText}
            </button>
            <img
              src="https://promos.makemytrip.com/Growth/Images/B2C/dt_app_download_qr.png"
              alt="QR Code"
              className="w-16 h-16"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrainCard;
