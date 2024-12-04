"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function HotelSection() {
  // Reusable Dropdown Button Component
  const DropdownButton = ({ label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-black py-2 lg:py-4 px-5 md:px-6 rounded-sm hover:shadow-2xl transition-transform duration-300 hover:scale-105 ${
        isActive
          ? "bg-[#00454A] text-white font-bold"
          : "bg-white text-black border py-4 hover:bg-[#D4A10F] hover:text-white"
      }`}
    >
      <span>{label}</span>
      <IoMdArrowDropdown className="ml-2" />
    </button>
  );

  const [activeTab, setActiveTab] = useState("makkah");
  const [activeHotel, setActiveHotel] = useState("emaarKhalilMakkah"); // To keep track of active hotel within each section

  return (
    <section className="w-full md:w-[70%] mx-auto md:mt-32">
      <div>
        <div className="p-5">
          <p className="text-[#d4A10F] text-2xl">Your Comfort, Our Priority</p>
          <h1 className="text-2xl md:text-4xl mt-2 font-bold">
            Hotels / Accommodations
          </h1>
        </div>

        <div className="px-5 py-1 overflow-x-auto">
          <div className="flex gap-2">
            <DropdownButton
              label="Makkah"
              isActive={activeTab === "makkah"}
              onClick={() => setActiveTab("makkah")}
            />
            <DropdownButton
              label="Madinah"
              isActive={activeTab === "madina"}
              onClick={() => setActiveTab("madina")}
            />
            <DropdownButton
              label="Food"
              isActive={activeTab === "food"}
              onClick={() => setActiveTab("food")}
            />
          </div>
        </div>

        {/* Makkah Tab */}
        {activeTab === "makkah" && (
          <div className=" p-5   hover:shadow-2xl transition-transform duration-300  ">
            <div className="overflow-x-auto whitespace-nowrap flex gap-3">
              <button
                className={`  px-4 border-2 hover:bg-[#d4A10F] hover:text-white py-2  ${
                  activeHotel === "emaarKhalilMakkah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("emaarKhalilMakkah")}
              >
                Emaar Al Khalil Makkah
              </button>
              <button
                className={`px-4 border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "emaarGrandMakkah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("emaarGrandMakkah")}
              >
                Emaar Grand Makkah Hotel
              </button>
              <button
                className={`px-4 border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "anjumMakkah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("anjumMakkah")}
              >
                Anjum Makkah
              </button>
            </div>

            {/* Hotel Details */}
            {activeHotel === "emaarKhalilMakkah" && (
              <div className="py-5">
                <span className="font-bold text-lg text-[#00454A]">
                  Emaar Al Khalil Makkah
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Emaar Al Khalil is ideally located on Ibrahim Khalil Street,
                    just 400 meters from Haram Sharif...
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F]">Location:</span>{" "}
                    Ibrahim Al Khalil Street, Makkah, Saudi Arabia
                  </p>
                </div>
              </div>
            )}
            {activeHotel === "emaarGrandMakkah" && (
              <div className="py-5">
                <span className="font-bold text-lg text-[#00454A]">
                  Emaar Grand Makkah Hotel
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Experience comfort at Emaar Grand Makkah Hotel, a 4-star
                    hotel just 4-5 minutes’ walk to Haram...
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F]">Location:</span>{" "}
                    Ibrahim Al Khalil Street, Makkah, Saudi Arabia
                  </p>
                </div>
              </div>
            )}
            {activeHotel === "anjumMakkah" && (
              <div className="py-5">
                <span className="font-bold text-lg text-[#00454A]">
                  Anjum Makkah
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Anjum Makkah is a 2-minute walk from Masjid Al Haram
                    offering modern accommodations...
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F]">Location:</span>{" "}
                    Umm Al Qura Street, Makkah, Saudi Arabia
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Madinah Tab */}
        {activeTab === "madina" && (
          <div className="p-5 hover:shadow-2xl transition-transform duration-300  ">
            <div className="overflow-x-auto  whitespace-nowrap flex gap-3">
              <button
                className={`px-4    border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "odstMadinah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("odstMadinah")}
              >
                Odst Al Madinah
              </button>
              <button
                className={`px-4  border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "goldenTulipMadinah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("goldenTulipMadinah")}
              >
                Golden Tulip Al Mektan Madinah Hotel
              </button>
              <button
                className={`px-4  border-2 hover:bg-[#d4A10F] hover:text-white py-2 ${
                  activeHotel === "pullmanMadinah"
                    ? "bg-[#00454A] text-white font-bold"
                    : ""
                }`}
                onClick={() => setActiveHotel("pullmanMadinah")}
              >
                Pullman Zam Zam Madinah
              </button>
            </div>

            {/* Hotel Details */}
            {activeHotel === "odstMadinah" && (
              <div className="py-5">
                <span className="font-bold text-lg text-[#00454A]">
                  Odst Al Madinah
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Odst Al Madinah is just 150 meters from the Prophet’s Mosque
                    offering unmatched convenience...
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F]">Location:</span>{" "}
                    Madinah, Saudi Arabia
                  </p>
                </div>
              </div>
            )}
            {activeHotel === "goldenTulipMadinah" && (
              <div className="py-5">
                <span className="font-bold text-lg text-[#00454A]">
                  Golden Tulip Al Mektan Madinah Hotel
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Golden Tulip Al Mektan, just 200 meters from Haram Sharif,
                    offers stunning views...
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F]">Location:</span>{" "}
                    Madinah, Saudi Arabia
                  </p>
                </div>
              </div>
            )}
            {activeHotel === "pullmanMadinah" && (
              <div className="py-5">
                <span className="font-bold text-lg text-[#00454A]">
                  Pullman Zam Zam Madinah
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Pullman Zam Zam is just 100 meters from Bab Al Salam
                    offering unparalleled convenience...
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F]">Location:</span>{" "}
                    Madinah, Saudi Arabia
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Food Tab */}
        {activeTab === "food" && (
          <div className="p-5 hover:shadow-2xl  transition-transform duration-300 hover:scale-95">
            <span className="font-bold text-xl text-[#00454A]">
              Explore Delicious Food Options
            </span>
            <div className="py-2 text-gray-500">
              <p>
                Discover the best food experiences available for you in Makkah
                and Madinah...
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HotelSection;
