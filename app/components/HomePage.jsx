"use client";

import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import TravelDetails from "./TravelDetails";
import About from "./About";
import { imagesData } from "../data/images";
import Testimonial from "./Testimpnial";

// Reusable Dropdown Button Component
const DropdownButton = ({ label, isActive, onClick }) => (
  <button
  onClick={onClick}
  className={`flex items-center justify-center text-black py-2 lg:py-4 px-5 md:px-6 rounded-sm hover:shadow-2xl transition-transform duration-300 hover:scale-105 ${
    isActive
      ? "bg-[#00454A] text-white font-bold"
      : "bg-white text-black border py-4 hover:bg-[#D4A10F] hover:text-white"
  }`}
>
  <span>{label}</span>
  <IoMdArrowDropdown className="ml-2" />
</button>

);

function HomePage() {
  const [activeTab, setActiveTab] = useState("makkah"); // State to manage active tab
  const [selectedImage, setSelectedImage] = useState(
    "/desktopImages/Snood-Big-Hotel.webp"
  );

  return (
    <>
      {/* Hero Section */}
      <main>
        <Image
          src="/banner-home.jpg"
          alt="banner image"
          className="w-full max-h-[100vh] object-cover  "
          width={1920}
          height={1080}
          priority
        />
      </main>

      <section className="md:w-[70%] mx-auto md:mt-32">
        <div>
          <div className="p-5">
            <p className="text-[#d4A10F] text-2xl">
              Your Comfort, Our Priority
            </p>
            <h1 className="text-4xl mt-2 font-bold ">Hotels / Accommodations</h1>
          </div>

          <div className="px-5 py-1  overflow-x-auto ">
            <div className="makkah flex gap-2">
            <DropdownButton
                label="Makkah"
                isActive={activeTab === "makkah"}
                onClick={() => setActiveTab("makkah")}
              />
              <DropdownButton
                label="Madinah"
                isActive={activeTab === "madina"}
                onClick={() => setActiveTab("madina")}
              />
               <DropdownButton
                label="Food"
                isActive={activeTab === "food"}
                onClick={() => setActiveTab("food")}
              />
            </div>
          </div>

          {/* Conditional Rendering for Tabs */}
          {activeTab === "makkah" && (
            <div className="p-5 hover:shadow-2xl transition-transform duration-300 hover:scale-95">
              <div>
                <span className="font-bold text-lg text-[#00454A] ">
                  Emaar Al Khalil Makkah
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Emaar Al Khalil is ideally located on Ibrahim Khalil Street,
                    just 400 meters from Haram Sharif. Enjoy air-conditioned
                    rooms with flat-screen TVs, a kettle, and 24/7 front desk
                    service in Arabic and English. Our dedicated staff ensures a
                    comfortable stay for all guests. Book now!
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F] ">
                      Location :
                    </span>
                    <span>
                      Ibrahim Al Khalil Street - Mesfala, 34452 Makkah, Saudi
                      Arabia
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <span className="font-bold text-lg text-[#00454A] ">
                  Emaar Grand Makkah Hotel
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Experience comfort at Emaar Grand Makkah Hotel, a 4-star
                    hotel just 4-5 minutes’ walk to Haram, proudly partnered
                    with Al Habib Travel Ltd for your Umrah. Enjoy modern rooms
                    with stunning views of Al Haram and Makkah city.
                  </p>
                  <p>
                    <span className=" text-[#d4A10F]  font-bold  ">
                      Location :
                    </span>
                    <span>
                      Ibrahim Al Khalil Street - Mesfala, 24231 Makkah, Saudi
                      Arabia
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <span className="font-bold text-lg text-[#00454A] ">
                  Anjum Makkah
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Anjum Makkah, just a 2-minute walk from Masjid Al Haram,
                    offers modern accommodations with stunning Haram views.
                    Guests can savor local and international cuisine at the
                    on-site restaurant or enjoy 24/7 room service. With a
                    24-hour front desk, Al Habib Travel ensures a seamless and
                    comfortable Umrah experience.
                  </p>
                  <p>
                    <span className=" text-[#d4A10F]  font-bold  ">
                      Location :
                    </span>
                    <span>
                      Umm Al Qura Street, Jabal Al Kaaba District, Makkah, Saudi
                      Arabia
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "madina" && (
            <div className="p-5 hover:shadow-2xl transition-transform duration-300 hover:scale-95">
              <div>
                <span className="font-bold text-lg text-[#00454A] ">
                  Odst Al Madinah{" "}
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Odst Al Madinah is just 150 meters from the Prophet’s Mosque
                    and 250 meters from the Old Bazaar, offering unmatched
                    convenience for pilgrims. Each room features a private
                    bathroom, bathtub, slippers, free toiletries, and a
                    hairdryer. Located 13 km from Prince Mohammed Airport, it’s
                    the perfect Umrah stay! Location: Odst, Madinah 42311, Saudi
                    Arabia
                  </p>
                  <p>
                    <span className="font-bold text-[#d4A10F] ">
                      Location :
                    </span>
                    <span>Golden Tulip Al Mektan Madinah Hotel</span>
                  </p>
                </div>
              </div>

              <div>
                <span className="font-bold text-lg text-[#00454A] ">
                  Golden Tulip Al Mektan Madinah Hotel
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Golden Tulip Al Mektan, on Bab Al Salam Street, is just 200
                    meters and a 2-minute walk from Haram Sharif, offering
                    stunning views of the Prophet’s Mosque. Enjoy comfort and
                    style at this premier Madinah hotel, proudly partnered with
                    Al Habib Travel Ltd for your Hajj and Umrah tours.
                  </p>
                  <p>
                    <span className=" text-[#d4A10F]  font-bold  ">
                      Location :
                    </span>
                    <span>
                      As Salam Rd, Al Manakhah, Madinah 42311, Saudi Arabia
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <span className="font-bold text-lg text-[#00454A] ">
                  Pullman Zam Zam Madinah
                </span>
                <div className="py-2 text-gray-500">
                  <p>
                    Pullman Zam Zam is just 100 meters from Bab Al Salam at
                    Masjid Al Nabawi, offering unparalleled convenience. Enjoy
                    air-conditioned rooms with free WiFi, flat-screen TVs, and
                    select rooms with seating areas and sofa beds. With 4 unique
                    restaurants, Al Habib Travel ensures a luxurious and
                    comfortable Umrah stay.
                  </p>
                  <p>
                    <span className=" text-[#d4A10F]  font-bold  ">
                      Location :
                    </span>
                    <span>
                      Amr Bin Al Gmoh Street, Bani Khidrah, Madinah 41499, Saudi
                      Arabia
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "food" && (
            <div className="p-5 hover:shadow-2xl transition-transform duration-300 hover:scale-95">
              <span className="font-bold text-lg text-[#00454A] ">FOOD </span>
              <div className="py-2 text-gray-500">
                <p>
                  At Al Habib Travel Ltd, we cater to the diverse tastes of
                  Pakistani, Indian, Bangladeshi, British, and European Muslims.
                  From flavorful biryanis and curries to familiar international
                  dishes, our meals are crafted with care, including a special
                  Zabiha dish every week to make your journey even more
                  comforting.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Images */}
        <div className="flex flex-col lg:flex-row gap-5 p-5   ">
          {/* Thumbnail Images */}
          <div className="flex overflow-x-auto lg:flex-col md:overflow-y-auto gap-3 ">
            {imagesData.map((image, index) => (
              <Image
                key={index}
                src={image.small}
                alt={`Thumbnail ${index + 1}`}
                className="rounded-lg cursor-pointer   hover:border-gray-400  hover:shadow-2xl hover:border-4 transition-transform duration-300  "
                width={100}
                height={100}
                onClick={() => setSelectedImage(image.large)}
              />
            ))}
          </div>

          {/* Larger Image */}
          <div className="flex justify-center items-center w-full">
            <Image
              src={selectedImage}
              alt="Selected large image"
              className="rounded-xl object-cover lg:max-h-[40rem] lg:object-cover hover:shadow-2xl transition-transform duration-300 hover:scale-95"
              width={1200}
              height={500}
              priority
            />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section>
        <Carousel />
        <TravelDetails />
      </section>

      <About />
<Testimonial/>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
