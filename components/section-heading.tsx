import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-medium capitalize text-4xl mb-6 sm:text-5xl sm:mb-10 mt-8 ml-2 sm:ml-0">
      {children}
    </h2>
  );
}
