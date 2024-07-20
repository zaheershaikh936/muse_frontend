"use client";
import React, { useState } from "react";
import { TracingBeam } from "../ui/tracing-beam";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
export default function Experiences() {
  const [selectedData, setData] = useState({
    id: 1,
    company: "Mantiqh",
    position: "Backend developer",
    description: "Company 1's description",
    startDate: "Jan 2021",
    location: "India - Karnataka",
    image:
      "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FAdobe%3Falt%3Dmedia%26token%3D1932835d-20f9-4565-a03d-7d36587e1e18&w=128&q=75",
    endDate: "Sep 2022",
    points: [
      {
        id: 1,
        description: "Point 1",
      },
      {
        id: 2,
        description: "Point 2",
      },
      {
        id: 3,
        description: "Point 3",
      },
    ],
    present: false,
  });
  return (
    <section className="w-full mx-auto border text-black rounded-lg mt-5 p-3">
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>
      <div className="grid grid-cols-4 gap-20 py-5 px-56">
        <div>
          {data.map((item: any) => (
            <>
              <Button
                className="bg-transparent mt-5 w-full border"
                onClick={() => setData(item)}
              >
                <div className="flex justify-between gap-2 items-center">
                  <Image
                    src={item.image}
                    alt={item.company}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <p className="text-md font-semibold text-black">
                    {item.company}
                  </p>
                </div>
              </Button>
              <br />
            </>
          ))}
        </div>
        <div className="col-span-3">
          <h2 className="text-2xl py-3">
            {selectedData.position}{" "}
            <span className="text-blue-500"> @ {selectedData.company}</span>
          </h2>
          <p className="py-2">
            {data[0].startDate} - {selectedData.endDate}
          </p>
          <p className="py-2">{selectedData.location}</p>
          {selectedData.points.map((item) => (
            <p key={item.id} className="py-2 flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              {item.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    id: 1,
    company: "Mantiqh",
    position: "Backend developer",
    description: "Company 1's description",
    startDate: "Jan 2021",
    location: "India - Karnataka",
    image:
      "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FAdobe%3Falt%3Dmedia%26token%3D1932835d-20f9-4565-a03d-7d36587e1e18&w=128&q=75",
    endDate: "Sep 2022",
    points: [
      {
        id: 1,
        description: "Point 1",
      },
      {
        id: 2,
        description: "Point 2",
      },
      {
        id: 3,
        description: "Point 3",
      },
    ],
    present: false,
  },
  {
    id: 2,
    company: "Company 2",
    position: "Position 2",
    description: "Company 2's description",
    startDate: "2020-01-01",
    endDate: "2021-01-01",
    image:
      "https://www.preplaced.in/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fpreplaced-upload-prod%2Fo%2Fimage%252Fcomapny-logos%252FAdobe%3Falt%3Dmedia%26token%3D1932835d-20f9-4565-a03d-7d36587e1e18&w=128&q=75",
    points: [
      {
        id: 1,
        description: "Point 1",
      },
      {
        id: 2,
        description: "Point 2",
      },
      {
        id: 3,
        description: "Point 3",
      },
    ],
    present: true,
  },
];
