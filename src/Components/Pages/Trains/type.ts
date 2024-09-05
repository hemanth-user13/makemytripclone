export interface TrainDataProps{
    trainName:string,
    departure:string,
    arrival:string,
    date:string,
    duration:string,
    price:string,
    imageURL?:string,
    onButtonClick: () => void,
    buttonText:string,
    category:string,
}