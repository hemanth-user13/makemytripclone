// import { useDispatch, useSelector } from "react-redux"
// import { RootState } from "../../../store"
// import { useEffect } from "react";
// import { fetchFlightData } from "../../Pages/Flights/FlightSlice";
// import FlightCard from "../../Pages/Flights/FlightCards/FlightCard";
import FlightData from '../../Pages/Flights/FlightCards/FlightData'


const Alloffers = () => {
  // const dispatch: AppDispatch = useDispatch();
  // const {data:flights}=useSelector((state:RootState)=>state.flights)
  // useEffect(() => {
  //   dispatch(fetchFlightData());
  // }, [dispatch]);

  // console.log("the data in all offers section is",flights)
  return (
    <div>
     <FlightData/>
    </div>
  )
}

export default Alloffers
