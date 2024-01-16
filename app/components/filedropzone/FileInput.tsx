"use client";
import React, { useEffect, useState } from "react";
import FileDropZone from "./FileDropZone";
import FilePreview from "./FilePreview";
interface Props {
  value?: File[];
  onValueChange?: (files: File[]) => void;
}

const FileInput: React.FC<Props> = ({ value = [], onValueChange }) => {
  return (
    <div className="space-y-3">
      <FileDropZone
        onDrop={(accepted) => onValueChange?.([...value, ...accepted])}
      />
      {value.map((file, index) => (
        <FilePreview
          key={index}
          file={file}
          onDelete={() => onValueChange?.(value.filter((f, i) => i !== index))}
        />
      ))}
    </div>
  );
};

export default FileInput;
