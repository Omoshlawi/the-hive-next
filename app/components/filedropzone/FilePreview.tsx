import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FormFile } from "@/app/lib/schema/common";
import prettyBytes from "pretty-bytes";
import { fileExtensionsColors } from "@/app/lib/constants";
import { DefaultExtensionType, FileIcon, defaultStyles } from "react-file-icon";
import { Trash2 } from "lucide-react";

const FilePreview = ({
  file,
  onDelete,
}: {
  file: File;
  onDelete?: () => void;
}) => {
  const ext = file.name.split("/").pop()?.split(".").pop();
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    (async () => {
      const preview = file.type.includes("image")
        ? (await FormFile.fromFile(file)).src
        : undefined;
      setPreview(preview);
    })();
  }, []);
  return (
    <div className="grid grid-cols-4">
      {preview ? (
        <Image
          className="w-20 h-20 object-cover rounded-lg "
          src={preview}
          width={200}
          height={100}
          alt={file.name}
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
        <Trash2 className="text-red-900 hover:opacity-50" onClick={onDelete} />
      </div>
    </div>
  );
};

export default FilePreview;
