"use client";
import React, { useEffect, useState } from "react";
import { useTemplateContext } from "../../useTemplateContext";
import { Template } from "../../page";
import { useParams } from "next/navigation";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
const TemplatePage = () => {
  const params = useParams();
  const [currentTemplate, setCurrentTemplate] = useState<Template>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  function handleTemplateSave() {
    console.log("Template changed!!!!");
  }
  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        setisLoading(true);
        const res = await fetch(
          `http://127.0.0.1:8001/api/templates/${params.id}`
        );
        const data = await res.json();
        setisLoading(false);
        setCurrentTemplate(data);
      } catch (error) {
        console.log(error);
        setError(error instanceof Error ? error.message : "An error occurred");
        setisLoading(false);
      }
    };
    fetchTemplate();
  }, []);
  const handleDownload = () => {
    const node = document.getElementById("template");
    if (!node) {
      console.error("Element with ID 'my-node' not found.");
      return;
    }
    htmlToImage
      .toPng(node)
      .then((dataUrl: string) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "template.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error: unknown) => {
        console.error("Error generating image:", error);
      });
  };
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
           <div id="template">
            <div contentEditable={true} dangerouslySetInnerHTML={{ __html: currentTemplate ? currentTemplate.content : ''}} className="outline-none"/>
           </div>
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
    </div>
  );
};

export default TemplatePage;
