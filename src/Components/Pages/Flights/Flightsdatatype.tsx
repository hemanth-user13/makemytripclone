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
  often_delayed_by_over_30_min?: boolean;
  overnight?: boolean;
  ticket_also_sold_by?: string[];
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

interface FlightOption {
  flights: Flight[];
  layovers: Layover[];
  total_duration: number;
  carbon_emissions: CarbonEmissions;
  price: number;
  type: string;
  airline_logo: string;
  departure_token: string;
}

interface ApiResponse {
  best_flights: FlightOption[];
  other_flights: FlightOption[];
}
