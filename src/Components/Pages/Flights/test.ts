// import { FaExchangeAlt } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field } from "formik";
// import RadioButtons from "../../Helpers/RadioButtons";
// import DatePicker from "../../Helpers/Datepicker";
// import TravelDropDown from "../../Helpers/DropDown";
// import SearchButton from "../../Helpers/SearchButton";
// import DestinationModule from "../../Helpers/Destination";
// import { StartModuleProps, DestinationModuleProps } from "./types";

// const FlightBookingForm = () => {
//   const [startDate, setStartDate] = useState<Date | undefined>(undefined);
//   const [endDate, setEndDate] = useState<Date | undefined>(undefined);

//   const [startModule, setStartModule] = useState<StartModuleProps[]>([]);
//   const [desModule, setDesModule] = useState<DestinationModuleProps[]>([]);
//   const [Error, SetError] = useState(false);

//   const [firstStartRecord, setFirstStartRecord] = useState<StartModuleProps | null>(null);
//   const [firstDestRecord, setFirstDestRecord] = useState<DestinationModuleProps | null>(null);

//   const START_MODULE = "http://localhost:8003/StartModule";
//   const DESTINATION_MODULE = "http://localhost:8003/destinationModule";

//   useEffect(() => {
//     const fetchModules = async () => {
//       try {
//         const startResponse = await axios.get(START_MODULE);
//         const destResponse = await axios.get(DESTINATION_MODULE);

//         setStartModule(startResponse.data);
//         setDesModule(destResponse.data);

//         if (Array.isArray(startResponse.data) && startResponse.data.length > 0) {
//           setFirstStartRecord(startResponse.data[0]);
//         }
//         if (Array.isArray(destResponse.data) && destResponse.data.length > 0) {
//           setFirstDestRecord(destResponse.data[0]);
//         }

//         SetError(false);
//       } catch (error) {
//         console.error("There was an error fetching the modules", error);
//         SetError(true);
//       }
//     };

//     fetchModules();
//   }, []);

//   const handleExchange = () => {
//     if (firstStartRecord && firstDestRecord) {
//       const tempStartValue = firstStartRecord.fixedplace;
//       const tempStartDescription = firstStartRecord.description;

//       setFirstStartRecord({
//         ...firstStartRecord,
//         fixedplace: firstDestRecord.destination,
//         description: firstDestRecord.description,
//       });

//       setFirstDestRecord({
//         ...firstDestRecord,
//         destination: tempStartValue,
//         description: tempStartDescription,
//       });
//     }
//   };

//   const initialValues = {
//     specialFare: '',
//     startDate,
//     endDate,/[l;]
//     travellers: '1',
//     class: 'economy',
//     from: firstStartRecord?.fixedplace || '',
//     to: firstDestRecord?.destination || ''
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={(values) => {
//         console.log('Selected Form Data:', values);
//       }}
//     >
//       {({ setFieldValue, values }) => (
//         <Form>
//           <div className="absolute inset-x-0 top-0 transform -translate-y-1/2 mx-auto w-full max-w-6xl p-4" style={{ position: "absolute", top: "-12px" }}>
//             <div className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200">
//               {/* <h2 className="text-3xl font-serif">Book Your Flight Ticket</h2> */}
//               <div className="flex flex-col items-start py-12">
//                 <div className="flex flex-wrap justify-center gap-2">
//                   <RadioButtons
//                     id="student"
//                     name="specialFare"
//                     value="student"
//                     label="Student Fare"
//                   />
//                   <RadioButtons
//                     id="roundTrip"
//                     name="specialFare"
//                     value="roundTrip"
//                     label="Round Trip"
//                   />
//                   <RadioButtons
//                     id="multiCity"
//                     name="specialFare"
//                     value="multiCity"
//                     label="Multi City"
//                   />

//                   <label className="flex ml-auto">
//                     Book International and Domestic Flights
//                   </label>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mb-6">
//                 <div className="flex items-center">
//                   {firstStartRecord && (
//                     <DestinationModule
//                       label="From:"
//                       id="from"
//                       value={firstStartRecord.fixedplace}
//                       description={firstStartRecord.description}
//                     />
//                   )}
//                   <FaExchangeAlt
//                     className="text-blue-500 text-3xl cursor-pointer"
//                     onClick={handleExchange}
//                   />
//                   {firstDestRecord && (
//                     <DestinationModule
//                       label="To:"
//                       id="to"
//                       value={firstDestRecord.destination}
//                       description={firstDestRecord.description}
//                     />
//                   )}
//                 </div>

//                 <div className="flex flex-col items-center space-x-4" style={{ position: "absolute", bottom: "220px", left: "850px" }}>
//                   <DatePicker
//                     id="datepicker-range-start"
//                     name="startDate"
//                     selectedDate={values.startDate}
//                     onChange={(date) => setFieldValue('startDate', date)}
//                     placeholderText="Select start date"
//                   />
//                   <span className="text-gray-500">to</span>
//                   <DatePicker
//                     id="datepicker-range-end"
//                     name="endDate"
//                     selectedDate={values.endDate}
//                     onChange={(date) => setFieldValue('endDate', date)}
//                     placeholderText="Select end date"
//                   />
//                 </div>

//                 <div className="flex items-end space-x-4" style={{ position: "absolute", left: "850px", bottom: "75px" }}>
//                   <TravelDropDown
//                     travellersOptions={[
//                       { value: "1", label: "1 Traveller" },
//                       { value: "2", label: "2 Travellers" },
//                       { value: "3", label: "3 Travellers" },
//                     ]}
//                     classOptions={[
//                       { value: "economy", label: "Economy" },
//                       { value: "premiumEconomy", label: "Premium Economy" },
//                       { value: "business", label: "Business" },
//                     ]}
//                     onTravellersChange={(event) => setFieldValue('travellers', event.target.value)}
//                     onClassChange={(event) => setFieldValue('class', event.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="text-center">
//                 <SearchButton buttonname="Search" type="submit" />
//               </div>
//             </div>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FlightBookingForm;
