"use client";
import React from "react";
import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { motion } from "framer-motion";

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
      name: "MongoDB",
      src: "/mongo.png",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionLayout heading="Skills">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex gap-5 flex-wrap justify-center"
      >
        {techList.map((tech) => (
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, translateY: -5 }}
            key={tech.name}
            className="flex flex-col justify-center items-center gap-2 cursor-pointer"
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
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  );
};

export default Skills;
