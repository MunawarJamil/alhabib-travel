import React from "react";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Carousel from "./Carousel";
function PriceCard({ showPopup, setShowPopup }) {
  const carouselRef = useRef(null);  
  const searchParams = useSearchParams();  
  useEffect(() => {
   
    const scrollParam = searchParams.get("scroll");
    if (scrollParam === "carousel" && carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);
  
  return (
    <div ref={carouselRef}>
      <Carousel showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}

export default PriceCard;
