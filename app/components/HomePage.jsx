import { IoMdArrowDropdown } from "react-icons/io";
import UmrahPackages from "./UmrahPackages";
import Carousel from "./Carousel";
import Footer from "./Footer";
import TravelDetails from "./TravelDetails";
function HomePage() {
  return (
    <>
      {/* hero section  */}
      <main>
        <img
          src="/IMG-20241130-WA0001.jpg"
          alt="banner image"
          className="w-full max-h-[90vh]"
        />
      </main>

      <section className="md:w-[70%] mx-auto md:mt-32">
        <div className="p-5">
          <p className="text-[#d4A10F] text-2xl">Your Comfort, Our Priority</p>
          <h1 className="text-4xl mt-2 font-bold">Hotels / Accommodations</h1>
        </div>

        <div className="px-5 py-1">
          <div className="makkah flex gap-1  ">
            <button className=" flex items-center   bg-[#00454A] text-white py-2 md:py-4 px-4">
              <span>Makkah</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </button>

            <button className=" flex items-center  bg-[#D4A10F] text-white py-2 px-4">
              <span>Madina</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </button>

            <button className=" flex items-center  bg-[#D4A10F] text-white py-2 px-5 md:px-6">
              <span>Food</span>
              <span>
                <IoMdArrowDropdown />
              </span>
            </button>
          </div>
        </div>

        <div className="p-5 ">
          <span className="font-bold  text-lg">Emaar Al Khalil Makkah </span>

          <div className="py-2 text-gray-500">
            <p>
              Emaar Al Khalil is ideally located on Ibrahim Khalil Street, just
              400 meters from Haram Sharif. Enjoy air-conditioned rooms with
              flat-screen TVs, a kettle, and 24/7 front desk service in Arabic
              and English. Our dedicated staff ensures a comfortable stay for
              all guests. Book now!
            </p>

            <p>
              <span>Location : </span>
              <span>
                : Ibrahim Al Khalil Street - Mesfala, 34452 Makkah, Saudi Arabia{" "}
              </span>
            </p>
          </div>
        </div>

        {/* mobile images */}

        <div className="flex flex-col lg:flex-row ">
          <div className="flex lg:flex-col md:gap-5 gap-2 px-5  md:py-5      ">
            <img
              src="./mobile-images/Snood-Hotel-Small.webp"
              alt="jyad hotel"
              className="  rounded-lg  max-w-20 md:max-w-36  cursor-pointer hover:border"
            />

            <img
              src="./mobile-images/Snood-Ajyad-Hotel_4_thumbnail.jpg"
              alt="jyad hotel"
              className="  rounded-lg  max-w-20 md:max-w-36  cursor-pointer hover:border"
            />

            <img
              src="./mobile-images/Snood-Ajyad-Hotel_2_thumbnail.jpg"
              alt="jyad hotel"
              className="  rounded-lg  max-w-20 md:max-w-36 cursor-pointer hover:border"
            />

            <img
              src="./mobile-images/Snood-Ajyad-Hotel_3_thumbnail.jpg"
              alt="jyad hotel"
              className=" rounded-lg max-w-20 md:max-w-36  cursor-pointer hover:border"
            />

            <img
              src="./mobile-images/Snood-Ajyad-Hotel_location.jpg"
              alt="jyad hotel"
              className="  rounded-lg  max-w-20 md:max-w-36   cursor-pointer hover:border"
            />
          </div>
          {/* desktop images */}

          <div className="p-5 lg:px-0 ">
            <img
              src="./desktopImages/Snood-Big-Hotel.webp"
              alt=""
              className="rounded-xl    object-cover "
            />
          </div>
        </div>
      </section>

      {/* umra packages */}

      <section>
        <Carousel />
<TravelDetails/>
        {/* <UmrahPackages /> */}
      </section>

      <section>
        {/* <FOOTER /> */}

        <Footer />
      </section>
    </>
  );
}

export default HomePage;
