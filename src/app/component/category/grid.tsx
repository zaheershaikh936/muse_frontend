import React from "react";
import CategoryList from "./categoryList";
import { categoryAll as data, categoryAllT, mentor, mentorT } from "@/data";
import Mentors from "./mentors";
import MentorDrawer from "./drawer";

export default function GridStyle() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <div className="col-span-1 ">
        {data.map((item: categoryAllT) => (
          <CategoryList
            color={item.color}
            category={item.category}
            subCategory={item.subCategory}
          />
        ))}
      </div>
      <div className="col-span-3">
        {mentor.map((item: mentorT, index: number) => (
          <MentorDrawer
            data={item}
            key={index}
            children={
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
            }
          />
        ))}
      </div>
    </div>
  );
}
