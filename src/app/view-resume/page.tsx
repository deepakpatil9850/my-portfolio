import React from "react";
import PdfViewer from "./PdfViewer";
import {Download} from "lucide-react";
import Link from "next/link";

const ViewResume = async () => {
  const resData = await fetch(process.env.BACKEND_URL + "/resume");
  const {url} = await resData.json();

  return (
    <section className="min-h-full">
      <PdfViewer fileUrl={url} />
      <div className="text-right mt-3">
        <Link
          href="https://deepak-patil.s3.ap-south-1.amazonaws.com/resume.pdf"
          target="_blank"
          className="fixed right-7 bottom-7 border-secondary border-2  py-3  rounded-full bg-background cursor-pointer px-3.5 hover:border-foreground animate-bounce anima"
        >
          <button className="cursor-pointer">
            <Download />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ViewResume;
