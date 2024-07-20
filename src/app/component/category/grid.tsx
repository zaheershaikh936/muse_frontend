import React from "react";
import CategoryList from "./categoryList";
import { categoryAll as data, categoryAllT, mentor, mentorT } from "@/data";
import Mentors from "./mentors";
import MentorDrawer from "./drawer";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

export default function GridStyle() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-1 ">
        {data.map((item: categoryAllT) => (
          <div key={item.id}>
            <CategoryList
              color={item.color}
              category={item.category}
              subCategory={item.subCategory}
            />
          </div>
        ))}
      </div>
      <div className="col-span-3">
        {mentor.map((item: mentorT, index: number) => (
          <MentorDrawer key={index} data={item}>
            <Mentors
              id={item.id}
              image={item.image}
              name={item.name}
              title={item.title}
              description={item.description}
              skills={item.skills}
              company={item.company}
              experience={item.experience}
              role={item.role}
            />
          </MentorDrawer>
        ))}
      </div>
    </div>
  );
}
