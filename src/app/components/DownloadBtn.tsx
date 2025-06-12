"use client";
import React from "react";

type DownloadBtnProps = {
  children: React.ReactNode;
  backendUrl: string;
};

const DownloadBtn = ({children, backendUrl}: DownloadBtnProps) => {
  // try {
  //   console.log(process.env.BACKEND_URL);
  //   const res = await fetch(process.env.BACKEND_URL + "/resume/download");
  //   const data = await res.json();
  //   console.log(data);
  // } catch (err) {
  //   console.error(err);
  // }
  async function handleClick() {
    const res = await fetch(backendUrl + "/resume/download");
    const data = await res.json();
    const link = document.createElement("a");
    link.href = data.url;
    link.click();
  }

  return (
    <button
      onClick={handleClick}
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
