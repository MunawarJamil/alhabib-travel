import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data related to Umrah packages
const accordionData = [
  {
    title: "Hotel Booking",
    content:
      "We offer exclusive hotel bookings in Makkah and Madinah near the holy sites, ensuring a comfortable stay for all our clients.",
  },
  {
    title: "Food Facilities",
    content:
      "Our packages include quality food options during your stay, catering to all dietary preferences with authentic cuisine.",
  },
  {
    title: "Flight Services",
    content:
      "We provide round-trip flights with our trusted partners, ensuring comfortable and safe travel for all our guests.",
  },
  {
    title: "Transportation to Ziyarat",
    content:
      "We offer convenient transport for Ziyarat trips in Makkah and Madinah, adding an unforgettable experience to your Umrah journey.",
  },
  {
    title: "Package Inclusions",
    content:
      "Our packages include accommodation, flights, food, and transportation for a seamless Umrah experience. Additional services are available upon request.",
  },
  {
    title: "Visa Processing",
    content:
      "We provide assistance with Umrah visa processing to ensure a smooth and hassle-free travel experience.",
  },
];

// FAQ Section Component
function Faqs() {
  return (
    <div className="w-[90%] mx-auto py-10">
      {/* Heading */}
      <div className="text-center text-3xl px-4 font-bold mb-8">
        <h2 className="text-sm my-2 text-[#D4A10F] uppercase tracking-wider animate-bounce">
          FAQ&apos;s
        </h2>
        Frequently Asked Questions
      </div>

      {/* FAQ Accordion */}
      <div className="w-[80%] mx-auto">
        {accordionData.map((item, index) => (
          <Accordion key={`accordion-${index}`} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold py-3 px-5   text-black rounded-md hover:bg-yellow-500 hover:text-white">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-lg pl-4 py-2 text-[#676060] bg-gray-100 rounded-md">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
