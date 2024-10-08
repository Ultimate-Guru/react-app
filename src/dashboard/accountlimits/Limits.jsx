/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function Limits() {
  const navigate = useNavigate();

  // Function to handle the clicking event
  const handleNextPage = () => {
    navigate('/LimitForm')
  }

  return (
    <div className="bg-neutral-100 pt-32 pl-40 h-screen">
      {/* Account Limits Title */}
      <h1 className="font-extrabold text-xl text-left ml-40 mb-6">Account Limits</h1>
      
      {/* Current Limits Section */}
      <div className="ml-10">
        <h2 className="font-bold text-lg mb-4 ml-48">Current Limits</h2>

        {/* Limits Card */}
        <div className="flex items-center justify-between p-8 bg-white rounded-lg max-w-3xl shadow-lg ml-48">
          {/* Daily Limit */}
          <div className="text-left">
            <p className="text-gray-400 font-semibold">Daily limit</p>
            <p className="text-black font-semibold text-lg">20,000 UK</p>
          </div>

          {/* Yearly Limit */}
          <div className="text-left">
            <p className="text-gray-400 font-semibold">Yearly limit</p>
            <p className="text-black font-semibold text-lg">1,000,000 UK</p>
          </div>

          {/* Increase Limits Button */}
          <button className="bg-red-600 text-white font-bold p-3 rounded-md w-48" onClick={handleNextPage}>
            Increase Limits
          </button>
        </div>
      </div>
    </div>
  );
}

export default Limits;