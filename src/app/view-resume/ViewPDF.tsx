"use client";

import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import DownloadBtn from "../components/DownloadBtn";
import {Download} from "lucide-react";

const ViewPDF = () => {
  const [numPages, setNumPages] = useState<number>();

  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

  function onDocumentLoadSuccess({numPages}: {numPages: number}): void {
    setNumPages(numPages);
  }

  return (
    <div className="grid justify-center items-center">
      <Document
        file="/resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className=" max-w-max overflow-auto grid gap-3 text-center"
      >
        {numPages !== undefined &&
          numPages > 0 &&
          [...Array(numPages)].fill("*").map((ele, ind) => (
            <div key={ind}>
              <Page pageNumber={ind + 1} />
              <p>
                Page {ind + 1} of {numPages}
              </p>
            </div>
          ))}
      </Document>
      <div className="text-right mt-3">
        <DownloadBtn>
          <p className=" inline">Download</p>{" "}
          <Download className="inline-block ml-2" />
        </DownloadBtn>
      </div>
    </div>
  );
};

export default ViewPDF;
