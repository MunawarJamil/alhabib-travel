import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    title: "Return Flight",
    content:
      "Round-trip flights from one of our preferred partners. Travel with reputable airlines that offer quality services and comfort.",
  },
  {
    title: "Laundry",
    content: "Laundry services are not included in the package.",
  },
  {
    title: "TCS & GST",
    content:
      "GST & TCS are applicable taxes not included in your Umrah Package Price.",
  },
  {
    title: "Ziyarat's Transport",
    content:
      "The transport for ziyarat's for Makkah & Madinah is not included. You can add into the package by paying £25 per person for both cities.",
  },
];

function TravelDetails() {
  return (
    <>
      {/* Inclusion Section */}
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl mt-10 font-serif  font-bold text-[#D4A10F]">Inclusion</h1>
        {accordionData.map((item, index) => (
          <Accordion
            key={`inclusion-${index}`}
            type="single"
            collapsible
            className="mb-2" // Add gap between items
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium py-3 px-5 text-black rounded-t-md hover:bg-yellow-500 hover:text-white hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base pl-4 py-2 text-[#676060] bg-gray-100  ">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* Exclusion Section */}
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl mt-10 font-bold text-[#D4A10F]">Exclusion</h1>
        {accordionData.map((item, index) => (
          <Accordion
            key={`exclusion-${index}`}
            type="single"
            collapsible
            className="mb-2" // Add gap between items
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium py-3 px-5 text-black rounded-t-md hover:bg-yellow-500 hover:text-white hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base pl-4 py-2 text-[#676060] bg-gray-100 leading-8 ">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
}

export default TravelDetails;
