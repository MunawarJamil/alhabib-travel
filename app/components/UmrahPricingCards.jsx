// import React from "react";

// function UmrahPricingCards() {
//   const cards = [
//     {
//       title: "10 Nights 3-Star Umrah Package",
//       makkah: "Anjum Makkah",
//       makkahNights: "4 Nights",
//       madinah: "Odst Al Madinah",
//       madinahNights: "6 Nights",
//       inclusions: ["Flight", "Transfers", "Hotels", "Tickets"],
//       rating: 4,
//     },
//     {
//       title: "7 Nights 4-Star Umrah Package",
//       makkah: "Dar Al Eiman Grand",
//       makkahNights: "3 Nights",
//       madinah: "Elaf Taiba",
//       madinahNights: "4 Nights",
//       inclusions: ["Flight", "Transfers", "Hotels", "Tickets"], rating: 5,
//     },
//     {
//       title: "14 Nights 5-Star Umrah Package",
//       makkah: "Fairmont Makkah Clock Royal Tower",
//       makkahNights: "7 Nights",
//       madinah: "Shaza Al Madinah",
//       madinahNights: "7 Nights",
//       inclusions: ["Flight", "Transfers", "Hotels", "Tickets"],  rating: 5,
//     },
//   ];

//   return (
//     <div
//       className="flex justify-center gap-6 items-center min-h-screen bg-cover bg-center bg-no-repeat py-10 px-5"
//       style={{
//         backgroundImage: "url(/PricingCards/1.jpg)",
//         backgroundBlendMode: "overlay",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div className="grid gap-8 pb-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full max-w-[90rem]">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex flex-col border text-white rounded-lg shadow-lg bg-opacity-80 bg-black p-6 h-[750px]"
//           >
//             {/* Title and Rating */}
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-3xl leading-normal font-bold text-yellow-400">
//                 {card.title}
//               </h1>
//               <div className="flex items-center">
//                 <p className="text-yellow-500 text-2xl">
//                   {"★".repeat(card.rating)}
//                 </p>
//               </div>
//             </div>

//             {/* Hotel Information */}
//             <div className="space-y-4 my-4">
//               <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
//                 <div>
//                   <h3 className="text-2xl">Makkah</h3>
//                   <p className="text-xl text-gray-300">{card.makkah}</p>
//                 </div>
//                 <span className="text-lg text-yellow-400">
//                   {card.makkahNights}
//                 </span>
//               </div>
//               <div className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
//                 <div>
//                   <h3 className="text-2xl my-2">Madinah</h3>
//                   <p className="text-xl text-gray-300">{card.madinah}</p>
//                 </div>
//                 <span className="text-lg text-yellow-400">
//                   {card.madinahNights}
//                 </span>
//               </div>
//             </div>

//             {/* Package Inclusions */}
//             <div className="my-2">
//               <h3 className="text-2xl font-semibold text-yellow-400 my-3">
//                 Package Includes
//               </h3>
//               <div className="grid grid-cols-2 items-center justify-center gap-5 flex-wrap">
//                 {card.inclusions.map((inclusion, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-center gap-2 bg-gray-700 text-green-400 rounded-lg p-2"
//                   >
//                     <span className="text-lg">
//                       {inclusion === "Flight" && "✈️"}
//                       {inclusion === "Transfers" && "🚗"}
//                       {inclusion === "Hotels" && "🏨"}
//                       {inclusion === "Tickets" && "🎟️"}
//                       {inclusion === "Meals" && "🍴"}
//                     </span>
//                     <p className="text-sm">{inclusion}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Call to Action */}
//             <div className="flex flex-col mt-4 gap-4">
//               <button className="flex-grow bg-yellow-600 hover:bg-green-500 text-white py-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
//                 View Price
//               </button>
//               <button className="flex-grow bg-green-800 hover:bg-blue-500 text-white py-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105">
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default UmrahPricingCards;
