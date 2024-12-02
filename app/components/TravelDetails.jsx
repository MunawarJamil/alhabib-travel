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
  {
    title: "Additional Checked Baggage",
    content:
      "If the luggage exceeds the 1st checked baggage which is 28kg, then you will have to pay at the airport. Additional baggage is not included.",
  },
  {
    title: "Room Service",
    content:
      "Room service is the service of delivering food, drinks, or other items to your hotel room, which is not included in the Umrah package and has to be paid directly to the hotel on a per-use basis.",
  },
];

function TravelDetails() {
  return (
    <>
      {/* Inclusion Section */}
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl mt-10 font-bold text-[#D4A10F]">Inclusion</h1>
        {accordionData.map((item, index) => (
          <Accordion key={`inclusion-${index}`} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-xl"> {item.title}</AccordionTrigger>
              <AccordionContent className="text-lg pl-4 text-[#676060]">
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
          <Accordion key={`exclusion-${index}`} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-xl"> {item.title}</AccordionTrigger>
              <AccordionContent className="text-lg pl-4 text-[#676060]">
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
