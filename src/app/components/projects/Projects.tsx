import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import {ExternalLink} from "lucide-react";
import Link from "next/link";

const Projects = () => {
  const projectList = [
    {
      projectOrder: 1,
      projectImgSrc: "/blinkeyitProject.jpeg",
      projectTitle: "Blinkeyit",
      sourceLink: "https://github.com/deepakpatil9850/blinkeyit-ecom",
      techStack: [
        "React",
        "Redux",
        "Tailwind",
        "Axios",
        "Node JS",
        "Express",
        "MongoDB",
      ],
      description:
        "This is e-commerce Project enabling users to browse and purchase products across various categories. Implemented key functionalities such as user authentication, product search, cart management, admin dashboard, product management, order management and a secure payment process",
      projectLink: "https://blinkeyit-d8ih.vercel.app/",
    },
    {
      projectOrder: 2,
      projectImgSrc: "/movix.jpeg",
      projectTitle: "Movix",
      sourceLink: "https://github.com/deepakpatil9850/movixGpt",
      techStack: ["React", "Redux", "SCSS", "Axios", "Rest API"],
      description:
        "In this project I have implemented suspense, shimmer UI and lazy loading Developed mobile-first and responsive web design that adapt fluidly to various screen sizes and orientation, ensuring a consistent user experience across devices and Implemented efficient advanced search technique to increase web app performance",
      projectLink: "https://movix-deepak.vercel.app/",
    },
    {
      projectOrder: 3,
      projectImgSrc: "/portfolio.jpeg",
      projectTitle: "Portfolio",
      sourceLink: "https://github.com/deepakpatil9850/my-portfolio",
      techStack: ["Next JS", "Tailwind", "Typescript", "Rest API", "AWS S3"],
      description:
        "This is my Portfolio website, It has dark mode, dynamic routing, and responsive design. It is built using Next.js and Tailwind CSS, showcasing my skills and projects effectively.It has view and download resume feature, which allows users to view and download my resume directly from the website.",
      projectLink: "/",
    },
    {
      projectOrder: 4,
      projectImgSrc: "/yt.jpeg",
      projectTitle: "Youtube UI clone",
      sourceLink: "https://github.com/deepakpatil9850/youtube_lite",
      techStack: ["React", "Tailwind", "Axios", "Context API"],
      description:
        "This is youtube clone project,It has search feature using realtime youtube suggestions API Improved web app performance by implementing rendering while fetching technique using suspense, shimmer UI and lazy loading. Created responsive components applying Mobile first design approach",
      projectLink: "https://youtube-lite-psi.vercel.app/",
    },
    {
      projectOrder: 5,
      projectImgSrc: "/blinkeyitProject.jpeg",
      projectTitle: "Dashboard UI",
      sourceLink: " ",
      techStack: [
        "Next JS",
        "Tailwind",
        "Material UI",
        "Typescript",
        "Storybook",
      ],
      description:
        "This project is under construction. It has a dashboard UI built using Next.js, Tailwind CSS, Material UI, and Typescript. It includes various components and features for managing data and visualizing information effectively.  I will update it soon.",
      projectLink: "",
      isUnderConstruct: true,
    },
  ];
  return (
    <SectionLayout heading="Projects">
      <div className="grid gap-12 sm:gap-6 justify-center items-start md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <Card
            key={project.projectOrder}
            description={project.description}
            projectImgSrc={project.projectImgSrc}
            projectLink={project.projectLink}
            projectTitle={project.projectTitle}
            techStack={project.techStack}
            sourceLink={project.sourceLink}
            isUnderConstruct={project.isUnderConstruct}
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
  isUnderConstruct?: boolean;
}

const Card = ({
  projectTitle,
  projectImgSrc,
  sourceLink,
  techStack,
  description,
  projectLink,
  isUnderConstruct,
}: CardPropsTypes) => {
  return (
    <div className="border border-secondary  overflow-hidden bg-background rounded-2xl flex flex-col max-w-md min-w-[250px]">
      <Link href={projectLink} target="_blank">
        <Image
          src={projectImgSrc}
          width={500}
          height={300}
          alt=""
          className={`object-cover border-b border-b-secondary ${
            isUnderConstruct ? "blur-lg" : " "
          } `}
        />
      </Link>

      <div className="p-2">
        <div className="flex justify-between items-center p-2">
          <h6 className=" ">{projectTitle}</h6>
          {sourceLink !== undefined && sourceLink.trim() !== "" && (
            <Link href={sourceLink} target="_blank">
              <button className="text-sm py-0.5 px-2 hover:bg-tertiary cursor-pointer rounded-2xl border border-secondary text-primary">
                source{" "}
                <ExternalLink strokeWidth={1} size={16} className="inline" />
              </button>
            </Link>
          )}
        </div>
        <p className="text-justify text-sm text-primary p-1">{description}</p>
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
