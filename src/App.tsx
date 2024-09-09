
import AllRoutes from "./Components/AllRoutes/router";
import "./App.css";
import UserLogin from "./Components/User/UserLogin";
// import Test from './test'
// import { useState } from "react";

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <UserLogin />
      <div className="bg-gray-100">
        <AllRoutes />
      </div>
      {/* {isModalOpen &&(
        <Test
        isOpen={isModalOpen}
        onClose={()=>setIsModalOpen(false)}
        initialData={{
          firtName:'',
          lastName:'',
          mobileNumber:'',
          email:'',
          address:'',
          pincode:''
        }}
        />
      )} */}
    </>
  );
}

export default App;