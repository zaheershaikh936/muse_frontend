import React from "react";

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}
export default function Header({ title, children }: HeaderProps) {
  return (
    <div className="py-5 mt-5 flex justify-between">
      <h2 className="text-3xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
