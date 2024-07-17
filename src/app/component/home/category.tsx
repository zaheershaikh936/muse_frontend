import { card, cardProp } from "@/data";
import React from "react";
import { FaUsersLine } from "react-icons/fa6";
import Card from "../../element/card";

export default function Category() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-3">
        {card.map((item: cardProp) => {
          return (
            <Card
              title={
                <div className="flex justify-between gap-10">
                  <h3 className="text-xl text-slate-700">{item.title}</h3>
                  <div className="p-2 bg-[#e5e5e5] rounded-full text-white">
                    <FaUsersLine color="black" size={35} />
                  </div>
                </div>
              }
              content={
                <div>
                  <p className="text-slate-700">{item.content}</p>
                </div>
              }
            />
          );
        })}
      </div>
    </section>
  );
}
