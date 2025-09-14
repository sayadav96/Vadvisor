import React from "react";
import { Heading, Paragraph, SubHeading } from "@/ui/typography";

export const SectionIntro = ({
  subHeadingText,
  headingtext1,
  headingtext2,
  headingtext3,
  paragraph,
}) => {
  return (
    <div className="space-y-4">
      {subHeadingText && (
        <SubHeading
          text={subHeadingText}
          className={"text-xl text-[#F4A53C]"}
        ></SubHeading>
      )}
      {headingtext1 && (
        <Heading
          text1={headingtext1}
          highlightedText2={headingtext2}
          text3={headingtext3}
          className={"text-4xl text-[#434343]"}
        ></Heading>
      )}
      {Paragraph && (
        <Paragraph
          text={paragraph}
          className={"text-585858[#] max-w-[700px] text-lg"}
        ></Paragraph>
      )}
    </div>
  );
};
