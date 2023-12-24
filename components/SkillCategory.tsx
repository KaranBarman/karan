import React from "react";
import Skill from "./Skill";

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

const SkillCategory = ({ category, skills }: SkillCategoryProps) => {
  return (
    <div className=" border border-gray-700 rounded-lg p-4">
      <h3 className="text-gray-300">{category}</h3>
      <div className="flex flex-wrap mt-2 gap-1">
        {skills.map((skill) => (
          <Skill name={skill} key={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
