"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; 

const InquiryForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    acceptPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
  };

  return (<>
    <div className="bg-[#00454A] w-full lg:h-[100%]"> 
    <div className="bg-white p-6 rounded-lg  max-w-sm md:max-w-xl border-t-8 border-l-8 shadow-2xl mx-auto relative top-20">
      {/* Close Icon */}
      <button
        onClick={closeForm} // Close the form when clicked
        className="absolute top-4 right-4 text-gray-500 hover:text-[#d4A10F]"
      >
        <FaTimes size={20} />
      </button>

      {/* Header */}
      <div className="text-center mb-4">
        <img
          src="/logo.webp" // Replace with your logo's path in the public folder
          alt="Logo"
          className="mx-auto w-16 mb-2"
        />
        <h2 className="text-lg font-semibold">Kindly fill this form</h2>
        <p className="text-sm text-gray-600">
          Our team will get in touch with you.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium">
            Mobile Number*
          </label>
          <div className="flex items-center">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-[#d4A10F]"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="acceptPolicy"
              checked={formData.acceptPolicy}
              onChange={handleChange}
              className="w-4 h-4 text-[#d4A10F] border-gray-300 rounded focus:ring-[#d4A10F]"
              required
            />
            <span className="ml-2 text-sm">
              I accept the{" "}
              <a href="/privacy-policy" className="text-red-500 underline">
                Privacy Policy
              </a>.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00454A] text-white py-2 rounded-md hover:bg-[#d4A10F] transition"
        >
          Send Inquiry
        </button>
      </form>
    </div>

    </div>
    </>);
};

export default InquiryForm;
