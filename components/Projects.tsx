import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const imageStyle = {
    width: "100%",
    height: "150px",
  };
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-sans font-semibold text-white">Projects</h2>
      <div className="grid grid-cols-1 gap-1 gap-y-4 lg:grid-cols-3 lg:gap-x-3 xl:grid-cols-4 md:gap-x-2 md:grid-cols-2 my-8">
        <ProjectCard
          h3="Crud Operations"
          imageSrc="/pro1.jpg"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
        />
        <ProjectCard
          h3="Ecommerce webite"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/pro2.jpg"
        />
        <ProjectCard
          h3="Ecommerce webite"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/pro1.jpg"
        />
        <ProjectCard
          h3="Ecommerce webite"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/pro2.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;
