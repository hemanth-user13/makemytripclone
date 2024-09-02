import React from "react";

interface TrainBookingImageProps {
  imageSrc: string;
  title: string;
  description: string;
  subDescription: string;
  buttonText: string;
  onButtonClick: () => void;
  termsText: string;
}

const TrainBookingImage: React.FC<TrainBookingImageProps> = ({
  imageSrc,
  title,
  description,
  subDescription,
  buttonText,
  onButtonClick,
  termsText,
}) => {
  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className=" flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-auto h-52 object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="w-1/2 p-6 flex flex-col justify-between ml-52">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 mt-2">{description}</p>
          <p className="text-sm text-gray-500 mt-4">{subDescription}</p>
        </div>
        <div className="mt-4">
          <button
            className="bg-green-600 text-white py-2 px-4 rounded"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
          <p className="text-xs text-gray-400 mt-2">{termsText}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainBookingImage;
