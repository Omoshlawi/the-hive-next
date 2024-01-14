"use client";
import { DefaultExtensionType, FileIcon, defaultStyles } from "react-file-icon";
import React, { useEffect, useState } from "react";
import FileDropZone from "@/app/components/filedropzone/FileDropZone";
import Image from "next/image";
import { FormFile } from "@/app/lib/schema/common";
import { fileExtensionsColors } from "@/app/lib/constants";
import prettyBytes from "pretty-bytes";
import { Trash2 } from "lucide-react";
interface Props {
  value?: File[];
  onValueChange?: (files: File[]) => void;
}

interface FilePreview {
  file: File;
  preview?: string;
}

const FileInput: React.FC<Props> = ({ value = [], onValueChange }) => {
  const [files, setFiles] = useState<FilePreview[]>([]);

  useEffect(() => {
    (async () => {
      for (const file of value) {
        const preview = file.type.includes("image")
          ? (await FormFile.fromFile(file)).src
          : undefined;
        setFiles((prevFiles) => [
          ...prevFiles,
          {
            file,
            preview,
          },
        ]);
      }
    })();
  }, [value]);

  return (
    <div className="space-y-3">
      <FileDropZone onDrop={(accepted) => onValueChange?.([...accepted])} />
      {files.map(({ file, preview }, index) => {
        const ext = file.name.split("/").pop()?.split(".").pop();
        return (
          <div key={index} className="grid grid-cols-4">
            {preview ? (
              <Image
                className="w-20 h-20 object-cover rounded-lg "
                src={preview}
                width={200}
                height={100}
                alt={`File ${index}`}
              />
            ) : (
              <div className="w-20 h-20 object-cover rounded-lg py-3 text-center justify-center">
                <FileIcon
                  extension={ext as DefaultExtensionType}
                  {...defaultStyles[ext as DefaultExtensionType]}
                  labelColor={fileExtensionsColors[ext ?? "default"]}
                />
              </div>
            )}
            <div className="col-span-3 flex flex-col">
              <div className="">{file.name}</div>
              <div>{prettyBytes(file.size)}</div>
              <Trash2
                className="text-red-900 hover:opacity-50"
                onClick={() =>
                  onValueChange?.(value.filter((_, ind) => ind !== index))
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FileInput;
