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
          link="https://threads-karan.vercel.app/"
          h3="Threads clone"
          imageSrc="/Screenshot (372).png"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
        />
        <ProjectCard
          link="https://durga-digitals.vercel.app/"
          imageSrc="/Screenshot (371).png"
          h3="My Freelancing Website"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
        />
        <ProjectCard
          link="https://schema-flor.vercel.app"
          h3="Schema Flor"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/Screenshot (370).png"
        />
        <ProjectCard
          link="https://flashcards-nine-iota.vercel.app/"
          h3="Flashcards"
          p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
          imageSrc="/ss.png"
        />
      </div>
    </div>
  );
};

export default Projects;
