import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowRightSquare } from "lucide-react";

const Projects = () => {
  const imageStyle = {
    width: "100%",
    height: "150px",
  };
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center text-white">
        <h2 className="text-2xl font-sans font-semibold ">Projects</h2>
        <Link href={"/projects"} className="flex items-center gap-2">
          See all the projects <ArrowRightSquare />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-1 gap-y-4 lg:grid-cols-3 lg:gap-x-3 xl:grid-cols-4 md:gap-x-2 md:grid-cols-2 my-8">
        <ProjectCard
          link="https://github.com/KaranBarman/user-management"
          h3="Crud Operations"
          imageSrc="/pro1.jpg"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
        />
        <ProjectCard
          link="https://github.com/KaranBarman/e-commerce"
          h3="Ecommerce webite"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/pro2.jpg"
        />
        <ProjectCard
          link="https://github.com/KaranBarman/user-management"
          h3="Ecommerce webite"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/pro1.jpg"
        />
        <ProjectCard
          link="https://github.com/KaranBarman/user-management"
          h3="Ecommerce webite"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/pro2.jpg"
        />
      </div>
    </div>
  );
};

export default Projects;
