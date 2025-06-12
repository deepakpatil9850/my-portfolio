import React from "react";
import PdfViewer from "./PdfViewer";
import DownloadBtn from "../components/DownloadBtn";
import {Download} from "lucide-react";

const ViewResume = async () => {
  const resData = await fetch(process.env.BACKEND_URL + "/resume");
  const {url} = await resData.json();

  return (
    <section className="min-h-full">
      <PdfViewer fileUrl={url} />
      <div className="text-right mt-3">
        <DownloadBtn backendUrl={process.env.BACKEND_URL as string}>
          <p className=" inline">Download</p>{" "}
          <Download className="inline-block ml-2" />
        </DownloadBtn>
      </div>
    </section>
  );
};

export default ViewResume;
