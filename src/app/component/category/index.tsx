import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Card from "../../element/card";
import React from "react";
import { GrCloudSoftware } from "react-icons/gr";

interface CategoryCardProps {
  color: string;
  secondaryColor: string;
  category: string;
  subCategory: string;
}
export default function Category({
  color,
  secondaryColor,
  category,
  subCategory,
}: CategoryCardProps) {
  const iconStyle = `p-3 rounded-full text-white ${secondaryColor}`;
  const buttonStyle = `h-2 w-full ${secondaryColor} rounded-sm`;
  return (
    <div>
      <Card
        style={color}
        title={
          <div className="flex items-center gap-10">
            <h3 className="text-xl text-slate-700">
              <div className={iconStyle}>
                <GrCloudSoftware className="text-black" size={25} />
              </div>
            </h3>
          </div>
        }
        description={
          <div>
            <p className="text-slate-700 py-3">
              <h3 className="font-semibold text-lg">{category}</h3>
            </p>
          </div>
        }
        content={
          <div>
            <p className="text-slate-700 font-semibold text-sm">
              {subCategory}
            </p>
            <div className="py-2">
              <div className="flex gap-1">
                <button className={buttonStyle} />
                <button className={buttonStyle} />
                <button className={buttonStyle} />
                <button className={buttonStyle} />
              </div>
            </div>
          </div>
        }
        footer={
          <div className="flex gap-3 items-center">
            <div className="rounded-full flex justify-items-end -space-x-4">
              <Avatar className="border border-white">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border border-white">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border border-white">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border border-white">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h3 className="text-xl text-slate-700 font-semibold">
                3.5k month
              </h3>
            </div>
          </div>
        }
      />
    </div>
  );
}
