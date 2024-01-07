import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <MaxWidthWrapper>
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
            link="https://threads-karan.vercel.app"
            h3="Threads Clone"
            p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
            imageSrc="/pro1.jpg"
          />
          <ProjectCard
            link="https://github.com/KaranBarman/user-management"
            h3="Ecommerce webite"
            p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
            imageSrc="/pro2.jpg"
          />
          <ProjectCard
            link="https://github.com/KaranBarman/user-management"
            h3="Ecommerce webite"
            p="Next JS 14, Typescript, React Hook Form, Shadcn, Tailwind css"
            imageSrc="/pro2.jpg"
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
