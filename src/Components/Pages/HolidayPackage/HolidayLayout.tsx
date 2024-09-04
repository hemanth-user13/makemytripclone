import Categories from "../../Home/Categories";
import NavBar from "../../Header/NavBar";
import Footer1 from "../../Footer/Footer1";
import Footer2 from "../../Footer/Footer2";
import Footer3 from "../../Footer/Footer3";
import NavBar1 from '../../Header/Navbar1';
import Holiday from './Holiday';

function HalidayPackage() {
  return (
   <>
   <NavBar1/>
    <div className="relative min-h-screen bg-gray-100">
      <NavBar />
      <div className="absolute inset-x-0 top-32 flex justify-center">
        <Categories styles="mx-auto" />
      </div>
      <div className="absolute inset-x-0 top-48 ">
        <Holiday/>
      </div>
      <div className="mt-56">
        <Footer1 />
      </div>
      <div>
        <Footer2 />
      </div>
      <div>
        <Footer3 />
      </div>
    </div>
   </>
  );
}

export default HalidayPackage;
