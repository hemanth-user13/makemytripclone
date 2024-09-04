import Categories from "../../Home/Categories";
import NavBar from "../../Header/NavBar";
import Footer1 from "../../Footer/Footer1";
import Footer2 from "../../Footer/Footer2";
import Footer3 from "../../Footer/Footer3";
import NavBar1 from '../../Header/Navbar1';
import TrainPage from './Trains';

function Trains() {
  return (
    <>
    <NavBar1/>
    <div className="relative min-h-screen bg-gray-100">
      <NavBar />
      <div className="absolute inset-x-0 top-32 flex justify-center">
        <Categories styles="mx-auto" />
      </div>
      <div className="absolute inset-x-0 top-48  ">
        <TrainPage/>
      </div>
      <div style={{marginTop:"300px"}}>
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

export default Trains;
