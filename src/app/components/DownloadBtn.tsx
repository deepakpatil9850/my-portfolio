"use client";
import React from "react";

type DownloadBtnProps = {
  children: React.ReactNode;
};

const DownloadBtn = ({children}: DownloadBtnProps) => {
  const onDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Deepak_Patil_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={onDownloadClick}
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
