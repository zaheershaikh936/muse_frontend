import { Badge } from "@/components/ui/badge";
import React from "react";
import Image from "next/image";
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

const skills = [
  {
    id: 1,
    name: "React native",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 2,
    name: "Angular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png",
  },
  {
    id: 3,
    name: "Vue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2048px-Vue.js_Logo_2.svg.png",
  },
  {
    id: 4,
    name: "Flutter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flutter_logo.svg/2560px-Flutter_logo.svg.png",
  },
  {
    id: 5,
    name: "java",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Java_Logo.svg/1200px-Java_Logo.svg.png",
  },
  {
    id: 6,
    name: "React JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 7,
    name: "Node JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
  },
  {
    id: 8,
    name: "Typescript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
  },
  {
    id: 9,
    name: "C++",
  },
  {
    id: 1,
    name: "React native",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 2,
    name: "Angular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png",
  },
  {
    id: 3,
    name: "Vue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2048px-Vue.js_Logo_2.svg.png",
  },
  {
    id: 4,
    name: "Flutter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flutter_logo.svg/2560px-Flutter_logo.svg.png",
  },
  {
    id: 5,
    name: "java",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Java_Logo.svg/1200px-Java_Logo.svg.png",
  },
  {
    id: 6,
    name: "React JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 7,
    name: "Node JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
  },
  {
    id: 8,
    name: "Typescript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png",
  },
  {
    id: 9,
    name: "C++",
  },
];

const tools = [
  {
    id: 1,
    name: "Git",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png",
  },
  {
    id: 2,
    name: "Jira",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Jira_logo.svg",
  },
  {
    id: 3,
    name: "Github",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png",
  },
];
