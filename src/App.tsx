
import AllRoutes from "./Components/AllRoutes/router";
import "./App.css";
import UserLogin from "./Components/User/UserLogin";

function App() {
  return (
    <>
      <UserLogin />
      <div className="bg-gray-100">
        <AllRoutes />
      </div>
    </>
  );
}

export default App;