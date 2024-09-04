import { useNavigate } from "react-router-dom"
import Searchbutton from "../../Helpers/SearchButton"


const Trains = () => {
    const navigate=useNavigate()
    const handleTrainSearch=()=>{
        navigate('/trainpage')
    }
    return (
        <div>
            <div
                className="absolute inset-x-0 top-0 transform -translate-y-1/2 mx-auto w-full max-w-6xl p-4" style={{ position: "absolute", top:"280px" }}
                >
                <div className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200 " style={{height:"400px"}} >
                   <div style={{marginTop:"339px"}}>
                   <Searchbutton
                    buttonname="Search"
                    onSearchClick={handleTrainSearch}
                     />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Trains