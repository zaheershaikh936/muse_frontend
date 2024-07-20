import { SelectDropDown } from "@/app/element/select";
import React from "react";
import { mentorT, rating, selectCategory, selectJobRole } from "@/data";
import { MdWork } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Skills from "@/app/component/explore/skills";
import { IoSearch } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { Button } from "@/components/ui/button";
import CardElement from "@/app/element/card";
import { mentor } from "@/data";
import MentorDrawer from "@/app/component/category/drawer";
import Mentors from "@/app/component/category/mentors";
export default function ExploreMentor() {
  return (
    <section className="container mx-auto py-5 ">
      <div className="flex flex-row gap-5 py-3">
        <SelectDropDown
          placeholder={"Job position"}
          inputPlaceholder={"Search job position..."}
          items={selectCategory}
          icon={<MdWork />}
        />
        <SelectDropDown
          placeholder={"Job role"}
          inputPlaceholder={"Search job role..."}
          items={selectJobRole}
          icon={<FaUserAlt />}
        />
        <Button className="rounded-full h-12">
          <IoSearch color="black" size={20} />
        </Button>
      </div>
      <div className="py-3 flex flex-row gap-3">
        <Skills />
        <SelectDropDown
          style="py-3"
          placeholder={"ratings"}
          textHide={true}
          inputPlaceholder={"Search job role..."}
          items={rating}
          icon={<FaStar />}
        />
      </div>
      <div className="border py-3 rounded-full px-5 flex justify-between flex-row items-center">
        <div className="flex gap-2 items-center">
          <IoMdLogIn size={40} color="blue" />
          <p>Sign up and check out all the features</p>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </div>
      <div className="">
        {mentor.map((item: mentorT, index: number) => (
          <MentorDrawer data={item} key={index}>
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
    </section>
  );
}
