import { FlightIcon, Hotel, Homestay, Holiday, Trains, Buses, Cabs, Insurance } from "../Home/Categories";

const Navbar = () => {
 
  return (
    <div>
      <div
      className="fixed top-0 w-full bg-white transition-transform duration-300 ease-in-out z-50 
        translate-y-0 "
      
    >
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-3">
        <div className="flex items-center w-full md:w-auto">
          <a href="/" className="block w-32">
            <img
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
              alt="Logo"
              className="w-full h-auto"
            />
          </a>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-12 mt-4 md:mt-0">
          <FlightIcon />
          <Hotel />
          <Homestay />
          <Holiday />
          <Trains />
          <Buses />
          <Cabs />
          <Insurance />
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
