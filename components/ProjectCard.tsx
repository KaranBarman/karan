import Image from "next/image";
import Link from "next/link";
import React from "react";
const imageStyle = {
  width: "100%",
  height: "150px",
};

interface ProjectCardProps {
  imageSrc: string;
  h3: string;
  p: string;
  link: string;
}
const ProjectCard = ({ imageSrc, h3, p, link }: ProjectCardProps) => {
  return (
    <Link href={link}>
      <div className="bg-white rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          style={imageStyle}
          width={100}
          height={100}
          unoptimized
          className="object-cover"
          alt="Projects"
        />
        <div className="bg-white p-2.5 py-4">
          <h3 className="font-semibold text-xl">{h3}</h3>
          <p className="text-sm text-muted-foreground h-16">{p}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
