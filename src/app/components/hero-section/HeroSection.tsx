"use client";
import React from "react";
import {Iceland} from "next/font/google";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import {FileSymlink} from "lucide-react";
import { motion } from "framer-motion";

const iceland = Iceland({
  weight: "400",
  variable: "--font-iceland",
  subsets: ["latin"],
  fallback: ["font-sans", "font-mono"],
});

const HeroSection = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse md:items-center items-center md:justify-center justify-between gap-x-12">
      <div className="lg:max-w-2xl max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg"
        >
          <p className={` font-nova sm:mb-2.5 text-primary`}>
            Hey there!👋🏼, I&apos;m
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${iceland.className} tracking-tight text-6xl sm:text-5xl md:text-7xl  sm:mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full font-extrabold dark:text-theme `}
          >
            Deepak Patil
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={` text-primary mb-4 font-nova text-justify`}
          >
            A Software developer who loves bringing ideas to life through code .
            I specialize in crafting clean, responsive, and user-friendly web
            applications using React.js, Node.js, Redux, JavaScript, Tailwind
            CSS, and other modern tools.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="https://deepak-patil.s3.ap-south-1.amazonaws.com/resume.pdf"
              target="_blank"
            >
              <button
                className="border border-secondary  bg-foreground text-background dark:bg-primary dark:border-foreground
              px-7 hover:bg-background py-3  hover:text-foreground
              opacity-100 cursor-pointer
              rounded-3xl m-2 transition duration-500"
              >
                {" "}
                Resume <FileSymlink className="inline-block" size={20} />
              </button>
            </Link>
            <Link href="#contact">
              <Button label="Contact" theme={true} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative md:shrink-0 border-[15px] border-b-transparent border-t-transparent border-l-theme border-r-theme rounded-full "
      >
        <div className="w-[300px]  h-[300px] animate-wiggle overflow-hidden rounded-full">
          <div className="w-full h-[50%] dark:bg-zinc-800  bg-zinc-200"></div>
          <div className="w-full h-[50%] bg-background  "></div>
        </div>
        <Image
          src="/profile-pic.jpg"
          alt="profile pic"
          width={300}
          height={300}
          className="rounded-full absolute p-2 top-0 left-0"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
