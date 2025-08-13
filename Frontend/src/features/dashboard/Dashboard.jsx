import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';
const Dashboard = ({ toggle }) => {
  return (
    <Link to='/dashboard' className="flex items-center gap-2 text-lg py-2 px-2 hover:bg-white hover:text-black transition-all duration-300 ease-in-out rounded-md">
        <RxDashboard size={22} />
      <span
        className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 w-auto ml-1" : "opacity-0 w-0"
        }`}
      >
        Dashboard
      </span>
    </Link>
  );
};

export default Dashboard;
