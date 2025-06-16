"use client";
import React from "react";

type DownloadBtnProps = {
  children: React.ReactNode;
};

const DownloadBtn = ({children}: DownloadBtnProps) => {
  return (
    <button
      className="border border-secondary  bg-foreground text-background dark:bg-primary dark:border-foreground
        px-7 hover:bg-background py-3  hover:text-foreground
      opacity-100 cursor-pointer
      rounded-3xl m-2 transition duration-500"
    >
      {children}
    </button>
  );
};

export default DownloadBtn;
