import React from "react";
import { AnimatedTooltipPreview } from "./animationTooltip";
import { Button } from "@/components/ui/button";

export default function CallAction() {
  return (
    <section className="grid grid-cols-2 py-10">
      <div>
        <p className="text-3xl font-semibold text-slate-700 py-5">
          Get started today with Proactiv to kickstart your marketing efforts
        </p>
        <p className="">
          Proactiv houses the best in class software tools to kickstart your
          marketing journey. Join 127,000+ other users to get started.
        </p>
        <AnimatedTooltipPreview />
        <p className="text-xs mt-1">Trusted by 27,000+ creators</p>
      </div>
      <div className="flex justify-evenly items-center">
        <Button
          variant="outline"
          className="py-5 rounded-lg hover:-translate-y-1 transition duration-400"
        >
          Fine you Mentor
        </Button>
      </div>
    </section>
  );
}
