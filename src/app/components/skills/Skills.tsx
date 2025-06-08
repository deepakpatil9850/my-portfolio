import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";

const Skills = () => {
  const techList = [
    {name: "Node", src: "/node.png"},
    {
      name: "javaScript",
      src: "/js.png",
    },
    {
      name: "TypeScript",
      src: "/ts.png",
    },
    {
      name: "React",
      src: "/react.png",
    },
    {
      name: "Redux",
      src: "/redux.png",
    },
    {
      name: "Express JS",
      src: "/ex.png",
    },
    {
      name: "HTML 5",
      src: "/html.png",
    },
    {
      name: "CSS 3",
      src: "/css.png",
    },
    {
      name: "Tailwind CSS",
      src: "/tailwind.png",
    },
    {
      name: "Bootstrap",
      src: "/bs.png",
    },
    {
      name: "SASS",
      src: "/sass.png",
    },
    {
      name: "Webpack",
      src: "/wbpack.png",
    },
    {
      name: "Material UI",
      src: "/mui.png",
    },
  ];
  return (
    <SectionLayout heading="Skills">
      <div className="flex gap-5 flex-wrap justify-center">
        {techList.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col justify-center items-center gap-2"
          >
            <Image
              alt={tech.name}
              src={tech.src}
              height={50}
              width={50}
            ></Image>{" "}
            <p className="px-3 bg-background border border-tertiary rounded-2xl text-primary">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Skills;
