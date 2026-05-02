"use client";
import React from "react";

import Image from "next/image";
import SectionLayout from "../SectionLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const WorkHistory = () => {
  const JOINING_DATE = process.env.DATE_OF_JOINING || " July - 2024";

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionLayout heading="My Work Experience">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="border border-tertiary rounded-4xl p-5 md:p-10 bg-background text-justify tracking-tight"
      >
        <Link
          href="https://shilprawebtechnologies.com/"
          target="_blank"
          className="cursor-pointer"
        >
          <motion.div variants={itemVariants} className="flex text-primary mb-5">
            <div className="flex justify-center items-center">
              <Image
                src="/company-logo.png"
                width={100}
                height={100}
                alt="Shilpra Web Technologies"
                className="mr-5"
              />
            </div>
            <div>
              <h4 className="font-mono text-foreground tracking-tight font-bold text-left">
                Shilpra Web Technologies
              </h4>
              <h6 className="font-nova text-primary ">Software Developer</h6>
              <time className="text-sm text-primary mt-2 tracking-widest uppercase">
                {JOINING_DATE} to <span className="text-theme">Present</span>
              </time>
            </div>
          </motion.div>
        </Link>
        <div className=" sm:ml-20 md:ml-30">
          <ul className=" sm:list-disc text-primary">
            <motion.li variants={itemVariants}>
              <p>Assist in project planning and scope definition. </p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <p>
                {" "}
                Design and build RESTful APIs using Express.js and integrating
                with databases.
              </p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <p>
                Collaborating closely with the team to support projects through
                all phases of delivery.
              </p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <p>
                Create responsive and interactive UI components using React.js,
                Hooks, and React Router.
              </p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <p>Implement JWT authentication and role-based access control</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <p>
                Test APIs and optimize performance of frontend and backend
                modules.
              </p>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </SectionLayout>
  );
};

export default WorkHistory;
