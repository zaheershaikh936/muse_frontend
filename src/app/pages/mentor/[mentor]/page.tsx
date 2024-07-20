import MentorProfile from "@/app/component/mentor/profile";
import React from "react";
import { mentor as data } from "@/data";
import MentorReviews from "@/app/component/mentor/reviews";
import AboutSection from "@/app/component/mentor/about";
import Experiences from "@/app/component/mentor/experiences";
import Skills from "@/app/component/mentor/skills";
export default function Mentor() {
  return (
    <section className="container ">
      <div className="overflow-y-auto h-full py-5">
        <MentorProfile
          bgGroundImage={data[0].bgGroundImage || ""}
          role={data[0].role}
          name={data[0].name}
          title={data[0].title}
          description={data[0].description}
          skills={data[0].skills}
          company={data[0].company}
          experience={data[0].experience}
          id={data[0].id}
        />
        <MentorReviews />
        <AboutSection />
        <Experiences />
        <Skills />
      </div>
    </section>
  );
}
