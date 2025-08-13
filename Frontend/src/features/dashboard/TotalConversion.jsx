import React from 'react';
import { TbTrendingUp } from "react-icons/tb";

const TotalConversionCard = () => {
  return (
    <div className='w-[220px] h-[200px] bg-[#1e1e1e] text-white p-5 flex flex-col justify-between rounded-xl shadow-lg border border-[#444] hover:bg-[#eeeeef] hover:text-black transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
      
      <div className="flex items-center justify-between">
        <TbTrendingUp size={40} className="text-[#facc15]" />
        <span className="text-sm font-medium opacity-70">Performance</span>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-1">Total Conversions</h3>
        <p className="text-4xl font-bold">5</p>
      </div>

      <div className="text-sm text-gray-400">
        +1 this week
      </div>
    </div>
  );
};

export default TotalConversionCard;
