"use client";

import Navbar from "./Navbar";
import { Suspense, useState, useEffect } from "react";
import Footer from "./Footer";
import TravelDetails from "./TravelDetails";
import About from "./About";
import Testimonial from "./Testimonial";
import Hero from "./Hero";
import HotelSection from "./HotelSection";
import VideoTestimonial from "./VideoTestimonial";
import Faqs from "./Faqs";
import PriceCard from "./PriceCard";
import InquiryForm from "../enquiry-form/page";
 

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const inquiryFilled = localStorage.getItem("inquiryFilled");

    if (!inquiryFilled) {
      const interval = setInterval(() => {
        setShowPopup(true);
      }, 7000);

      return () => clearInterval(interval);
    }
  }, []);

   

  const handleFormSubmit = () => {
    
    setShowPopup(false);
    window.location.reload(); 
  };

  

  return (
    <>
      <div className="fixed top-0 z-10 w-full">
        <Navbar showPopup closePopup={() => setShowPopup(false)} />
      </div>

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

      {/* Conditionally render the InquiryForm as a popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center popup-container justify-center z-50">
          <InquiryForm closePopup={handleFormSubmit} />
        </div>
      )}
    </>
  );
}

export default HomePage;
