"use client";

import Image from "next/image";
import { useState } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import TravelDetails from "./TravelDetails";
import About from "./About";
import { imagesData } from "../data/images";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import HotelSection from "./HotelSection";
import VideoTestimonial from "./VideoTestimonial";
import Faqs from "./Faqs";

function HomePage() {
  const [selectedImage, setSelectedImage] = useState(
    "/desktopImages/Snood-Big-Hotel.webp"
  );

  return (
    <>
      <Hero />
      <HotelSection />
      <section className=" w-full md:w-[70%] mx-auto  ">
        {/* Mobile Images */}
        <div className="flex flex-col lg:flex-row gap-5 p-5   ">
          {/* Thumbnail Images */}
          <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3 ">
            {imagesData.map((image, index) => (
              <Image
                key={index}
                src={image.small}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-lg cursor-pointer   hover:border-gray-400  hover:shadow-2xl hover:border-4 transition-transform duration-300  "
                width={100}
                height={100}
                onClick={() => setSelectedImage(image.large)}
              />
            ))}
          </div>

          {/* Larger Image */}
          <div className="flex justify-center items-center w-full">
            <Image
              src={selectedImage}
              alt="Selected large image"
              className="rounded-xl object-cover lg:max-h-[40rem] lg:object-cover hover:shadow-2xl transition-transform duration-300 hover:scale-95"
              width={1200}
              height={500}
              priority
            />
          </div>
        </div>
      </section>

      <Carousel />
      <TravelDetails />

      <About />
      <Testimonial />

      <VideoTestimonial />
      <Faqs />
      <Footer />
    </>
  );
}

export default HomePage;
