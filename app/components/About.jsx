import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="w-[80%] lg:w-full lg:px-32 my-10 mx-auto py-16 grid lg:bg-gray-100 lg:grid-cols-2 gap-8 items-center opacity-0 animate-fadeIn">
        {/* Text Section */}
        <div className="transition-all transform hover:scale-105 hover:duration-300 hover:ease-in-out">
          <h3 className="text-lg text-[#D4A10F] animate-fadeIn">AL HABIB TRAVEL LTD</h3>
          <h1 className="text-2xl font-bold animate-fadeIn animate-delay-300">
            Collect moments <span className="text-[#D4A10F]">crafted</span> with perfection
          </h1>

          <p className="py-3 text-slate-600 leading-8 animate-fadeIn animate-delay-500">
            Al Habib Travel UK is a trusted travel agency for Muslims from British, European, Asian, and
            African communities living in the United Kingdom. With offices in London and Manchester,
            we offer Hajj and Umrah packages at prices that respect your budget. Whether you prefer
            simple comfort or luxurious stays, our 3-star, 4-star, and 5-star packages are carefully
            crafted to make your spiritual journey stress-free and meaningful.
          </p>

          <h2 className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-700">
            We are a choice of many because of our:
          </h2>
          <ul className="list-disc text-slate-600 leading-8 pl-8 animate-fadeIn animate-delay-900">
            <li>Affordable services with exceptional value</li>
            <li>Flavorful meals that satisfy.</li>
            <li>Dedicated 24/7 support.</li>
          </ul>

          <p className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-1100">
            Let’s embrace the extraordinary together!
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block opacity-0 animate-fadeIn animate-delay-500">
          <Image
            src="/travelImages/travel1.png"
            alt="Travel Image"
            className="rounded-lg object-cover transition-transform transform hover:scale-105 duration-300 ease-in-out"
            width={800}  // Adjust the width as needed
            height={600}  // Adjust the height as needed
            priority
          />
        </div>
      </div>
    </>
  );
}

export default About;
