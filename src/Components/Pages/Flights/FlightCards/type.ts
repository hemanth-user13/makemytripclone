export interface Departure {
    airport: string;
    timezone: string;
    scheduled: string;
    estimated: string;
  }
  
  export interface Arrival {
    airport: string;
    timezone: string;
    terminal: string;
    scheduled: string;
    estimated: string;
  }
  
  export interface Airline {
    name: string;
  }
  
  export interface Flight {
    number: string;
  }
  
  export interface FlightCardProps {
    flight_date: string;
    flight_status: string;
    departure: Departure;
    arrival: Arrival;
    airline: Airline;
    flight: Flight;
    onButtonClick: () => void;
    buttonText: string;
    data?:[]
  }
  