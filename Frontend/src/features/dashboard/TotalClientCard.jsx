import React from 'react';
import { IoPeople } from "react-icons/io5";

const TotalClientCard = () => {
  return (
    <div className='w-[220px] h-[200px] bg-[#1e1e1e] text-white p-5 flex flex-col justify-between rounded-xl shadow-lg border border-[#444] hover:bg-[#eeeeef] hover:text-black transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
      
      <div className="flex items-center justify-between">
        <IoPeople size={40} className="text-[#6ee7b7]" />
        <span className="text-sm font-medium opacity-70">Overview</span>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-1">Total Clients</h3>
        <p className="text-4xl font-bold">15</p>
      </div>

      <div className="text-sm text-gray-400">
        +3 this week
      </div>
    </div>
  );
};

export default TotalClientCard;
