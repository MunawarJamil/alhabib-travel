"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Carousel() {
  const months = [
    { name: "Jan-2025", prices: ["$1040", "$2040", "$3040"] },
    { name: "Feb-2025", prices: ["$1940", "$2940", "$3940"] },
    { name: "Ramadan 2025", prices: ["$840", "$1840", "$2840"] },
    { name: "Apr-2025", prices: ["$1440", "$2440", "$3440"] },
    { name: "May-2025", prices: ["$1465", "$2465", "$3465"] },
  ];

  const packages = [
    { name: "7 Nights Package", image: "/PricingCards/7 Nights .jpg" },
    { name: "14 Nights Package", image: "/PricingCards/14 nights 3 star copy.jpg" },
    { name: "10 Nights Package", image: "/PricingCards/10 nights.jpg" },
  ];

  const [activeMonth, setActiveMonth] = useState("Jan-2025");
  const [showPrice, setShowPrice] = useState(Array(packages.length).fill(false));
  const [formFilled, setFormFilled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isFormFilled = localStorage.getItem("formFilled") === "true";
    setFormFilled(isFormFilled);
  }, []);

  const toggleShowPrice = (index) => {
    if (formFilled) {
      setShowPrice((prev) =>
        prev.map((state, i) => (i === index ? !state : false))
      );
    } else {
      router.push("/enquiry-form");
    }
  };

  return (
    <>
      <header className="text-center py-6 mt-20 shadow-md animate-fadeIn bg-[#00454A]">
        <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
          AL HABIB TOURS & TRAVELS PVT. LTD.
        </h1>
        <h2 className="text-xl font-bold mt-2 text-white">UMRAH PACKAGES 2025</h2>
      </header>

      <div className="p-6 bg-gray-100 py-20">
        <div className="w-full max-w-4xl mx-auto mb-6">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide animate-slideUp">
            {months.map((month) => (
              <div
                key={month.name}
                onClick={() => {
                  setActiveMonth(month.name);
                  setShowPrice(Array(packages.length).fill(false));
                }}
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

        <div className="flex lg:justify-center gap-7 overflow-x-auto ml-2">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className="relative shadow-md rounded-md overflow-hidden bg-white flex-shrink-0 w-full sm:w-auto"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="object-cover w-full"
              />
            
              {showPrice[index] ?(
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2   hover:bg-[#D4A10F] text-white px-12 w-full py-5 text-xl   bg-[#00454A] transition">
                  Price: {months.find((m) => m.name === activeMonth)?.prices[index] || ""}
                </div>
              ): 
              
              <button
              onClick={() => toggleShowPrice(index)}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2   hover:bg-[#D4A10F] text-white px-12 w-full py-5 text-xl   bg-[#00454A] transition"
            >
              View Price
            </button>
              
              
              
              }
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
