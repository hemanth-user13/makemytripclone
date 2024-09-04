export interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  export interface StartModuleProps {
    id: number;
    fixedplace: string;
    description: string;
    country: string;
    airportCode: string;
    coordinates: Coordinates;
  }
  
  export interface DestinationModuleProps {
    id: number;
    destination: string;
    description: string;
    country: string;
    airportCode: string;
    coordinates: Coordinates;
  }

  // export interface StateProps{
  //   date:string
  // }