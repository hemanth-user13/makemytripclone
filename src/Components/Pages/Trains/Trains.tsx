import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaExchangeAlt } from "react-icons/fa";
import RadioButtons from "../../Helpers/RadioButtons";
import DatePicker from "../../Helpers/Datepicker";
import TravelDropDown from "../../Helpers/DropDown";
import SearchButton from "../../Helpers/SearchButton";
import DestinationModule from "../../Helpers/Destination";
import { StartModuleProps, DestinationModuleProps } from "../Flights/types";
import { useNavigate } from "react-router-dom";
import './trains.css';

const FlightBookingForm = () => {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [startModule, setStartModule] = useState<StartModuleProps[]>([]);
    const [desModule, setDesModule] = useState<DestinationModuleProps[]>([]);
    const [Error, SetError] = useState(false);
    const [firstStartRecord, setFirstStartRecord] = useState<StartModuleProps | null>(null);
    const [firstDestRecord, setFirstDestRecord] = useState<DestinationModuleProps | null>(null);

    const START_MODULE = "http://localhost:8003/StartModule";
    const DESTINATION_MODULE = "http://localhost:8003/destinationModule";

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const startResponse = await axios.get(START_MODULE);
                const destResponse = await axios.get(DESTINATION_MODULE);

                setStartModule(startResponse.data);
                setDesModule(destResponse.data);

                if (Array.isArray(startResponse.data) && startResponse.data.length > 0) {
                    setFirstStartRecord(startResponse.data[0]);
                }
                if (Array.isArray(destResponse.data) && destResponse.data.length > 0) {
                    setFirstDestRecord(destResponse.data[0]);
                }

                SetError(false);
            } catch (error) {
                console.error("There was an error fetching the modules", error);
                SetError(true);
            }
        };

        fetchModules();
    }, []);

    const handleExchange = () => {
        if (firstStartRecord && firstDestRecord) {
            const tempStartValue = firstStartRecord.fixedplace;
            const tempStartDescription = firstStartRecord.description;

            setFirstStartRecord({
                ...firstStartRecord,
                fixedplace: firstDestRecord.destination,
                description: firstDestRecord.description,
            });

            setFirstDestRecord({
                ...firstDestRecord,
                destination: tempStartValue,
                description: tempStartDescription,
            });
        }
    };

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/trainpage');
    }

    return (
        <div className="container" id="cont-1">
            <div style={{ position: "relative", top: "250px", left: "0" }}>
                <div className="absolute transform -translate-y-1/2 mx-auto w-full max-w-6xl p-4" style={{ top: "-12px" }}>
                <div className="cont-2">
                    <div className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200">
                        
                        <h2 className="text-3xl font-serif">Book Your Train Ticket</h2>
                        <div className="flex flex-col items-start py-12">
                            <div className="flex flex-wrap justify-center gap-2">
                                <RadioButtons
                                    id="trainticket"
                                    name="Book Train Tickets"
                                    value="Book Train Tickets"
                                    label="Book Train Tickets"
                                />
                                <RadioButtons
                                    id="pnrstatus"
                                    name="Check PNR Status"
                                    value="Check PNR Status"
                                    label="Check PNR Status"
                                />
                                <RadioButtons
                                    id="TrainStatus"
                                    name="Live Train Status"
                                    value="Live Train Status"
                                    label="Live Train Status"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                {firstStartRecord && (
                                    <DestinationModule
                                        label="From:"
                                        id="from"
                                        value={firstStartRecord.fixedplace}
                                    />
                                )}
                                <FaExchangeAlt
                                    className="text-blue-500 text-3xl cursor-pointer"
                                    onClick={handleExchange}
                                />
                                {firstDestRecord && (
                                    <DestinationModule
                                        label="To:"
                                        id="to"
                                        value={firstDestRecord.destination}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col items-center space-x-4" style={{ top: "170px", left: "540px" }}>
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

                            <div className="flex items-end space-x-4" style={{ left: "850px", bottom: "75px" }}>
                                <TravelDropDown
                                    travellersOptions={[
                                        { value: "1", label: "1 Traveller" },
                                        { value: "2", label: "2 Travellers" },
                                        { value: "3", label: "3 Travellers" },
                                    ]}
                                    classOptions={[
                                        { value: "economy", label: "Economy" },
                                        { value: "premiumEconomy", label: "Premium Economy" },
                                        { value: "business", label: "Business" },
                                    ]}
                                    onTravellersChange={(event) =>
                                        console.log("Selected Travellers:", event.target.value)
                                    }
                                    onClassChange={(event) =>
                                        console.log("Selected Class:", event.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <SearchButton buttonname="Search" onSearchClick={handleRedirect} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightBookingForm;
