import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrainData } from "./TrainSlice";
import { RootState, AppDispatch } from "../../../store";
import Card from "./Cards/card";
import Navbar from '../../Header/test';
import FilterSidebar from './FliterSideBar';
import BookingModal from '../../Helpers/modals/BookingModal';
import axios from "axios";
/*eslint no-unused-vars: "error"*/

const TrainCard = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.trains);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedTrain, setSelectedTrain] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTrainData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const userID = localStorage.getItem("user_id");

  const handleUserData = async (formData: any) => {
    if (selectedTrain && userID) {
      const USERINTERACTION = "http://localhost:8003/userInteraction";
      const result = { userID, ...selectedTrain, ...formData };
      try {
        const postResponse = await axios.post(USERINTERACTION, result);
        console.log("Post response:", postResponse);
      } catch (err) {
        console.error("Error posting data:", err);
      }
    }
  };

  //@ts-expect-error
  const handleSave = (formData) => {
    console.log("Form data saved:", formData);
    setIsModalOpen(false);
    handleUserData(formData);
  };

  return (
    <div className="flex flex-col items-start p-4">
      <Navbar />
      <div className="flex mt-24">
        <FilterSidebar />
        <div className="flex-grow ml-8">
          {loading && <p style={{ marginLeft: "480px" }}>Loading...</p>}
          {error && <p className="text-2xl text-red-600" style={{ marginLeft: "480px" }}>No Data: {error}</p>}
          {!loading && !error && filteredData.map((train) => (
            //@ts-expect-error
            <div key={train.id} className="my-4">
              <Card
                trainName={train.trainName}
                departure={train.departure}
                arrival={train.arrival}
                date={train.date}
                duration={train.duration}
                price={train.price}
                imageURL={train.imageURL}
                onchange={() => setSelectedTrain(train)} 
                onButtonClick={() => setIsModalOpen(true)}
                buttonText="Book Train"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          initialData={{
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            address: '',
            pincode: ''
          }}
        />
      )}
    </div>
  );
};

export default TrainCard;
