import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Reusable Icon Component
const Icon = ({ children, label, className }) => (
  <div className="flex items-start mb-6 lg:mb-0">
    <div
      className={`text-red-600 text-3xl mr-3 ${className}`}
      aria-label={label}
    >
      {children}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row  justify-between items-start lg:items-center">
          {/* Left Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <div className="flex items-center mb-4">
              <img
                src="/logo.webp"
                alt="Al Habib Travel Logo"
                className="w-20 h-20 mr-3"
              />
              <div>
                <h2 className="text-xl font-bold">Al Habib Travel</h2>
                <p className="text-sm">Alhabib Pilgrimage</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-6">
              Al Habib Travel is the most trusted & reliable agency among UK
              Muslims. We provide bespoke Umrah travel solutions & package
              designing services to meet budget range and facilities
              requirements of pilgrims.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col lg:flex-row lg:w-1/2 justify-around">
            {/* Call Us */}
            <Icon label="Call Us">
              <FaPhoneAlt />
              <div>
                <h3 className="font-bold text-lg mb-1">Call us</h3>
                <p className="text-gray-400 text-sm">0203 504 2344</p>
              </div>
            </Icon>

            {/* Write to Us */}
            <Icon label="Write to us">
              <FaEnvelope />
              <div>
                <h3 className="font-bold text-lg mb-1">Write to us</h3>
                <p className="text-gray-400 text-sm">
                  info@alhabibtravel.co.uk
                </p>
              </div>
            </Icon>

            {/* Address */}
            <Icon label="Address">
              <FaMapMarkerAlt />
              <div>
                <h3 className="font-bold text-lg mb-1">Office</h3>

                <p className="text-gray-400 text-sm leading-6">
                  Office 10378 182-184
                </p>
                <p className="text-gray-400 text-sm leading-6">
                  High Street North East Ham London England E6 2JA
                </p>
              </div>
            </Icon>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          <span className="font-bold">Note: </span>All fares advertised are
          subject to availability and start from the prices we have mentioned.
          Fares are only guaranteed until ticketed. Offers may be withdrawn
          without any prior notice
          <br />
          <a href="/disclaimer" className="hover:text-[#D4A10F]">
            Disclaimer
          </a>{" "}
          |
          <a href="/privacy-policy" className="hover:text-[#D4A10F]">
            {" "}
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
