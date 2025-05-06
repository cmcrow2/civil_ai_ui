"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Required styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ fileUrl }) => {
  const defaultLayout = defaultLayoutPlugin();

  return (
    <div className="h-full w-full">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
