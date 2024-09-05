import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrainData } from "./TrainSlice";
import { RootState, AppDispatch } from "../../../store";
import Card from "./Cards/card";
import Navbar from '../../Header/Navbar1';
import FilterSidebar from './FliterSideBar';

const TrainCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.trains);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    dispatch(fetchTrainData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilterChange = (selectedFilters: string[]) => {
    const filtered = data.filter((train) =>
      selectedFilters.includes(train.category) 
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col items-start p-4">
      <Navbar />
      <div className="flex mt-4">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="flex-grow ml-8">
          {loading && <p>Loading...</p>}
          {error && <p className="text-2xl">No Data: {error}</p>}
          {!loading && !error && filteredData.map((train, index) => (
            <div key={index} className="my-4">
              <Card
                trainName={train.trainName}
                departure={train.departure}
                arrival={train.arrival}
                date={train.date}
                duration={train.duration}
                price={train.price}
                imageURL={train.imageURL}
                onButtonClick={() => console.log(train.trainName)}
                buttonText="Book Train"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainCard;
