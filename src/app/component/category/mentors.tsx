import React from "react";
import Image from "next/image";
import Card from "@/app/element/card";
import { Badge } from "@/components/ui/badge";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { companyT, mentorT, skillsT } from "@/data";

export default function Mentors(data: mentorT) {
  return (
    <section className="py-3">
      <Card
        title={
          <section className="flex gap-5">
            <Image
              src={data.image}
              alt={"mentor_Zaheer_shaikh"}
              width={200}
              height={400}
              className="rounded-lg"
            />
            <div className="py-3">
              <h2 className="text-xl text-start">shishir chandra</h2>

              {/* company */}
              <div className="flex gap-3 py-3 overflow-scroll">
                {data.company.map((company: companyT) => (
                  <div
                    key={company.company}
                    id="company"
                    className="border w-full gap-3 p-3 flex border-gray-200 rounded-lg py-3"
                  >
                    <Image
                      src={company.image}
                      alt={company.company}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <div>
                      <p className="text-sm ">{company.position}</p>
                      <p className="text-sm">{company.company}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* description */}
              <p
                id="description"
                className="line-clamp-4 w-full text-xs leading-[20px] tracking-[0.030px] text-[#667085] lg:text-sm text-start"
              >
                {data.description}
              </p>

              {/* skills */}
              <div className="flex py-4 flex-wrap items-start gap-2 self-stretch overflow-hidden lg:gap-3">
                {data.skills.map(({ name }: skillsT) => (
                  <Badge key={name} variant="outline">
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
          </section>
        }
        content={
          <div className="flex gap-3">
            <div className="flex gap-1 items-center bg-[#fff7ed] p-1 rounded-lg">
              <MdOutlineWorkHistory size={25} color="e86a38" />
              <p className="text-xs text-[#e86a38]">
                {data.experience}+ Years of Experience
              </p>
            </div>
            <div className="flex gap-1 items-center bg-[#ecedfe] p-1 rounded-lg">
              <IoIosPerson size={25} color="9786f2" />
              <p className="text-xs text-[#9786f2]">{data.role}</p>
            </div>
          </div>
        }
      />
    </section>
  );
}
