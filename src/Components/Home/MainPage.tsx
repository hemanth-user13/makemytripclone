import NavBar from "../Header/NavBar";
import Categories from "./Categories";
import FlightLayout from "../Pages/Flights/FlightTicket";
import OffersPage from "./Offers";
import FlagShipHotels from "./Advertising/FlagShipHotels";
import Brands from "./Advertising/Brands";
import MobileApp from "./Advertising/mobileApp";
import HandPickCollection from "./Advertising/HandpickCollections";
import AllWonders from "./Advertising/WondersofIndia";
import Footer1 from "../Footer/Footer1";
import Footer2 from "../Footer/Footer2";
import Footer3 from "../Footer/Footer3";
import Navbar from "../Header/Navbar1";

const MainPage = () => {
  return (
    <>
    <Navbar/>
      <div className="relative">
        <NavBar />
        
        <Categories styles="absolute inset-x-0 top-1/3 transform -translate-y-1/2" />
        <div
          className="absolute inset-x-0 top-3/4 transform -translate-y-1/2"
          style={{ position: "absolute", top: "420px" }}
        >
          <FlightLayout />
        </div>
      </div>
      <div>
        <OffersPage />
      </div>
      <div>
        <FlagShipHotels />
      </div>
      <div className="my-8">
        <Brands />
      </div>
      <div className="my-10">
        <MobileApp />
      </div>
      <div className="my-9">
        <HandPickCollection />
      </div>
      <div className="my-9">
        <AllWonders />
      </div>
      <div>
        <Footer1 />
      </div>
      <div>
        <Footer2 />
      </div>
      <div>
        <Footer3 />
      </div>
    </>
  );
};

export default MainPage;
