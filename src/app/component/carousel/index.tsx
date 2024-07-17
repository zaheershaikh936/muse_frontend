import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Category from "../category";
import { category, categoryT } from "@/data";

export function CarouselPage() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {category?.map((item: categoryT, index: number) => (
          <CarouselItem
            key={index}
            className="pl-1 md:basis-1/2 lg:basis-1/4 ml-3"
          >
            <Category
              color={item.color}
              secondaryColor={item.secondaryColor}
              category={item.category}
              subCategory={item.subCategory}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
