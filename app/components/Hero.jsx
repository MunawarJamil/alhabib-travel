import React from "react";
import Image from "next/image"; // Importing Next.js Image component

function Hero() {
  return (
    <>
      {/* <style jsx>{`
        @media (min-width: 1021px) and (max-width: 1543px) {
          .banner-section {
            grid-template-columns: 1fr;
            font-size: 15px;
          }
          .banner-image {
            display: none;
          }
        }
      `}</style> */}

      {/* Hero Section for Smaller Screens */}
      <main className="lg:hidden   items-center justify-center bg-gradient-to-r from-[#0c091d] via-[#0e5243] to-[#093833] animate-fade-in">
        <div className="animate-slide-in-up">
          <Image
            src="/banner-home.jpg"
            alt="banner image"
            className="w-full max-h-[100vh] object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div>
        {/* <div className=" hidden lg:text-center p-8">
          <h1 className="text-4xl font-bold text-white animate-fade-in-up">
            PLAN YOUR UMRAH TODAY!
          </h1>
          <p className="text-xl text-[#d4A10F] italic mt-2 animate-fade-in-up delay-200">
            Trusted by pilgrims, Loved by Families
          </p>
        </div> */}
      </main>

      {/* Hero Section for Larger Screens
      <main className="hidden lg:grid grid-cols-2 font-serif bg-gradient-to-r from-[#0c091d] via-[#0e5243] to-[#093833] banner-section">
        {/* Left Section  
        <div className= "flex flex-col p-20 justify-center animate-slide-in-left">
          <h1 className="text-6xl leading-relaxed font-bold text-white animate-fade-in">
            PLAN YOUR UMRAH TODAY!
          </h1>
          <div className="p-10 text-[#d4A10F]">
            <h2 className="text-2xl font-bold animate-fade-in delay-100">
              TALK TO OUR EXPERT AGENTS AND
            </h2>
            <h3 className="text-2xl font-bold mt-2 animate-fade-in delay-200">
              BOOK WITH CONFIDENCE
            </h3>
            <p className="ml-24 mt-2 w-48 h-[0.15rem] bg-white" />
          </div>

          <div className="px-10 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-white">
              AL HABIB TRAVEL UK
            </h1>
            <p className="italic text-2xl text-[#d4A10F]">
              Trusted by pilgrims, Loved by Families
            </p>
          </div>
        </div>

        {/* Right Section  
        <div>
          <div className="banner-image animate-slide-in-right">
            <Image
              src="/QabaImage1.jpg"
              alt="banner image"
              className="w-full max-h-[100vh] object-cover rounded-l-full"
              width={1920}
              height={1080}
              priority
            />
          </div>
        </div>
      </main>

      animate-slide-in-right
       */}

      {/* new banner section */}

      <main className=" hidden  lg:block  font-serif bg-gradient-to-r">
        <div className="banner-image w-full h-auto ">
          <Image
            src="/DD-Recovered.jpg"
            alt="banner image"
            className="w-full object-cover "
            width={1920}
            height={1280}
            priority
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
