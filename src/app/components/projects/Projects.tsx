import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import {ExternalLink} from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projectList = [
    {
      projectOrder: 1,
      projectImgSrc: "/blinkeyitProject.png",
      projectTitle: "Blinkeyit",
      sourceLink: " ",
      techStack: ["React", "tailwind"],
      description: "this is e-commerce website",
      projectLink: "https://blinkeyit-d8ih.vercel.app/",
    },
    {
      projectOrder: 2,
      projectImgSrc: "/movix.png",
      projectTitle: "Movix",
      sourceLink: "https://github.com/deepakpatil9850/movixGpt",
      techStack: ["React", "tailwind", "Redux"],
      description: "this is Movie trailer showcase website",
      projectLink: "https://movix-deepak.vercel.app/",
    },
    {
      projectOrder: 3,
      projectImgSrc: "/portfolioImg.png",
      projectTitle: "Portfolio",
      sourceLink: "   ",
      techStack: ["Next JS", "Tailwind"],
      description: "this is my Portfolio website",
      projectLink: " ",
    },
    {
      projectOrder: 4,
      projectImgSrc: "/yt.png",
      projectTitle: "Youtube UI clone",
      sourceLink: "https://github.com/deepakpatil9850/youtube_lite",
      techStack: ["React", "Tailwind"],
      description: "this is youtube clone website",
      projectLink: "https://youtube-lite-psi.vercel.app/",
    },
    {
      projectOrder: 5,
      projectImgSrc: "/yt.png",
      projectTitle: "Dashboard UI",
      sourceLink: "   ",
      techStack: ["React", "Tailwind"],
      description: "this project is under construction ",
      projectLink: "https://youtube-lite-psi.vercel.app/",
    },
  ];
  return (
    <SectionLayout heading="Projects">
      <div className="grid gap-6 justify-center items-center md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <Card
            key={project.projectOrder}
            description={project.description}
            projectImgSrc={project.projectImgSrc}
            projectLink={project.projectLink}
            projectTitle={project.projectTitle}
            techStack={project.techStack}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

interface CardPropsTypes {
  projectImgSrc: string;
  projectTitle: string;
  sourceLink?: string | undefined;
  techStack?: string[] | undefined;
  description: string;
  projectLink: string;
}

const Card = ({
  projectTitle,
  projectImgSrc,
  sourceLink,
  techStack,
  description,
  projectLink,
}: CardPropsTypes) => {
  return (
    <div className="border border-tertiary  overflow-hidden bg-background rounded-2xl flex flex-col max-w-md min-w-[250px]">
      <Link href={projectLink} target="_blank">
        <Image
          src={projectImgSrc}
          width={500}
          height={300}
          alt=""
          className="object-cover border-b border-b-secondary"
        />
      </Link>

      <div className="p-2">
        <div className="flex justify-between items-center">
          <h6 className="mb-2">{projectTitle}</h6>
          {sourceLink !== undefined && sourceLink.trim() !== "" && (
            <Link href={sourceLink} target="_blank">
              <button className="text-sm py-0.5 px-2 rounded-2xl border border-secondary text-primary">
                source{" "}
                <ExternalLink strokeWidth={1} size={16} className="inline" />
              </button>
            </Link>
          )}
        </div>
        <p className="text-justify text-sm text-primary">{description}</p>
        <div className="flex flex-wrap gap-1 text-xs mt-1 text-primary">
          {techStack?.map((tech) => (
            <p
              key={tech}
              className="border border-secondary px-2 py-0.5 rounded-4xl"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
