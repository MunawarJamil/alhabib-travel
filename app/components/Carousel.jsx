"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { months } from "../data/monthsPricingCards";

export default function Carousel() {
  const [activeMonth, setActiveMonth] = useState(months[0].name);
  const [selectedPackage, setSelectedPackage] = useState("7-days");
  const [showPrice, setShowPrice] = useState({});
  const router = useRouter();
  const [isInquiryFilled, setIsInquiryFilled] = useState(false);

  useEffect(() => {
    const inquiryStatus = localStorage.getItem("inquiryFilled") === "true";
    setIsInquiryFilled(inquiryStatus);
  }, []);

  const handlePackageSelection = (days) => {
    setSelectedPackage(days);
  };

  const handleBookNow = () => router.push("/enquiry-form");
  const handleViewPrice = (index) => {
    if (!isInquiryFilled) {
      router.push("/enquiry-form");
      return;
    }
    setShowPrice((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const getImagesForSelectedMonth = (month) => {
    const monthData = months.find((m) => m.name === month);
    return monthData ? monthData.images[selectedPackage].images : [];
  };

  const getPriceForSelectedMonthAndIndex = (month, index) => {
    const monthData = months.find((m) => m.name === month);
    return monthData ? monthData.images[selectedPackage].prices[index] : null;
  };

  return (
    <>
      <header className="text-center py-6 mt-10 shadow-md animate-fadeIn bg-[#00454A]">
        <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
          AL HABIB TOURS & TRAVELS PVT. LTD.
        </h1>
        <h2 className="text-xl font-bold mt-2 text-white">
          UMRAH PACKAGES 2025
        </h2>
      </header>

      <div className="p-6 bg-gray-100 pt-20 md:pb-10">
        <div className="w-full max-w-4xl mx-auto mb-6">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide animate-slideUp">
            {months.map((month) => (
              <div
                key={month.name}
                onClick={() => setActiveMonth(month.name)}
                className={`cursor-pointer py-2 px-6 md:py-4 md:px-8 text-center rounded-sm shadow-md transition-transform duration-300 ease-out transform ${
                  activeMonth === month.name
                    ? "bg-[#00454A] text-white font-bold"
                    : "bg-white text-gray-600 hover:bg-[#D4A10F] hover:text-white"
                }`}
              >
                {month.name}
              </div>
            ))}
          </div>
        </div>

        {activeMonth && (
          <>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex overflow-x-auto mx-auto lg:w-[64%] gap-3">
                {months
                  .find((month) => month.name === activeMonth)
                  ?.days.map((day) => (
                    <button
                      key={day}
                      onClick={() => handlePackageSelection(day)}
                      className={`w-24 h-16 border border-gray-300 rounded-md ${
                        selectedPackage === day
                          ? "bg-[#00454A] text-white"
                          : "bg-white text-black hover:bg-[#D4A10F] "
                      }`}
                    >
                      {day.split("-")[0]} Days
                    </button>
                  ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row overflow-x-auto justify-center mt-10 gap-3">
              <div className="flex lg:grid lg:grid-cols-3 gap-3 lg:justify-center mt-6 lg:mt-0">
                {getImagesForSelectedMonth(activeMonth).map((image, index) => (
                  <div
                    key={index}
                    className="relative shadow-md rounded-md bg-white flex-shrink-0 w-full sm:w-auto sm:flex-none lg:w-auto"
                    style={{ minWidth: "100%" }}
                  >
                    <Image
                      src={image}
                      alt={`Package ${index + 1}`}
                      className="object-cover w-full lg:h-[33rem] rounded-xl"
                      width={1200}
                      height={528}
                    />

                    {showPrice[index] ? (
                      <button
                        onClick={handleBookNow}
                        className="absolute   bottom-0 left-1/2 transform -translate-x-1/2 text-white hover:text-[#D4A10F] rounded-b-xl   w-full py-3 border-t-2 text-xl   bg-[#00454A] transition"
                      >
                        Book Now
                      </button>
                    ) : (
                      <button
                        onClick={() => handleViewPrice(index)}
                        className="absolute   bottom-0 left-1/2 border-t-2  transform -translate-x-1/2 hover:text-[#D4A10F]  rounded-b-xl text-white  w-full py-3 text-xl border-b-2 bg-[#00454A] transition"
                      >
                        View Price
                      </button>
                    )}
                    {showPrice[index] && (
                      <div className="absolute  bottom-[3rem]    left-1/2 text-center transform -translate-x-1/2  bg-[#D4A10F]  text-[#00454A] font-bold px-12 w-full py-2 text-xl  transition cursor-pointer">
                        Price:{" "}
                        {getPriceForSelectedMonthAndIndex(activeMonth, index) ||
                          ""}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div
        onClick={handleBookNow}
        
        className="md:flex justify-center cursor-pointer hover:bg-[#D4A10F] md:max-w-96 hidden font-bold text-white md:rounded-3xl lg:mx-auto bg-[#00454A] py-5    rounded-b-lg md:px-20"
      >
        GET QOUTE
      </div>
    </>
  );
}
