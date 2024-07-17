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
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </div>
    </Drawer>
  );
}
