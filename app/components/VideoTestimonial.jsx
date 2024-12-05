import React from "react";

// Sample data for video testimonials
const videoData = [
  {
    videoLink:
      "https://www.youtube.com/embed/FqcYmr5leJI?si=yj7qkb5avp_PtSYA&amp;start=660",
  },
  {
    videoLink: "./viseoFiles/ad.mp4", // Replace with actual video link
  },
];

// Video Testimonial Component
function VideoTestimonial() {
  return (
    <>
      <div className="flex justify-center items-center w-[90%] md:w-[60%] lg:w-[45%] mx-auto gap-3 my-5 flex-col md:flex-row ">
        {videoData.map((item, index) => (
          <video
          key={index} // Add a unique key for each video
          className="w-[90%] md:w-[60%] lg:w-[45%] h-96 object-contain rounded-lg"
          src={item.videoLink} // Correctly use item.videoLink
          controls
        ></video>
        ))}
      </div>
    </>
  );
}

export default VideoTestimonial;