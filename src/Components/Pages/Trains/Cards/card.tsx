import React from "react";
import { TrainDataProps } from "../type";
import './card.css'

const TrainCard: React.FC<TrainDataProps> = ({
  trainName,
  departure,
  arrival,
  date,
  price,
  imageURL,
  onButtonClick,
  buttonText,
}) => {
  return (
   <div className="cardlayout">
     <div className="bg-white shadow-lg rounded-lg mb-4 overflow-hidden">
      <div className="flex">
        <img
          src={imageURL}
          alt="Train"
          className="w-1/3 h-full object-cover"
        />
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{trainName}</h2>
            <p className="text-lg text-gray-600 mt-2">{date}</p>
            <p className="text-lg text-gray-600 mt-2">{arrival}</p>
            <p className="text-lg text-gray-600 mt-2">{departure}</p>
            <p className="text-sm text-gray-500 mt-4">{price}</p>
          </div>
          <div className="mt-4">
            <button
              className="bg-green-600 text-white py-2 px-4 rounded"
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

export default TrainCard;
