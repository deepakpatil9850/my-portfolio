import React from "react";
import {
  // Fredericka_the_Great,
  // Londrina_Outline,
  // Gabriela,
  // Electrolize,

  Iceland,
} from "next/font/google";
import Image from "next/image";
import Button from "../Button";
import DownloadBtn from "../DownloadBtn";
import Link from "next/link";

// const frederickaTheGreat = Fredericka_the_Great({
//   weight: "400",
//   variable: "--font-fredericTheGreat",
//   subsets: ["latin"],
//   fallback: ["font-sans", "font-mono"],
// });

// const gabriela = Gabriela({
//   weight: "400",
//   variable: "--font-fredericTheGreat",
//   subsets: ["latin"],
//   fallback: ["font-sans", "font-mono"],
// });

const iceland = Iceland({
  weight: "400",
  variable: "--font-iceland",
  subsets: ["latin"],
  fallback: ["font-sans", "font-mono"],
});

// const electrolize = Electrolize({
//   weight: "400",
//   variable: "--font-electrolize",
//   subsets: ["latin"],
//   fallback: ["font-sans", "font-mono"],
// });

// const londrinaOutline = Londrina_Outline({
//   variable: "--font-outline",
//   weight: "400",
//   fallback: ["font-sans", "font-mono"],
//   subsets: ["latin"],
// });
const HeroSection = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse md:items-center items-center md:justify-center justify-between gap-x-12">
      <div className="lg:max-w-2xl max-w-2xl">
        <div className="">
          <p className={` font-nova mb-2.5 text-primary`}>
            Hey there!, My name is
          </p>
          <h1
            className={`${iceland.className} tracking-tight text-6xl sm:text-5xl md:text-7xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full font-extrabold dark:text-theme `}
          >
            Deepak Patil
          </h1>
          <p className={` text-primary mb-4 font-nova`}>
            I&apos;m a frontend developer who loves bringing ideas to life
            through code. I specialize in crafting clean, responsive, and
            user-friendly web applications using React.js, JavaScript, Tailwind
            CSS, and other modern tools.
          </p>
          <div>
            <DownloadBtn backendUrl={process.env.BACKEND_URL as string}>
              {" "}
              Download
            </DownloadBtn>
            <Link href="#contact">
              <Button label="Contact" theme={true} />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative md:shrink-0 border-[15px] border-b-transparent border-t-transparent border-l-theme border-r-theme rounded-full ">
        <div className="w-[300px]  h-[300px] animate-wiggle overflow-hidden rounded-full">
          <div className="w-full h-[50%] dark:bg-zinc-800  bg-zinc-200"></div>
        </div>
        <Image
          src="/profile-pic.png"
          alt="profile pic"
          width={300}
          height={300}
          className="rounded-full absolute p-2 top-0 left-0  "
        />
      </div>
    </section>
  );
};

export default HeroSection;
