import MainPage from "../Home/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hotels from "../Pages/Hotels/HotelLayout";
import HomeStays from "../Pages/Homestays/Homestay";
import HolidayPackage from "../Pages/HolidayPackage/HolidayLayout";
import Trains from "../Pages/Trains/TransLayout";
import Buses from "../Pages/Buses/BusesLayout";
import Cabs from "../Pages/Cabs/CabsLayout";
import Insurance from "../Pages/TravelInsurance/TravelInsurance";
import FlightPage from "../Pages/Flights/FlightPage";
import TrainPage from '../Pages/Trains/TrainPage';
import InsurancePage from '../other/Ondragndrop'



function router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/fightspage" element={<FlightPage/>}/>
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/Holidaypackage" element={<HolidayPackage />} />
          <Route path="/homestays" element={<HomeStays />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/trainpage" element={<TrainPage/>}/>
          <Route path="/buses" element={<Buses />} />
          <Route path="/cabs" element={<Cabs />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/ondragndrop" element={<InsurancePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default router;
