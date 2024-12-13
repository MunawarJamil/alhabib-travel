import React from "react";

 
const videoData = [
  {
    videoLink: "/videoFiles/LP-Review.mp4",
  },
  
];
 
function VideoTestimonial() {
  return (
    <>
      <div className="flex justify-center md:hidden items-center w-[90%] md:w-[60%] lg:w-[45%] mx-auto gap-3 my-5 flex-col md:flex-row ">
        {videoData.map((item, index) => (
          <video
            key={index}  
            className="w-[90%]  md:w-[40%] h-96 object-contain rounded-lg"
            src={item.videoLink}  
            controls
          ></video>
        ))}
      </div>
    </>
  );
}

export default VideoTestimonial;
