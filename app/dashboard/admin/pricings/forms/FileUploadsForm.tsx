"use client";

import FileInput from "@/app/components/filedropzone/FileInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import React from "react";

interface Props {
  files?: File[];
  onFilesChange?: (files: File[]) => void;
}

const FileUploadsForm: React.FC<Props> = ({ files = [], onFilesChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload photo</CardTitle>
        <CardDescription>Listing cover photo</CardDescription>
      </CardHeader>
      <CardContent>
        <FileInput value={files} onValueChange={onFilesChange} maxFiles={1} />
      </CardContent>
    </Card>
  );
};

export default FileUploadsForm;
