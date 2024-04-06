"use client";
import { UploadFile } from "@/app/lib/entities/files";
import React, { useState } from "react";

interface Props {
  images?: UploadFile[];
}

const ImageDisplay: React.FC<Props> = ({ images = [] }) => {
  const [currentImage, setCurrentIage] = useState<UploadFile>(images[0]);
  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Carousel */}
      <img
        src={
          currentImage
            ? `/api/proxy/files/${currentImage.path}?q=100`
            : "https://via.placeholder.com/1200x400?text=Property image"
        }
        alt={""}
        className="bg-indigo-800  object-cover h-[80%] w-full"
      />
      {/* Thumbnailes */}
      <div className="flex grow overflow-x-auto justify-center space-x-2 my-2">
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={`/api/proxy/files/${image.path}`}
              alt={""}
              className="bg-indigo-800 object-cover w-100 h-100 hover:opacity-50 hover:cursor-pointer"
              onClick={() => setCurrentIage(image)}
            />
          ))
        ) : (
          <img
            src={`https://via.placeholder.com/1200x400?text=Thumnail`}
            alt={""}
            className="bg-indigo-800 object-cover w-100 h-100 hover:opacity-50 hover:cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default ImageDisplay;
