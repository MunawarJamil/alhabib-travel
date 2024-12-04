import React from "react";

// Sample data for video testimonials
const videoData = [
  {
    title: "Sarah Khan",
    videoLink:
      "https://www.youtube.com/embed/FqcYmr5leJI?si=yj7qkb5avp_PtSYA&amp;start=660",
  },
  {
    title: "Ali Raza",
    videoLink:
      "https://www.youtube.com/embed/FqcYmr5leJI?si=yj7qkb5avp_PtSYA&amp;start=660", // Replace with actual video link
  },
  {
    title: "Zoya Ahmed",
    videoLink:
      "https://www.youtube.com/embed/FqcYmr5leJI?si=yj7qkb5avp_PtSYA&amp;start=660", // Replace with actual video
  },
];

// Video Testimonial Component
function VideoTestimonial() {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto">
      {/* Grid/Flex Content */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5 ml-1 md:ml-0 min-w-[65rem]">
          {videoData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2 bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Video Embed */}
              <div className="w-full aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={item.videoLink}
                  title={`Testimonial Video by ${item.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoTestimonial;
