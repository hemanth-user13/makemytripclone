import React from "react";

const MobileApp = () => {
  const handleAppClick=()=>{
    console.log("the app link is ready")
  }
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white shadow-lg rounded-lg p-10 border border-gray-300 max-w-6xl h-56"
        style={{ width: "95%" }}
      >
        <div className="flex flex-row h-full items-center justify-between">
          <div className="flex flex-col justify-center w-1/2 pr-8">
            <h3 className="font-serif font-bold text-2xl leading-snug text-left text-gray-800">
              Download App Now! <br />
            </h3>
            <span className="text-gray-600">
              Use code <strong>WELCOMEMMT</strong> and get{" "}
              <strong>FLAT 12% OFF*</strong> on your first domestic flight
              booking
            </span>
            <div className="flex items-center mt-4">
              <img
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_mmt_ui_assets/in_v2.webp"
                alt="App download"
                className="w-16 h-16 object-contain mr-4"
              />
              <div className="flex items-center border border-gray-300 rounded-md p-2 flex-grow">
                <span className="text-gray-800 mr-2">+91</span>
                <input
                  type="number"
                  placeholder="Enter your number"
                  className="outline-none w-full"
                />
              </div>
              <button
                type="button"
                className="ml-4 text-blue-600 font-bold border border-blue-600 rounded-md"
                onClick={handleAppClick}
              >
                Get App Link
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center w-1/2 ml-3">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="Google Play"
              className="mb-2"
              width="150"
              height="auto"
            />
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="Apple Store"
              width="150"
              height="auto"
            />
          </div>
          <div>
            <img
              src="https://promos.makemytrip.com/Growth/Images/B2C/dt_app_download_qr.png"
              alt="QR Code"
              width="220px"
              height="210px"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
