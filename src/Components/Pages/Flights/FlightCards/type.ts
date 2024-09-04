export interface departure{
    airport:string,
    timezone:string,
    scheduled:string,
    estimated:string,

}

export interface arrival{
    airport:string,
    timezone:string,
    terminal:string,
    scheduled:string,
    estimated:string
}

export interface airline{
    name:string,
}

export interface flight{
    number:string,
}


export interface FlightCardProps{
    flight_date:string,
    flight_status:string,
    departure:departure,
    arrival:arrival,
    airline:airline,
    flight:flight,
    onButtonClick: () => void,
    buttonText:string
}

