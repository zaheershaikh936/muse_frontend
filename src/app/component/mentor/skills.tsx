import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
import { skills, tools } from "@/data";
export default function Skills() {
  return (
    <section className="w-full mx-auto border text-black rounded-lg mt-5 p-3">
      <h2 className="text-xl font-bold mb-2 border-b">Skills</h2>
      <div className="flex flex-wrap gap-5 ">
        {skills.map((skill) => (
          <Badge variant="outline" className="flex gap-2 hover:bg-gray-200">
            <Image
              src={skill.image || ""}
              alt={skill.name}
              width={20}
              height={20}
            />
            {skill.name}
          </Badge>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-2 border-b mt-10">Tools</h2>
      <div className="flex flex-wrap gap-5 ">
        {tools.map((tool) => (
          <Badge variant="outline" className="flex gap-2 hover:bg-gray-200">
            <Image
              src={tool.image || ""}
              alt={tool.name}
              width={20}
              height={20}
            />
            {tool.name}
          </Badge>
        ))}
      </div>
    </section>
  );
}
