import AllRoutes from "./Components/AllRoutes/router";
import "./App.css";
// import Test from './test';
// import { Userid } from "./Components/User/UserLogin";
// import Test from './Components/other/Ondragndrop'

function App() {
  // console.log("the parent level user id is",Userid)
  return (
    <>
    <div className="bg-gray-100">
      <AllRoutes />
      {/* <Test/> */}
    </div>
    </>
  );
}

export default App;
