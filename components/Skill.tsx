import React from "react";

interface SkillProps {
  name: string;
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="border border-gray-700 rounded-lg py-1 px-2 text-muted-foreground">
      {name}
    </div>
  );
};

export default Skill;
