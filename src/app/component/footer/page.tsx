import React from "react";
import Image from "next/image";
import { logo } from "@/assets/images";
export default function page() {
  return (
    <section className="border border-t">
      <footer className="flex justify-between container py-3">
        <div>
          <div className="flex gap-3">
            <Image src={logo} alt={"logo"} width={30} height={30} />
            <p className="text-2xl font-bold">Muse</p>
          </div>
          <p className="mt-5 text-sm">Copyright © 2024 Proactiv INC</p>
          <p className=" text-sm">All rights reserved</p>
        </div>
        <div className="flex gap-10">
          <ul>
            <li className="font-bold underline py-2">Mentorship</li>
            <li>Explore Mentor</li>
            <li>Become Mentor</li>
          </ul>

          <ul>
            <li className="font-bold underline py-2">Category</li>
            <li>Software Engineer</li>
            <li>Data Science</li>
            <li>Product Manager</li>
            <li>Data Analyst</li>
            <li></li>
          </ul>

          <ul>
            <li className="font-bold underline py-2">Social Media</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
