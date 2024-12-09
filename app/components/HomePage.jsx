"use client";

import Image from "next/image";
import { useState, Suspense } from "react";
import Footer from "./Footer";
import TravelDetails from "./TravelDetails";
import About from "./About";
import { EmaarAlKhalilMakkah } from "../data/images";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import HotelSection from "./HotelSection";
import VideoTestimonial from "./VideoTestimonial";
import Faqs from "./Faqs";
import PriceCard from "./PriceCard";
import UmrahPackageCard from "./UmrahPricingCards";

function HomePage() {
  return (
    <>
      <Hero />
      <HotelSection />

      <Suspense>
        <PriceCard />
      </Suspense>
 

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
