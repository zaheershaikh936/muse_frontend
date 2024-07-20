import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import { IoMdNotifications } from "react-icons/io";

export default function IsLogin() {
  return (
    <>
      <div className="border bg-primary p-1 rounded-full">
        <IoMdNotifications size={30} />
      </div>
      <Avatar>
        <AvatarImage
          className="rounded-full w-full"
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}
