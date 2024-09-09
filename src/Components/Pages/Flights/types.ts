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

// type dummytype=|"date"|"todaydate"

//   export interface dummyState{
//     type:dummytype
//   }

  // export interface StateProps{
  //   date:string
  // }

  const navigate = useNavigate()
    const handleTrainSearch = () => {
        navigate('/trainpage')
    }