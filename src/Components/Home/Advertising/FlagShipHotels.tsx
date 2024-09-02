import React from "react";

const FlagShipHotelsData = [
  {
    id: 1,
    img: "https://platforms.makemytrip.com/contents/cbdc54bb-2ca1-4904-b026-7d37369f4cfa",
  },
  {
    id: 2,
    img: "https://platforms.makemytrip.com/contents/022d9c0e-ae81-4ab2-8b8e-948d76eb421d",
  },
  {
    id: 3,
    img: "https://platforms.makemytrip.com/contents/63ef6026-1674-4e06-91f8-77d868e15bcc",
  },
];

const FlagShipHotels = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-blue-100 shadow-lg rounded-lg p-10 border border-gray-300  max-w-6xl "
        style={{ width: "95%" }}
      >
        <div className="flex flex-row h-full">
          <div className="flex flex-col justify-center w-1/2 pr-8">
            <h3 className="font-serif font-bold text-2xl leading-snug text-left text-gray-800">
              Flagship Hotel <br /> Stores on MakeMyTrip
            </h3>
          </div>

          <div className="flex flex-row justify-end  gap-4">
            {FlagShipHotelsData.map((item, index) => (
              <div key={index} className="flex">
                <img
                  className="rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl"
                  src={item.img}
                  alt="Hotel"
                  style={{
                    width: "400px",
                    height: "150px",
                    borderRadius: "25px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagShipHotels;
