import RadioButtons from "../../Helpers/RadioButtons";
import DatePicker from "../../Helpers/Datepicker";
import TravelDropDown from "../../Helpers/DropDown";
import SearchButton from "../../Helpers/SearchButton";
import DestinationModule from "../../Helpers/Destination";
import { StartModuleProps,DestinationModuleProps } from "./types";
import { FaExchangeAlt } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";



const FlightBookingForm = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const [startModule,setStartModule]=useState<StartModuleProps[]>([]);
  const [desModule,setDesModule]=useState<DestinationModuleProps[]>([])
  const [Error,SetError]=useState(false)

  /// api call for destination and start module
  const START_MODULE="http://localhost:8003/StartModule"
  const DESTINATION_MODULE="http://localhost:8003/destinationModule"
  const Startmodule=async()=>{
   try {
    const response=await axios.get(START_MODULE)
    // console.log("the start data is",response)
    setStartModule(response.data)
    SetError(false)
   } catch (error) {
    console.log(error,"there is error in the api")
    SetError(true)
    
   }
  }

  const Destinationmodule=async()=>{
    try {
      const response=await axios.get(DESTINATION_MODULE);
    // console.log("the destination data is",response)
    setDesModule(response.data)
    SetError(false)
    } catch (error) {
      console.log(error,"there is an error in the api")
      SetError(true)
    }
  }

  useEffect(()=>{
    Startmodule()
    Destinationmodule()
  },[])


  // const filterStartData=[...startModule]
  // console.log(filterStartData[0])
  const FirstStartRecord=()=>{
    if(Array.isArray(startModule) && startModule.length>0){
      const firstRecord=startModule[0]
      console.log(firstRecord)
      return firstRecord
    }
    else{ 
      console.error("the given data is not a array of objects")
      return null
    }
  }
  FirstStartRecord()


  const FirstDestRecord=()=>{
    if(Array.isArray(desModule) && desModule.length>0){
      const firstRecord=desModule[0]
      console.log(firstRecord)
      return firstRecord
    }
    else{
      console.error("the given data is not a array of objects")
    }
  }

  FirstDestRecord()
  const travellersOptions = [
    { value: "1", label: "1 Traveller" },
    { value: "2", label: "2 Travellers" },
    { value: "3", label: "3 Travellers" },
  ];

  const classOptions = [
    { value: "economy", label: "Economy" },
    { value: "premiumEconomy", label: "Premium Economy" },
    { value: "business", label: "Business" },
  ];

  const handleTravellersChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("Selected Travellers:", event.target.value);
  };

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected Class:", event.target.value);
  };

  const handleSearch=()=>{
    console.log("the Search Button is Clicked")
  }

  return (
    <div
      className="absolute inset-x-0 top-0 transform -translate-y-1/2 mx-auto w-full max-w-6xl p-4"
      style={{ position: "absolute", top: "-12px" }}
    >
      <div className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200">
        <h2 className="text-3xl font-serif">Book Your Flight Ticket</h2>
        <div className="flex flex-col items-start py-12">
          <div className="flex flex-wrap justify-center gap-2">
            <RadioButtons
              id="student"
              name="specialFare"
              value="student"
              label="Student Fare"
            />
            <RadioButtons
              id="roundTrip"
              name="specialFare"
              value="roundTrip"
              label="Round Trip"
            />
            <RadioButtons
              id="multiCity"
              name="specialFare"
              value="multiCity"
              label="Multi City"
            />

            <label className="flex ml-auto">
              Book International and Domestic Flights
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <DestinationModule
              label="From:"
              id="from"
              value={FirstStartRecord.fixedplace}
              description={FirstStartRecord.description}
            />
            <FaExchangeAlt className="text-blue-500 text-3xl" />
            <DestinationModule
              label="To:"
              id="to"
              value={FirstDestRecord.destination}
              description={FirstDestRecord.description}
            />
          </div>

          <div
            className="flex flex-col items-center space-x-4"
            style={{ position: "absolute",bottom:"220px",left:"850px"}}
          >
            <DatePicker
              id="datepicker-range-start"
              name="start"
              selectedDate={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select start date"
            />
            <span className="text-gray-500">to</span>
            <DatePicker
              id="datepicker-range-end"
              name="end"
              selectedDate={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Select end date"
            />
          </div>

          <div
            className="flex items-end space-x-4 "
            style={{ position: "absolute", left: "850px", bottom: "75px" }}
          >
            <TravelDropDown
              travellersOptions={travellersOptions}
              classOptions={classOptions}
              onTravellersChange={handleTravellersChange}
              onClassChange={handleClassChange}
            />
          </div>
        </div>

        <div className="text-center">
          <SearchButton buttonname="Search" onSearchClick={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;
