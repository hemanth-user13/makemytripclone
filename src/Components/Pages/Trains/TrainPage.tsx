// src/components/TrainCard.tsx

import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrainData } from "./TrainSlice";
import { RootState, AppDispatch } from "../../../store";
import Card from "./Cards/card";

const TrainCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.trains);

  useEffect(() => {
    dispatch(fetchTrainData());
  }, [dispatch]);

  const handleBookNowClick = () => {
    console.log("railway button is clicked!");
  };

  return (
    <div className="p">
      {loading && <p>Loading...</p>}
      {error && <p className="text-2xl">No Data: {error}</p>}
      {!loading &&
        !error &&
        data.map((train, index) => (
          <div key={index}>
            <Card
              trainName={train.trainName}
              departure={train.departure}
              arrival={train.arrival}
              date={train.date}
              duration={train.duration}
              price={train.price}
              imageURL={train.imageURL}
              onButtonClick={handleBookNowClick}
              buttonText="Book Train"
            />
          </div>
        ))}
    </div>
  );
};

export default TrainCard;
