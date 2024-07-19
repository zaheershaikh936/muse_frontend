import React from "react";
import Image from "next/image";
import { logo } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SearchBar } from "./search";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";
// !other image

export default function Navbar() {
  return (
    <header>
      <nav className="shadow-md">
        <div className="p-3 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt={"logo"} width={60} height={80} />
          </Link>
          <ul className="flex items-center space-x-4 font-semibold">
            <Link
              href={"/pages/explore"}
              className="text-ellipsis text-nowrap text-sm text-slate-700 hover:underline"
            >
              Explore Mentor
            </Link>
            <li className="text-ellipsis text-nowrap text-sm text-slate-700 hover:underline">
              Become Mentor
            </li>
          </ul>
          <SearchBar />
          <div className="flex items-center space-x-3">
            <div className="border bg-primary p-1 rounded-full">
              <IoMdNotifications size={30} />
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </header>
  );
}
