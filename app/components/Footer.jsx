import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Left Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.webp"
                alt="Bakhla Logo"
                className="w-12 h-12 mr-3"
              />
              <div>
                <h2 className="text-xl font-bold">Al Habib Travel</h2>
                <p className="text-sm">Alhabib Pilgrimage</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-6">
              We at Bakhla Tours & Travels Pvt. Ltd. are serving pilgrims from
              the last 3 decades (30 years) with the help of the founder of our
              company, Mr. Rashid Ahmed Bakhla who established this company in
              1989.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col lg:flex-row lg:w-1/2 justify-around">
            {/* Call Us */}
            <div className="flex items-start mb-6 lg:mb-0">
              <FaPhoneAlt className="text-red-600 text-3xl mr-3" />
              <div>
                <h3 className="font-bold text-lg mb-1">Call us</h3>
                <p className="text-gray-400 text-sm">+91 9920820751</p>
              </div>
            </div>

            {/* Write to Us */}
            <div className="flex items-start mb-6 lg:mb-0">
              <FaEnvelope className="text-red-600 text-3xl mr-3" />
              <div>
                <h3 className="font-bold text-lg mb-1">Write to us</h3>
                <p className="text-gray-400 text-sm">sales@bakhlatours.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-red-600 text-3xl mr-3" />
              <div>
                <h3 className="font-bold text-lg mb-1">Address</h3>
                <p className="text-gray-400 text-sm leading-6">
                  Shop Number 20, Haroon Manzil, B Block, 147, Imamwada Road,
                  Bhendi Bazaar, Mumbai, Maharashtra 400009
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          ©2024 Bakhla Tours & Travels Pvt. Ltd. All Rights Reserved.
          <br />
          Bakhlatours.com | Disclaimer | Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
