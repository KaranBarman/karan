import React from "react";
import Skill from "./Skill";
import SkillCategory from "./SkillCategory";
import Link from "next/link";
import { ArrowRightSquare, Download } from "lucide-react";
import { Button } from "./ui/button";
import { handleDownload } from "@/lib/downlaodpdf";

const Skills = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center text-white">
        <h2 className="text-2xl font-sans font-semibold">What i know</h2>
        <Button
          className="flex items-center gap-2"
          variant={"ghost"}
          onClick={handleDownload}
        >
          Download Resume <Download />
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-1 gap-y-4 lg:grid-cols-3 lg:gap-x-3 xl:grid-cols-4 md:gap-x-2 md:grid-cols-2 my-8">
        <SkillCategory
          category="Frontend"
          skills={[
            "Typescript",
            "Javascript",
            "React JS",
            "Next JS",
            "trpc",
            "Shadcn",
            "Tailwind css",
            "Redux",
          ]}
        />
        <SkillCategory
          category="Backend"
          skills={["Node JS", "Express JS", "Typescript", "trpc"]}
        />
        <SkillCategory category="DevOps" skills={["Docker", "Git"]} />
        <SkillCategory category="Database" skills={["MongoDB", "PostgreSQL"]} />
      </div>
    </div>
  );
};

export default Skills;
