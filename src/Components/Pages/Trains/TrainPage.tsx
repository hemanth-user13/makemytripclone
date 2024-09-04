import React, { useEffect, useState } from "react";
// import Card from "../../Helpers/OfferCard";
import Card from './Cards/card'
import axios from "axios"
import { TrainDataProps } from "./type";

const TrainCard = () => {
  const [data,setData]=useState<TrainDataProps[]>([])
  const [error,setError]=useState(null)
  const TRAINDATURL="http://localhost:8003/trains"
  const TrainApiCall=async()=>{
   try {
    const response=await axios.get(TRAINDATURL)
    console.log("the train data is",response.data)
    setData(response.data)
    setError(null)
   } catch (error) {
    console.error("there is an error in the api",error)
   }
  }

  useEffect(()=>{
    TrainApiCall()
  },[])

  const handleBookNowClick = () => {
    console.log("railway button is clciked!");
  };

  
  return (
    <div className="p">
        {error && <p className="text-2xl">No Data</p>}
      {data.map((train,index)=>(
        <div key={index}>
           <Card
           trainName={train.trainName}
           departure={train.departure}
           arrival={train.arrival}
           date={train.date}
           duration={train.duration}
           price={train.price}
           imageURL={train.imageURL}
          //  onButtonClick={handleBookNowClick}
          //  buttonText="Book Train"
           
           />
        
        </div>
      ))}
     
    </div>
  );
};

export default TrainCard;
