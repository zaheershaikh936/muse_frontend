import { Button } from "@/components/ui/button";
import { categoryAllT, subCategoryAllT } from "@/data";
import React from "react";

interface categoryListT {
  color: string;
  category: string;
  subCategory: subCategoryAllT[];
}
export default function CategoryList({
  color,
  category,
  subCategory,
}: categoryListT) {
  const categoryColor = `w-full ${color} py-3 px-4 items-center rounded-lg`;
  return (
    <section className="border-b py-3">
      <div className={categoryColor}>
        <h2 className="text-md font-semibold">{category}</h2>
      </div>
      <div className="mt-4 px-3">
        <hr className="" />
        {subCategory.map((item: subCategoryAllT) => {
          const subCategoryStyle = `justify-start text-sm text font-semibold py-5 px-3 hover:underline hover:bg-transparent mt-2 rounded-lg w-full`;
          return (
            <Button variant="ghost" className={subCategoryStyle}>
              {item.name}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
