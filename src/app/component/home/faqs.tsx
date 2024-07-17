import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, faqsT } from "@/data";
import Header from "@/app/component/header";

export default function Faqs() {
  return (
    <section className="py-5">
      <Header title={"FAQ'S"} />
      <Accordion type="single" collapsible>
        {faqs.map((item: faqsT) => (
          <AccordionItem value={item.item}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
