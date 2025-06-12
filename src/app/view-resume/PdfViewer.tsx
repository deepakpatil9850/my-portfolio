"use client";
import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer = ({fileUrl}: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({numPages}: {numPages: number}): void {
    setNumPages(numPages);
    setLoading(false);
  }

  return (
    <div className="grid justify-center items-center min-h-full">
      {loading && (
        <div className="animate-pulse max-w-max overflow-auto grid gap-3 text-center">
          <div className="h-[600px] w-[500px] bg-gray-300 rounded-lg mb-4" />
          <div className="h-[600px] w-[500px] bg-gray-300 rounded-lg" />
        </div>
      )}
      <Document
        file={fileUrl}
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
    </div>
  );
};

export default PdfViewer;
