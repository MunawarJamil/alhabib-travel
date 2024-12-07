"use client";

import Navbar from "../components/Navbar";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const InquiryForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const router = useRouter();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        "service_vpxmfgq",
        "template_rbmwu2c",
        form.current,
        "g9xwc_LT3hYleKIQm"
      );
      localStorage.setItem("formFilled", "true");
      setStatusMessage("Your inquiry has been sent successfully!");
      form.current.reset();
       setTimeout(() => {
        
        router.push("/");
       }, 1500);

       
    } catch (error) {
      setStatusMessage("Failed to send your inquiry. Please try again!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-[#0c091d] via-[#0e5243] to-[#093833] h-[100vh]">
        <div className="bg-white p-6 md:rounded-lg max-w-sm md:max-w-xl md:border-t-8 md:border-l-8 shadow-2xl mx-auto relative h-[100vh] md:h-auto md:top-32">
          <button
            onClick={() => router.push("/")}
            className="absolute top-4 right-4 text-gray-500 hover:text-[#d4A10F]"
            aria-label="Close Inquiry Form"
          >
            <FaTimes size={20} />
          </button>
          <div className="text-center mb-4">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={64}
              height={64}
              className="mx-auto mb-2"
            />
            <h2 className="text-lg font-semibold">Send your message</h2>
            <p className="text-sm text-gray-600">Our team will get in touch with you.</p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="block text-sm font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="from_phone"
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Mobile number with country code e.g., +92"
                required
              />
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
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={80}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-[#00454A] text-white py-2 rounded-md hover:bg-[#d4A10F] transition"
            >
              {isSending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
          {statusMessage && (
            <p className="text-center text-sm mt-4">{statusMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
