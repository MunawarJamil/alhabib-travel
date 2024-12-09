// "use client";
// import React from "react";

// const UmrahPackages = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="text-center py-6 bg-white shadow-md">
//         <h1 className="text-2xl font-bold text-red-600">
//           BAKHLA TOURS & TRAVELS PVT. LTD.
//         </h1>
//         <h2 className="text-xl font-bold mt-2">UMRAH PACKAGES 2024</h2>
//       </header>

//       {/* Tabs for Months */}
//       <div className="flex justify-center space-x-4 py-4 bg-gray-200">
//         {["AUG–2024", "SEP–2024", "OCT–2024", "NOV–2024", "DEC–2024"].map(
//           (month) => (
//             <button
//               key={month}
//               className="px-4 py-2 text-sm bg-white text-gray-700 font-semibold rounded-md hover:bg-red-500 hover:text-white transition"
//             >
//               {month}
//             </button>
//           )
//         )}
//       </div>

//       {/* Packages */}
//       <div className="container mx-auto p-4">
//         <div className="flex space-x-4 overflow-x-auto">
//           {[
//             { date: "03-Dec-2024", nights: 14, tourId: "UT18" },
//             { date: "10-Dec-2024", nights: 14, tourId: "UT19" },
//             { date: "15-Dec-2024", nights: 14, tourId: "UT24" },
//             { date: "29-Dec-2024", nights: 14, tourId: "UT25" },
//           ].map((tour) => (
//             <div
//               key={tour.tourId}
//               className="flex-shrink-0 bg-white p-4 shadow-lg rounded-md w-48 text-center"
//             >
//               <h3 className="text-lg font-bold text-red-500">{tour.date}</h3>
//               <p className="text-sm text-gray-600">{tour.nights} Nights</p>
//               <p className="text-sm font-semibold text-red-600">{`Tour-${tour.tourId}`}</p>
//             </div>
//           ))}
//         </div>

//         {/* Package Details */}
//         <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-bold">
//             Gold Umrah Package Dec'24 Departures
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
//             <div>
//               <p className="font-bold">Quint</p>
//               <p>₹1,00,000</p>
//             </div>
//             <div>
//               <p className="font-bold">Quad</p>
//               <p>₹1,05,000</p>
//             </div>
//             <div>
//               <p className="font-bold">Triple</p>
//               <p>₹1,13,500</p>
//             </div>
//             <div>
//               <p className="font-bold">Twin</p>
//               <p>₹1,30,000</p>
//             </div>
//           </div>
//           <hr className="my-4" />
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//             <div>
//               <p className="font-bold">Dep. City</p>
//               <p>Mumbai</p>
//             </div>
//             <div>
//               <p className="font-bold">Makkah Hotel</p>
//               <p>Snood Ajyad</p>
//             </div>
//             <div>
//               <p className="font-bold">Madina Hotel</p>
//               <p>ODST Al Madinah</p>
//             </div>
//             <div>
//               <p className="font-bold">Sector</p>
//               <p>Bom-Jed-Bom</p>
//             </div>
//             <div>
//               <p className="font-bold">Dep. Date</p>
//               <p>03rd Dec</p>
//             </div>
//             <div>
//               <p className="font-bold">Arr. Date</p>
//               <p>17th Dec</p>
//             </div>
//             <div>
//               <p className="font-bold">Airlines</p>
//               <p>FLY NAS</p>
//             </div>
//             <div>
//               <p className="font-bold">Duration</p>
//               <p>14 Nights</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UmrahPackages;
