import React from "react";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Carousel from "./Carousel";
function PriceCard() {
  const carouselRef = useRef(null); // Reference for the Carousel section
  const searchParams = useSearchParams(); // Access query parameters
  useEffect(() => {
    // Check for the "scroll" query parameter
    const scrollParam = searchParams.get("scroll");
    if (scrollParam === "carousel" && carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <div ref={carouselRef}>
      <Carousel />
    </div>
  );
}

export default PriceCard;
