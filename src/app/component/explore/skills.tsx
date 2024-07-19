"use client";
import React, { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { skills, tools, skillsPropT } from "@/data";
import { IoIosClose } from "react-icons/io";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<skillsPropT[]>([]);
  const [selected, setSelected] = useState<skillsPropT[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    const results = skills.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    const toolsResults = tools.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults([...results, ...toolsResults]);
  };

  return (
    <div className="relative w-full ">
      <div className="flex gap-2 flex-wrap">
        {selected.map((item) => (
          <Badge key={item.id} variant="outline" className="flex gap-1">
            <span>{item.name}</span>
            <IoIosClose
              size={18}
              onClick={() =>
                setSelected(selected.filter((i) => i.id !== item.id))
              }
            />
          </Badge>
        ))}
      </div>
      <div className="py-3 items-center">
        <Input
          type="search"
          placeholder="Search skill..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full h-12 rounded-md border border-muted px-4 py-2 focus:border-primary focus:outline-none"
        />
        {searchResults.length > 0 && (
          <div className="absolute z-10 mt-2 w-full max-h-[300px] overflow-auto rounded-md border border-muted bg-background shadow-lg">
            <ul className="divide-y divide-muted/20">
              <IoIosClose
                className="absolute right-2 top-2"
                size={20}
                onClick={() => setSearchResults([])}
              />
              {searchResults.map((result) => (
                <li
                  onClick={() => {
                    if (!selected.length) {
                      setSearchTerm(result.name);
                      setSelected([result]);
                    } else {
                      setSearchTerm(result.name);
                      const newSelected = selected.filter(
                        (item) => item.id !== result.id
                      );
                      setSelected([...newSelected, result]);
                    }
                  }}
                  key={result.id}
                  className="cursor-pointer px-4 py-2 hover:bg-muted/10"
                >
                  {result.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
