"use client";

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
      }, 7000); // Trigger popup every 7 seconds

      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const popup = document.querySelector(".popup-container");
      if (popup && !popup.contains(event.target)) {
        handleClosePopup(); // Close popup when clicking outside
      }
    };

    // Attach event listener to detect clicks outside the popup
    document.addEventListener("click", handleOutsideClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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

      {/* Conditionally render the InquiryForm as a popup */}
      {showPopup && (
        <div className="  fixed   inset-0 bg-black bg-opacity-50 flex items-center popup-container justify-center z-50">
          <InquiryForm closePopup={() => setShowPopup(false)} />
        </div>
      )}
    </>
  );
}

export default HomePage;
