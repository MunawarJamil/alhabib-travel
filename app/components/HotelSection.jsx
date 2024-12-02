// "use client"
// import { useState } from "react";

// import { IoMdArrowDropdown } from "react-icons/io";
// import { imagesData } from "../data/images";
// const HotelSection = () => {
    
//   const [selectedImage, setSelectedImage] = useState("/desktopImages/Snood-Big-Hotel.webp");

//   const [activeTab, setActiveTab] = useState("makkah"); // Initial state to show Makkah content
// // Reusable Dropdown Button Component
// const DropdownButton = ({ label, backgroundColor }) => (
//     <button className={`flex items-center ${backgroundColor} text-white py-2 px-5 md:px-6`}>
//       <span>{label}</span>
//       <IoMdArrowDropdown />
//     </button>
//   );
  
//   return (
//      {/* Hero Section */}
//      <main>
//      <Image
//        src="/IMG-20241130-WA0001.jpg"
//        alt="banner image"
//        className="w-full max-h-[90vh]"
//        width={1920}
//        height={1080}
//        priority
//      />
//    </main>
//     <section className="md:w-[70%] mx-auto md:mt-32">
//       <div className="p-5">
//         <p className="text-[#d4A10F] text-2xl">Your Comfort, Our Priority</p>
//         <h1 className="text-4xl mt-2 font-bold">Hotels / Accommodations</h1>
//       </div>

//       <div className="px-5 py-1">
//         <div className="makkah flex gap-1">
//           <DropdownButton
//             label="Makkah"
//             backgroundColor="bg-[#00454A]"
//             onClick={() => setActiveTab("makkah")}
//           />
//           <DropdownButton
//             label="Madina"
//             backgroundColor="bg-[#D4A10F]"
//             onClick={() => setActiveTab("madina")}
//           />
//           <DropdownButton
//             label="Food"
//             backgroundColor="bg-[#D4A10F]"
//             onClick={() => setActiveTab("food")}
//           />
//         </div>
//       </div>

//       {/* Conditionally Render Makkah Hotels */}
//       {activeTab === "makkah" && (
//         <div className="p-5">
//           {/* Makkah Hotel Content */}
//           <div>
//             <span className="font-bold text-lg text-[#00454A] ">Emaar Al Khalil Makkah</span>
//             <div className="py-2 text-gray-500">
//               <p>
//                 Emaar Al Khalil is ideally located on Ibrahim Khalil Street, just
//                 400 meters from Haram Sharif...
//               </p>
//               <p>
//                 <span className="font-bold text-[#d4A10F] ">Location :</span>
//                 <span>Ibrahim Al Khalil Street - Mesfala, 34452 Makkah, Saudi Arabia</span>
//               </p>
//             </div>
//           </div>
//           {/* More Makkah Hotels */}
//         </div>
//       )}

//       {/* Conditionally Render Madina Hotels */}
//       {activeTab === "madina" && (
//         <div className="p-5">
//           {/* Madina Hotel Content */}
//           <div>
//             <span className="font-bold text-lg text-[#00454A] ">Odst Al Madinah</span>
//             <div className="py-2 text-gray-500">
//               <p>
//                 Odst Al Madinah is just 150 meters from the Prophet’s Mosque...
//               </p>
//               <p>
//                 <span className="font-bold text-[#d4A10F] ">Location :</span>
//                 <span>Golden Tulip Al Mektan Madinah Hotel</span>
//               </p>
//             </div>
//           </div>
//           {/* More Madina Hotels */}
//         </div>
//       )}

//       {/* Conditionally Render Food Section */}
//       {activeTab === "food" && (
//         <div className="p-5">
//           {/* Food Content */}
//           <span className="font-bold text-lg text-[#00454A] ">FOOD</span>
//           <div className="py-2 text-gray-500">
//             <p>
//               At Al Habib Travel Ltd, we cater to the diverse tastes of Pakistani, Indian...
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Mobile Images */}
//       <div className="flex flex-col lg:flex-row gap-5 p-5">
//         {/* Smaller Images */}
//         <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3">
//           {imagesData.map((image, index) => (
//             <Image
//               key={index}
//               src={image.small}
//               alt={`Thumbnail ${index + 1}`}
//               className="rounded-lg cursor-pointer hover:border hover:border-gray-400 transition"
//               width={100}
//               height={100}
//               onClick={() => setSelectedImage(image.large)} // Update selected image
//             />
//           ))}
//         </div>

//         {/* Larger Image */}
//         <div className="flex justify-center items-center w-full">
//           <Image
//             src={selectedImage}
//             alt="Selected large image"
//             className="rounded-xl object-cover lg:max-h-[40rem] lg:object-cover"
//             width={1200}
//             height={500}
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HotelSection;
