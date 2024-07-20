import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";

import { mentorT } from "@/data";
import MentorProfile from "../mentor/profile";
import MentorReviews from "../mentor/reviews";
import AboutSection from "../mentor/about";
import Experiences from "../mentor/experiences";
import Skills from "../mentor/skills";
import { FaStar } from "react-icons/fa";

interface MentorDrawerProps {
  children: React.ReactNode;
  data: mentorT;
}
export default function MentorDrawer({ children, data }: MentorDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <div className="overflow-y-auto h-full">
        <DrawerContent className="h-[80%]">
          <DrawerHeader className="container overflow-auto">
            <DrawerTitle>
              <MentorProfile
                bgGroundImage={data.bgGroundImage || ""}
                role={data.role}
                name={data.name}
                title={data.title}
                description={data.description}
                skills={data.skills}
                company={data.company}
                experience={data.experience}
                id={data.id}
              />
              <MentorReviews />
              <AboutSection />
            </DrawerTitle>
            <DrawerDescription>
              <Experiences />
              <Skills />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="container border-t">
            <div className="flex justify-between">
              <div className="flex gap-5">
                <Button variant="outline">View Profile</Button>
                <Button variant="outline">Book a Call</Button>
              </div>
              <div className="">
                <p className="flex gap-1 text-xs items-center">
                  <FaStar color="e86a38" size={20} />
                  <p className="mt-0.5">5.0 (7 Reviews)</p>
                </p>
              </div>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>
  );
}

{
  /* <DrawerClose></DrawerClose>; */
}
