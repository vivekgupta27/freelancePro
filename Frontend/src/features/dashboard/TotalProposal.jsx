import React from 'react';
import { IoNewspaperOutline } from "react-icons/io5";

const TotalProposalCard = () => {
  return (
    <div className='w-[220px] h-[200px] bg-[#1e1e1e] text-white p-5 flex flex-col justify-between rounded-xl shadow-lg border border-[#444] hover:bg-[#eeeeef] hover:text-black transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
      
      <div className="flex items-center justify-between">
        <IoNewspaperOutline size={40} className="text-[#60a5fa]" />
        <span className="text-sm font-medium opacity-70">Overview</span>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-1">Total Proposals</h3>
        <p className="text-4xl font-bold">9</p>
      </div>

      <div className="text-sm text-gray-400">
        +2 this week
      </div>
    </div>
  );
};

export default TotalProposalCard;
