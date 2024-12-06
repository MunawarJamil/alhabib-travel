import Image from "next/image";
import React from "react";

function About() {
  return ( <>
    
    <section className="text-center py-6 mt-10 border-t-4 animate-fadeIn">
  <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
    Explore with Al Habib Travel
  </h1>
  <h2 className="text-xl font-bold mt-2">
    Seamless Adventures Await
  </h2>
</section>



{/* about section with video  */}

{/* About Section with Video */}

<div className="w-[93%] lg:w-full lg:px-32   mx-auto   lg:py-16   lg:bg-gray-100  flex flex-col lg:flex-row  gap-16 items-center  ">  
  {/* Video Section */}
   <video
  src="/videoFiles/ad.mp4"
  className="  w-[37.5rem]  lg:w-[25rem] rounded-lg object-contain    transition-transform transform duration-300 "
  controls
/>  



  {/* Text Section */}
  <div className="transition-all transform lg:hover:scale-105 hover:duration-300 lg:hover:ease-in-out">
  <h3 className="text-lg text-[#D4A10F] animate-fadeIn">DISCOVER AL HABIB</h3>
  <h1 className="text-2xl font-bold animate-fadeIn animate-delay-300">
    Experience <span className="text-[#D4A10F]">comfort</span> and care
  </h1>

  <p className="py-3 text-slate-600 leading-8 animate-fadeIn animate-delay-500">
    Welcome to Al Habib Travel UK, where journeys are tailored to perfection. Serving individuals 
    and families from across the UK, we ensure that every Hajj or Umrah pilgrimage is designed with 
    your unique needs in mind. From budget-friendly options to premium packages, our commitment 
    to excellence guarantees an unparalleled experience for every traveler.
  </p>

  <div className="flex gap-20">
    <div>
      <h2 className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-700">
        What sets us apart:
      </h2>
      <ul className="list-disc text-slate-600 leading-8 pl-8 lg:pl-4 animate-fadeIn animate-delay-900">
        <li>Customized travel solutions for every budget</li>
        <li>Authentic culinary experiences to delight your journey</li>
        <li>Round-the-clock assistance, wherever you are</li>
      </ul>

      <p className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-1100">
        Join us to turn your travel dreams into reality!
      </p>
    </div>

    <div className="hidden lg:block">
      <h2 className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-700">
        Why choose Al Habib:
      </h2>
      <ul className="list-disc text-slate-600 leading-8 pl-4 animate-fadeIn animate-delay-900">
        <li>Personalized itineraries for hassle-free travel</li>
        <li>Delicious meals crafted for your preferences</li>
        <li>Dedicated support, every step of the way</li>
      </ul>

      <p className="text-lg py-3 font-bold text-gray-600 animate-fadeIn animate-delay-1100">
        Let us guide you on a journey like no other!
      </p>
    </div>
  </div>
</div>

 
</div>

 
<section className="text-center py-6 bg-[#00454A]  shadow-md animate-fadeIn">
        <h1 className="text-lg md:text-2xl font-bold text-[#D4A10F]">
        Discover Destinations with Al Habib Travel
        </h1>
        <h2 className="text-xl font-bold mt-2 text-white">
        Your Perfect Travel Partner Awaits
        </h2>
      </section>

{/* about section with video  */}

 
      <div className="w-[93%] lg:w-full lg:px-32   mx-auto flex  flex-col-reverse  py-8 lg:py-16 lg:grid lg:bg-gray-100 lg:grid-cols-2 gap-8 items-center  lg:flex-row-reverse animate-fadeIn">
        {/* Text Section */}
        <div className="transition-all transform lg:hover:scale-105 hover:duration-300 hover:ease-in-out">
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
        <div className="   animate-fadeIn animate-delay-500">
          <Image
            src="/travelImages/travel1.png"
            alt="Travel Image"
            className="rounded-lg object-cover transition-transform h-[400px] transform lg:hover:scale-105 duration-300 ease-in-out"
            width={900}  // Adjust the width as needed
            height={800}  // Adjust the height as needed
            priority
          />
        </div>
      </div>







    </>
  );
}

export default About;
