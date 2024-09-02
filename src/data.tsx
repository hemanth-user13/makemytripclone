import React, { useEffect, useReducer } from "react";
import axios from "axios";

interface Airport {
  name: string;
  id: string;
  time: string;
}

interface Flight {
  departure_airport: Airport;
  arrival_airport: Airport;
  duration: number;
  airplane: string;
  airline: string;
  airline_logo: string;
  travel_class: string;
  flight_number: string;
  legroom: string;
  extensions: string[];
  often_delayed_by_over_30_min?: boolean;
  ticket_also_sold_by?: string[];
  overnight?: boolean;
}

interface Layover {
  duration: number;
  name: string;
  id: string;
  overnight?: boolean;
}

interface CarbonEmissions {
  this_flight: number;
  typical_for_this_route: number;
  difference_percent: number;
}

interface BestFlight {
  flights: Flight[];
  layovers: Layover[];
  total_duration: number;
  carbon_emissions: CarbonEmissions;
  price: number;
  type: string;
  airline_logo: string;
  departure_token: string;
}

interface ApiState {
  best_flights: BestFlight[];
  other_flights: Flight[];
}

type ActionType =
  | { type: "SET_FLIGHTS"; payload: BestFlight[] }
  | { type: "SET_OTHER_FLIGHTS"; payload: Flight[] };

const initialState: ApiState = {
  best_flights: [],
  other_flights: [],
};

function reducer(state: ApiState, action: ActionType): ApiState {
  switch (action.type) {
    case "SET_FLIGHTS":
      return { ...state, best_flights: action.payload };
    case "SET_OTHER_FLIGHTS":
      return { ...state, other_flights: action.payload };
    default:
      return state;
  }
}

const FlightDetails: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8003/flights");
        const { best_flights, other_flights } = response.data;

        dispatch({ type: "SET_FLIGHTS", payload: best_flights });
        dispatch({ type: "SET_OTHER_FLIGHTS", payload: other_flights });
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Best Flights</h1>
      {state.best_flights?.length > 0 ? (
        state.best_flights.map((flight, index) => (
          <div key={index}>
            <h2>{flight.type}</h2>
            <img src={flight.airline_logo} alt="Airline logo" />
            <p>Price: ${flight.price}</p>
            <p>Total Duration: {flight.total_duration} minutes</p>
            <p>Carbon Emissions: {flight.carbon_emissions.this_flight} kg</p>

            <h3>Flights:</h3>
            {flight.flights.map((f, idx) => (
              <div key={idx}>
                <p>Flight Number: {f.flight_number}</p>
                <p>Airline: {f.airline}</p>
                <img src={f.airline_logo} alt={`${f.airline} logo`} />
                <p>
                  Departure: {f.departure_airport.name} at{" "}
                  {f.departure_airport.time}
                </p>
                <p>
                  Arrival: {f.arrival_airport.name} at {f.arrival_airport.time}
                </p>
                <p>Duration: {f.duration} minutes</p>
                <p>Airplane: {f.airplane}</p>
                <p>Travel Class: {f.travel_class}</p>
                <p>Legroom: {f.legroom}</p>
                <ul>
                  {f.extensions.map((ext, i) => (
                    <li key={i}>{ext}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h3>Layovers:</h3>
            {flight.layovers.map((layover, layoverIndex) => (
              <div key={layoverIndex}>
                <p>Layover at: {layover.name}</p>
                <p>Duration: {layover.duration} minutes</p>
                {layover.overnight && <p>Overnight: Yes</p>}
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No best flights available</p>
      )}

      <h1>Other Flights</h1>
      {state.other_flights?.length > 0 ? (
        state.other_flights.map((flight, index) => (
          <div key={index}>
            <h3>{flight.flight_number}</h3>
            <img src={flight.airline_logo} alt="Airline logo" />
            <p>Airline: {flight.airline}</p>
            <p>
              Departure: {flight.departure_airport.name} at{" "}
              {flight.departure_airport.time}
            </p>
            <p>
              Arrival: {flight.arrival_airport.name} at{" "}
              {flight.arrival_airport.time}
            </p>
            <p>Duration: {flight.duration} minutes</p>
            <p>Airplane: {flight.airplane}</p>
            <p>Travel Class: {flight.travel_class}</p>
            <p>Legroom: {flight.legroom}</p>
            <ul>
              {flight.extensions.map((ext, i) => (
                <li key={i}>{ext}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No other flights available</p>
      )}
    </div>
  );
};

export default FlightDetails;
