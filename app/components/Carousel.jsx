"use client";
import { useState } from "react";
import { packages } from "../data/packages";

export default function Carousel() {
  const months = [
    "Jan-2025",
    "Feb-2025",
    "Ramadan 2025",
    "Apr-2025",
    "May-2025",
  ];
  const [activeMonth, setActiveMonth] = useState("Jan-2025");
  const packageData = packages[activeMonth];

  return (
    <>
      <header className="text-center py-6 bg-[#00454A] mt-20 shadow-md animate-fadeIn">
        <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
          AL HABIB TOURS & TRAVELS PVT. LTD.
        </h1>
        <h2 className="text-xl font-bold mt-2 text-white">
          UMRAH PACKAGES 2025
        </h2>
      </header>

      <div className="p-6 bg-gray-100 py-20 flex flex-col items-center">
        {/* Month Selector */}
        <div className="w-full max-w-4xl">
          <div className="flex space-x-4 overflow-x-auto pb-4 mb-6 scrollbar-hide animate-slideUp">
            {months.map((month) => (
              <div
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`cursor-pointer py-2 md:py-5 px-10 text-center rounded-sm shadow-md transition-transform duration-300 ease-out transform ${
                  activeMonth === month
                    ? "bg-[#00454A] text-white font-bold"
                    : "bg-white text-gray-600 hover:bg-[#D4A10F] hover:text-white"
                }`}
              >
                {month}
              </div>
            ))}
          </div>
        </div>

        {/* Package Details */}
        <div className="w-full border-t md:max-w-[80%] mx-auto shadow-2xl rounded-lg border-[#00454A] p-6 animate-fadeIn bg-white">
          {packageData ? (
            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="md:text-2xl font-bold text-[#00454A]">
                  {activeMonth} Packages
                </h2>
                <p className="text-lg text-gray-600">Exclusive deals for you</p>
              </div>

              {/* Package Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["double", "triple", "quad"].map((category, index) => (
                  <div
                    key={category}
                    className="p-4 border rounded-lg shadow-md bg-gray-50"
                  >
                    <h3 className="text-lg font-semibold capitalize mb-2 text-[#00454A]">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <p className="text-gray-800 font-bold mb-2">
                      SAR {packageData.prices[category][index].toLocaleString()}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">Makkah Hotel: </span>
                      {packageData.makkahHotels[index]}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">Madinah Hotel: </span>
                      {packageData.madinahHotels[index]}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold">Star Category: </span>
                      {packageData.starCategories[index]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Duration */}
              <div className="mt-6 text-center border-t border-gray-300 pt-6">
                <span className="text-lg font-bold text-[#D4A10F]">
                  Duration:
                </span>
                <span className="text-gray-700 ml-2">
                  {packageData.days} Days
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-red-600">
                No package available for {activeMonth}.
              </h2>
            </div>
            )}
    </div>
  </div>
</>
); } 