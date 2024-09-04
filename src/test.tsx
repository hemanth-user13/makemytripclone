import { useEffect, useState } from "react"
import axios from "axios"


const Test = () => {
    const [data,setData]=useState([])
    const [error,setError]=useState(false);

   

    const GetData=async()=>{
        const AVITATION_URL=`http://localhost:8003/flight`
        try {
            const response=await axios.get(AVITATION_URL);
            // console.log(response.data);
            setData(response.data)
            setError(false)
        } catch (error) {
            console.log(error,"there is error in api")
        }
    }

    useEffect(()=>{
        GetData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Test
