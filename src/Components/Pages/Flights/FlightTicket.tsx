import { FaArrowRight } from "react-icons/fa";
import RadioButtons from "../../Helpers/RadioButtons";
import DatePicker from "../../Helpers/Datepicker";
import TravelDropDown from "../../Helpers/DropDown";
import SearchButton from "../../Helpers/SearchButton";
import DestinationModule from "../../Helpers/Destination";
import { useState } from "react";

const FlightBookingForm = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
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
              value="Delhi"
              description="DEL, Delhi Airport India"
            />
            <FaArrowRight className="text-blue-500 text-3xl" />
            <DestinationModule
              label="To:"
              id="to"
              value="Bengaluru"
              description="BLR, Bengaluru Airport India"
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
