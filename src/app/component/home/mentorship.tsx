import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { LinkPreview } from "../ui/link-preview";
import { testimonials } from "@/data";

export default function Mentorship() {
  return (
    <section className="py-10">
      <div className=" mt-5 text-center">
        <p className="text-slate-700 font-semibold py-5">
          Embrace new learning approaches beyond traditional courses
        </p>
        <p className="text-slate-700 text-3xl text-center">
          Seeking{" "}
          <LinkPreview url="https://framer.com/motion" className="font-bold">
            mentorship
          </LinkPreview>{" "}
          to gain{" "}
          <LinkPreview url="https://framer.com/motion" className="font-bold">
            invaluable guidance
          </LinkPreview>{" "}
          and expertise, fostering{" "}
          <LinkPreview url="https://framer.com/motion" className="font-bold">
            career
          </LinkPreview>{" "}
          advancement and personal growth.
        </p>
      </div>
      <div className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="pointer-events-none absolute z-50 inset-x-0 top-0 h-20 bg-gradient-to-b from-white dark:from-black"></div>
        <InfiniteMovingCards
          items={testimonials}
          direction="up"
          speed="normal"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="up"
          speed="normal"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="up"
          speed="normal"
        />
        <div className="pointer-events-none absolute z-50 inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white "></div>
      </div>
    </section>
  );
}
