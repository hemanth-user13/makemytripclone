import React from "react";

interface LocationInputProps{
  label:string
  id:string
  value:string 
  description:string
}

const LoactionInput:React.FC<LocationInputProps>=({label,id,value,description})=>{
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={id} className="text-gray-700 font-bold mb-2">{label}</label>
      <input 
      type="text"
      id={id}
      value={value}
      disabled
      className="border-none font-semibold text-lg text-center"
      />

      <span>{description}</span>
    </div>
  )
}

export default LoactionInput;