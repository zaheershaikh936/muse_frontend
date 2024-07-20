import React from "react";
// !UI component import
import { FlipWords } from "@/app/component/ui/flip-words";
import { HeroHighlight } from "@/app/component/ui/hero-highlight";
import { Button } from "@/components/ui/button";
// !other import stack file
import Header from "@/app/component/header";
import { CarouselPage } from "@/app/component/carousel";
import Mentorship from "@/app/component/home/mentorship";
import Solution from "@/app/component/home/solution";
import Faqs from "@/app/component/home/faqs";
import Category from "@/app/component/home/category";
import CallAction from "@/app/component/home/callAction";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroHighlight>
        <p className="text-4xl font-semibold text-slate-700">
          <span className="text-4xl font-semibold bg-primary px-3 rounded-lg">
            Accelerate
          </span>{" "}
          your professional growth
        </p>
        <p className="mt-5 text-4xl font-semibold text-slate-700">
          with Long-Term{" "}
          <span className="text-4xl font-semibold bg-first-color bg-primary px-3 rounded-lg">
            Mentorship
          </span>
        </p>
        <div className="flex justify-evenly py-8">
          <Button
            variant="outline"
            className="py-5 rounded-lg hover:-translate-y-1 transition duration-400"
          >
            Fine you Mentor
          </Button>
          <Button
            variant="outline"
            className="py-5 rounded-lg hover:-translate-y-1 transition duration-400"
          >
            Become a Mentor
          </Button>
        </div>
        <span className="text-slate-700 text-xl font-bold">
          Achieve your{" "}
          <FlipWords
            duration={4000}
            words={["CAREER-GOALS", "AMBITIONS", "ASPIRATIONS"]}
          />{" "}
          quicker than ever with personalized long-term mentorship
        </span>
      </HeroHighlight>
      <div className="container py-5">
        <Category />
        <div>
          <Header title="Categories">
            <Link
              href="/pages/category"
              className="underline hover:bg-transparent"
            >
              View All
            </Link>
          </Header>
          <CarouselPage />
        </div>
        <Mentorship />
        <Solution />
        <Faqs />
        <CallAction />
      </div>
    </div>
  );
}
