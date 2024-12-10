import React from "react";
import Image from "next/image"; // Importing Next.js Image component

function Hero() {
  return (
    <>
      {/* Hero Section for Smaller Screens */}
      <main className="lg:hidden   relative top-[-37] items-center justify-center bg-gradient-to-r from-[#0c091d] via-[#0e5243] to-[#093833] animate-fade-in">
        <div className="">
          {/* animate-slide-in-up */}
          <Image
            src="/banner-home.jpg"
            alt="banner image"
            className="w-full max-h-[100vh] object-cover"
            width={1920}
            height={1280}
            priority
          />
        </div>
      </main>

      <main className=" relative hidden top-[-37] lg:block  font-serif bg-gradient-to-r">
        <div className="banner-image w-full h-auto relative top-0 ">
          <Image
            src="/DD-Recovered.jpg"
            alt="banner image"
            className="w-full object-cover "
            width={1920}
            height={1480}
            priority
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
