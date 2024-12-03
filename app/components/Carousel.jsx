"use client";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { packages } from "../data/packages";

// Function for rendering star ratings
const StarRating = ({ rating }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) =>
      i < rating ? <FaStar key={i} className="text-[#D4A10F]" /> : <FaRegStar key={i} className="text-[#BFBFBF]" />
    )}
  </div>
);

// Function for rendering hotel lists (both Makkah and Madinah)
const HotelList = ({ title, hotels }) => (
  <div className="bg-[#1E1E1E] border border-[#D4A10F] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-transform duration-300 ease-out transform hover:scale-105 anima ">
    <h3 className="text-xl font-bold text-[#D4A10F] mb-3">{title}</h3>
    <ul className="text-[#BFBFBF] space-y-2">
      {hotels.map((hotel, index) => (
        <li key={index} className="text-base">
          {hotel}
        </li>
      ))}
    </ul>
  </div>
);

export default function Carousel() {
  const months = ["Jan-2025", "Feb-2025", "Ramadan 2025", "Apr-2025", "May-2025"];
  const [activeMonth, setActiveMonth] = useState("Jan-2025");
  const packageData = packages[activeMonth];

  return (
    <>
      <header className="text-center py-6 bg-[#00454A] mt-20 shadow-md animate-fadeIn">
        <h1 className="text-2xl font-bold text-[#D4A10F]">AL HABIB TOURS & TRAVELS PVT. LTD.</h1>
        <h2 className="text-xl font-bold mt-2 text-white">UMRAH PACKAGES 2025</h2>
      </header>

      <div className="p-6 bg-gray-100 py-20 flex flex-col items-center">
        {/* Carousel Section */}
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
        <div className="w-full border-t md:max-w-[80%] mx-auto shadow-2xl rounded-lg border-[#00454A] p-2 animate-fadeIn">
          {packageData ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-extrabold text-[#00454A] mb-3">
                  {activeMonth} <span className="text-[#D4A10F]">Packages</span>
                </h2>
                <p className="text-lg">Exclusive deals curated for you</p>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Star Categories */}
                <div className="bg-[#00454A] border border-[#D4A10F] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-[#D4A10F] mb-3">⭐ Star Categories</h3>
                  <ul className="space-y-2">
                    {packageData.starCategories.map((category, index) => (
                      <li key={index} className="text-white flex items-center">
                        <span className="mr-2">{category}</span>
                        <StarRating rating={parseInt(category)} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prices */}
                <div className="bg-[#1E1E1E] border border-[#D4A10F] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-transform duration-300 hover:scale-105">

                  <h3 className="text-xl font-bold text-[#D4A10F] mb-3">💰 Prices</h3>
                  <ul className="text-[#BFBFBF] space-y-2">
                    <li>
                      <strong className="text-white">Double:</strong> <span>SAR</span> {packageData.prices.double.join(", ")}
                    </li>
                    <li>
                      <strong className="text-white">Triple:</strong> <span>SAR</span> {packageData.prices.triple.join(", ")}
                    </li>
                    <li>
                      <strong className="text-white">Quad:</strong> <span>SAR</span> {packageData.prices.quad.join(", ")}
                    </li>
                  </ul>
                </div>
 
                {/* Makkah Hotels */}
                <HotelList title="🕌 Makkah Hotels"  className="hover:shadow-2xl transition-transform duration-300 hover:scale-105" hotels={packageData.makkahHotels} />

                {/* Madinah Hotels */}
                <HotelList title="🌇 Madinah Hotels" hotels={packageData.madinahHotels} />
                
                {/* Duration */}
                <div className="bg-[#00454A] border border-[#D4A10F] hover:shadow-2xl transition-transform duration-300 hover:scale-x-90 hover:scale-y-105 rounded-lg shadow-lg p-6 col-span-1 md:col-span-2 lg:col-span-4 text-center">
                  <h3 className="text-xl font-bold text-[#D4A10F] mb-3 ">⏳ Duration</h3>
                  <p className="text-2xl font-extrabold text-white">{packageData.days} Days</p>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-red-600">No package available for {activeMonth}.</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
