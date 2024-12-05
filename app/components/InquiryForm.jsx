import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTimes } from "react-icons/fa";
 
import Image from "next/image"; 

const InquiryForm = ({ closeForm }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_vpxmfgq",
        "template_rbmwu2c",
        form.current,
        { publicKey: "g9xwc_LT3hYleKIQm" }
      );
      setStatusMessage("Your inquiry has been sent successfully!");
      form.current.reset();
    } catch (error) {
      setStatusMessage("Failed to send your inquiry. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
 
    <div className="bg-[#00454A] w-full h-screen lg:h-[100%]">
      <div className="bg-white p-6 rounded-lg max-w-sm md:max-w-xl border-t-8 border-l-8 shadow-2xl mx-auto relative top-2 md:top-20">
 
    <div className="bg-gradient-to-r from-[#0c091d] via-[#0e5243] to-[#093833] w-full h-screen lg:h-[100%]">
      <div className="bg-gray-200    p-6 rounded-lg max-w-sm md:max-w-xl border-t-8 border-l-8 shadow-xl mx-auto relative top-2 md:top-20">
 
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#d4A10F]"
        >
          <FaTimes size={20} />
        </button>
        <div className="text-center mb-4">
 
          <img src="/logo.webp" alt="Logo" className="mx-auto w-16 mb-2" />
 
          <Image
            src="/logo.webp"
            alt="Logo"
            width={64} // Tailwind's w-16 is 16 * 4 = 64px
            height={64} // Tailwind's w-16 and h-16 are the same for a square image
            className="mx-auto mb-2"
          />
 
          <h2 className="text-lg font-semibold">Send your message</h2>
          <p className="text-sm text-gray-600">
            Our team will get in touch with you.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
            placeholder="Enter your name"
            required
          />
          {/* Other input fields */}
 
           

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium">
                Mobile Number
              </label>
              <div className="flex items-center">
                <input
                  type="tel"
                  id="mobile"
                  name="from_phone"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                  placeholder="Mobile number with country code e.g +92"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                type="text"
                maxLength={80}
                name="message"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your message"
              />
            </div>
 

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium">
              Mobile Number
            </label>
            <div className="flex items-center">
              <input
                type="tel"
                id="mobile"
                name="from_phone"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Mobile number with country code e.g +92"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Your Message</label>
            <textarea
              type="text"
              maxLength={80}
              name="message"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
              placeholder="Enter your message"
              required
            />
          </div> 
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-[#00454A] text-white py-2 rounded-md hover:bg-[#d4A10F] transition"
          >
            {isSending ? "Sending..." : "Send Inquiry"}
          </button>
        </form> 
        {statusMessage && <p className="text-center text-sm mt-4">{statusMessage}</p>}
 
        {statusMessage && (
          <p className="text-center text-sm mt-4">{statusMessage}</p>
        )}
 
      </div>
    </div>
  );
};

export default InquiryForm;
