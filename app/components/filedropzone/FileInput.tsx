"use client";
import React, { useState } from "react";
import FileDropZone from "@/app/components/filedropzone/FileDropZone";
import Image from "next/image";
import { FormFile } from "@/app/lib/schema/common";
interface Props {
  value?: File[];
  onValueChange?: (files: File[]) => void;
}
const FileInput: React.FC<Props> = ({ value: files = [], onValueChange }) => {
  const [files_, setFiles_] = useState<string[]>([]);
  Promise.all(files.map((f) => FormFile.fromFile(f))).then((val) =>
    setFiles_(val.map((v) => v.src))
  );
  return (
    <div>
      <FileDropZone onDrop={(accepted) => onValueChange?.(accepted)} />
      {files_.map((file, index) => (
        <div key={index}>
          <Image
            className="w-40 h-40 hover:opacity-30 object-cover"
            src={file}
            key={index}
            width={500}
            height={500}
            alt={`File ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default FileInput;
