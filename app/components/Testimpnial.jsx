
 
// import React from 'react';
 
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import React from "react"; 

// // Sample data
// const carouselData = [
//   {

//     title: 'Sarah Khan',
//     quote: 'Alhabib Travel Pvt made my trip absolutely seamless. From booking flights to arranging luxurious accommodations, everything was handled professionally. I would highly recommend their services.',
//     gender: 'female',
 
//     title: "Aisha Saddique",
//     quote:
//       "Al Habib travel is the best and trusted travel agency in London I search Umrah booking and then find them in You tube I talk to them and they gave me good advice for booking and provided furthur convenience in the procedure.  ",
//     gender: "female", 
//     rating: 5,
//   },
//   {
//     title: "Seibar Wakefield",
//     quote:
//       "Assalam o Alaikum, Brother and sisters it is highly recommended company.We have dealt with them regarding some queries they have provided us very good services and in professional way.They are real gentlemans.",
//     gender: "male",
//     rating: 5,
//   },
//   {
//     title: "Zoya Ahmed",
//     quote:
//       "Al Habib travel is the best and trusted travel agency in London I search Umrah booking and then find them in You tube I talk to them and they gave me good advice for booking and provided furthur convenience in the procedure.",
//     gender: "female",
//     rating: 5,
//   },
// ];

// // Testimonial Component
// function Testimonial() {
//   return (
//     <div className="w-[90%] md:w-[75%] mx-auto">
//       {/* Heading */}
//       <div className="text-center text-3xl px-4 font-bold">
//         <h2 className="text-sm my-2 text-[#D4A10F] uppercase tracking-wider animate-bounce">
//           TESTIMONIALS
//         </h2>
//         What Our <span className="text-[#D4A10F]">Clients</span> Say!
//       </div>


//       {/* Grid/Flex Content */}
//       <div className="overflow-x-auto">
//   <div className="grid grid-cols-3 gap-6 my-10 ml-1 min-w-[65rem]   ">
//     {carouselData.map((item, index) => (
//       <div
//         key={index}
//         className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//       >
//         {/* SVG Icon */}
//         <svg
//           className="h-12 mb-4 text-gray-400 dark:text-gray-600 animate-pulse"
//           viewBox="0 0 24 27"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
//             fill="currentColor"
//           />
//         </svg>

//         {/* Quote */}
//         <blockquote className="text-lg font-medium text-gray-900 dark:text-white text-center">
//           "{item.quote}"
//         </blockquote>

//         {/* Client Info */}
//         <figcaption className="mt-4 flex items-center">
//           {/* Avatar */}
//           <img
//             src={
//               item.gender === "female"
//                 ? "/femaleAvatar11.jpg"
//                 : "/maleAvatar.webp"
//             }
//             alt={`${item.title}'s avatar`}
//             className="w-12 h-12 rounded-full border-2 border-[#D4A10F] mr-4"
//           />
//           <div>
//             {/* Name */}
//             <p className="font-bold text-gray-900 dark:text-white">
//               {item.title}
//             </p>

//             {/* Star Rating */}
//             <div className="flex">
//               {[...Array(item.rating)].map((_, i) => (
//                 <span key={i} className="text-[#D4A10F] text-lg">⭐</span>
//               ))}
//             </div>
//           </div>
//         </figcaption>
//       </div>
//     ))}
//   </div>
// </div>
 
//       <Carousel
//         plugins={[Autoplay({ delay: 2000 })]}
//         opts={{ align: "center" }}
//         className="w-full my-10 max-w-screen-lg"
//       >
//         <CarouselContent>
//           {carouselData.map((item, index) => (
//             <CarouselItem
//               key={index}
//               className="  basis-full   lg:basis-1/2 md:px-4"
//             >
//               <div className="p-4 bg-white rounded-lg shadow-lg md:min-h-[350px] border">
//                 {/* Avatar */}
//                 <div className="flex justify-center">
//                   <img
//                     src={
//                       item.gender === "female"
//                         ? "/femaleAvatar11.jpg"
//                         : "/maleAvatar.webp"
//                     }
//                     alt={`${item.title}'s avatar`}
//                     className="w-20 h-20 rounded-full border-2 border-[#D4A10F] mb-4"
//                   />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-semibold text-center">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm text-center mt-2 leading-relaxed">
//                   “{item.quote}”
//                 </p>

//                 {/* Star Rating */}
//                 <div className="flex justify-center mt-4">
//                   {[...Array(item.rating)].map((_, i) => (
//                     <span key={i} className="text-[#D4A10F] text-lg">
//                       ★
//                     </span>
//                   ))}
//                   {[...Array(5 - item.rating)].map((_, i) => (
//                     <span key={i} className="text-gray-300 text-lg">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel> 
//     </div>
//   );
// } 



// export default Testimonial;

