import React from "react";

interface SerachButtonProps {
  buttonname?: string;
  onSearchClick:()=>void
  
}

const Searchbutton: React.FC<SerachButtonProps> = ({ buttonname,onSearchClick }) => {


  
  return (
    <div style={{ position: "absolute", left: "480px" }}>
      <button
        className="bg-blue-500 text-white font-serif py-2 px-4 rounded-full w-44 text-2xl "
        onClick={onSearchClick}
      >
        {buttonname}
      </button>
    </div>
  );
};

export default Searchbutton;
