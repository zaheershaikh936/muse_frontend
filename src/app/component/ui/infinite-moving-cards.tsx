"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { mentor } from "@/data";
import Link from "next/link";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right" | "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      let transformDirection = "";
      switch (direction) {
        case "left":
          transformDirection = "translateX(-100%)";
          break;
        case "right":
          transformDirection = "translateX(100%)";
          break;
        case "up":
          transformDirection = "translateY(-100%)";
          break;
        case "down":
          transformDirection = "translateY(100%)";
          break;
      }
      containerRef.current.style.setProperty(
        "--transform-direction",
        transformDirection
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s";
      switch (speed) {
        case "fast":
          duration = "20s";
          break;
        case "normal":
          duration = "40s";
          break;
        case "slow":
          duration = "80s";
          break;
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 flex-nowrap",
          direction === "up" || direction === "down" ? "flex-col" : "flex-row",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name + idx}
          >
            <Link href={`/pages/mentor/${mentor[0].id}`}>
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="flex flex-row items-center gap-7">
                  <Image
                    src={mentor[0].image}
                    alt={mentor[0].name}
                    width={100}
                    height={0}
                    className="rounded-full w-24 h-24"
                  />
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <div>
                      <span className="flex flex-col gap-1">
                        <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                          {mentor[0].name}
                        </span>
                        <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                          {mentor[0].role}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal mt-5">
                    {mentor[0].description}
                  </span>
                </div>
              </blockquote>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
