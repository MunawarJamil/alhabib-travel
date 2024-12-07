// "use client";
// import { useState } from "react";
// import { packages } from "../data/packages";
// import { FaPlane, FaHotel, FaTaxi, FaPassport } from "react-icons/fa";

// export default function Carousel() {
//   const months = [
//     "Jan-2025",
//     "Feb-2025",
//     "Ramadan 2025",
//     "Apr-2025",
//     "May-2025",
//   ];
//   const [activeMonth, setActiveMonth] = useState("Jan-2025");
//   const [showPrice, setShowPrice] = useState(Array(3).fill(false)); // Track showPrice state for each card
//   const packageData = packages[activeMonth];

//   const togglePrice = (index) => {
//     const updatedShowPrice = [...showPrice];
//     updatedShowPrice[index] = !updatedShowPrice[index];
//     setShowPrice(updatedShowPrice);
//   };

//   return (
//     <>
//       <header className="text-center py-6 bg-[#00454A] mt-20 shadow-md animate-fadeIn">
//         <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
//           AL HABIB TOURS & TRAVELS PVT. LTD.
//         </h1>
//         <h2 className="text-xl font-bold mt-2 text-white">
//           UMRAH PACKAGES 2025
//         </h2>
//       </header>

//       <div className="p-6 bg-gray-100 py-20 flex flex-col items-center">
//         {/* Month Selector */}
//         <div className="w-full max-w-4xl">
//           <div className="flex space-x-4 overflow-x-auto pb-4 mb-6 scrollbar-hide animate-slideUp">
//             {months.map((month) => (
//               <div
//                 key={month}
//                 onClick={() => setActiveMonth(month)}
//                 className={`cursor-pointer py-2 md:py-5 px-10 text-center rounded-sm shadow-md transition-transform duration-300 ease-out transform ${
//                   activeMonth === month
//                     ? "bg-[#00454A] text-white font-bold"
//                     : "bg-white text-gray-600 hover:bg-[#D4A10F] hover:text-white"
//                 }`}
//               >
//                 {month}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Package Details */}
//         <div className="flex flex-wrap justify-center gap-8 w-full border-t md:max-w-[80%] mx-auto shadow-2xl rounded-lg border-[#00454A] p-6 animate-fadeIn bg-white">
//           {packageData
//             ? ["double", "triple", "quad"].map((category, index) => (
//                 <div
//                   key={index}
//                   className="relative w-full max-w-[350px] h-[550px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
//                   style={{
//                     backgroundImage: `url("https://media.istockphoto.com/id/1867096339/photo/the-holy-kaaba-is-the-center-of-islam-inside-masjid-al-haram-in-mecca-covered-with-black-silk.jpg?s=612x612&w=0&k=20&c=43QrZwgqpoAbhbCsJ7TlPD1iqVT-2b7kKcXYekc3l5U=")`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 >
//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-black/70"></div>

//                   {/* Card Content */}
//                   <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
//                     {/* Header */}
//                     <div>
//                       <h2 className="text-2xl text-[#D4A10F] font-bold mb-2">
//                         {`${packageData.days} Nights ${
//                           category.charAt(0).toUpperCase() + category.slice(1)
//                         } Package`}
//                       </h2>
//                       <div className="bg-[#D4A10F] text-[#00454A] text-sm font-bold px-3 py-1 rounded-full inline-block">
//                         ★★★★★
//                       </div>
//                     </div>

//                     {/* Hotel Info */}
//                     <div className="mt-6">
//                       <p className="text-xl text-[#D4A10F] font-semibold">
//                         Makkah hotel:
//                         <span className="text-lg text-white block">
//                           {packageData.makkahHotels[index]}
//                         </span>
//                       </p>
//                       <p className="text-xl text-[#D4A10F] font-semibold mt-4">
//                         Madinah hotel:
//                         <span className="text-lg text-white block">
//                           {packageData.madinahHotels[index]}
//                         </span>
//                       </p>
//                     </div>

//                     {/* Package Includes */}
//                     <div className="mt-6">
//                       <h3 className="text-lg text-[#D4A10F] font-semibold mb-4">
//                         Package includes:
//                       </h3>
//                       <div className="flex items-center gap-8 text-white">
//                         <FaPlane size={20} />
//                         <FaPassport size={20} />
//                         <FaHotel size={20} />
//                         <FaTaxi size={20} />
//                       </div>
//                       <div className="flex gap-2 mt-2 text-sm">
//                         <span>Flights</span>
//                         <span>Visa</span>
//                         <span>Hotels</span>
//                         <span>Transport</span>
//                       </div>
//                     </div>

//                     {/* Show Price Button */}
//                     <div className="text-center mt-8">
//                       <button
//                         onClick={() => togglePrice(index)}
//                         className="bg-[#D4A10F] text-[#00454A] px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-[#00454A] hover:text-[#D4A10F] transition-colors"
//                       >
//                         {showPrice[index]
//                           ? `SAR ${packageData.prices[category]}`
//                           : "Show Price"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "No packages available for this month."}
//         </div>
//       </div>
//     </>
//   );
// }



import React from 'react'

function PriceCard() {
  return (
    <div className='flex  lg:justify-center gap-7 overflow-x-auto ml-2'> 
      <img src="/newPriceCard.jpeg" alt=""    />
      <img src="/newPriceCard.jpeg" alt=""     />
      <img src="/newPriceCard.jpeg" alt=""      />
    </div>
  ) 
}

export default PriceCard