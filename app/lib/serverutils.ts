import { NextRequest } from "next/server";
import path from "path";
import fs, { unlink } from "fs/promises";
import { MEDIA_ROOT } from "./constants";
import { existsSync } from "fs";
import { fileTypeFromBuffer } from "file-type";
import { slugify } from "./utils";

export const upload = async ({
  uploadTo,
  request,
  validations = {
    allowedTypes: ["image/jpeg", "image/png"],
    maxSize: 5 * 1024 * 1024, // 5 MB
  },
}: {
  uploadTo: string;
  request: NextRequest;
  validations?: {
    allowedTypes?: string[];
    maxSize?: number;
  };
}) => {
  const destinationDirPath = path.join(
    process.cwd(),
    `public/${MEDIA_ROOT}/${uploadTo}`
  );

  if (!existsSync(destinationDirPath)) {
    await fs.mkdir(destinationDirPath, { recursive: true });
  }

  const generateUniqueFileName = (file: File) =>
    slugify(`${Date.now()} ${file.name}`);

  const validateFile = async (file: File) => {
    const buffer = await file.arrayBuffer();
    const type = await fileTypeFromBuffer(buffer);

    if (!type || !validations.allowedTypes!.includes(type.mime)) {
      throw new Error("Invalid file type");
    }

    if (file.size > validations!.maxSize!) {
      throw new Error("File size exceeds the limit");
    }

    return buffer;
  };

  const getResourceUrl = (path: string) => `${MEDIA_ROOT}/${uploadTo}/${path}`;

  const validateAndsaveFile = async (file: File) => {
    const buffer = await validateFile(file);
    const name = generateUniqueFileName(file);
    const abs = path.join(destinationDirPath, name);
    await fs.writeFile(abs, Buffer.from(buffer));
    return { uri: getResourceUrl(name), absolutePath: abs };
  };


  return {
    single: async (field: string) => {
      let savingFilePath: string | undefined;
      try {
        const formData = await request.formData();
        const file = formData.get(field) as File;

        if (!file) {
          throw new Error("No file found in the form data");
        }
        const { uri, absolutePath } = await validateAndsaveFile(file);
        savingFilePath = absolutePath;
        return uri;
      } catch (error) {
        console.error("Error uploading file:", error);
        // Rollback: Delete the uploaded file
        if (savingFilePath) {
          await unlink(savingFilePath);
        }
        throw error;
      }
    },
    multiple: async (field: string) => {
      let uploadedFiles: string[] = [];
      let uploadedUris: string[] = [];
      try {
        const formData = await request.formData();
        const files = formData.getAll(field) as File[];

        for (const file of files) {
          let filePath: string | undefined;
          try {
            const { uri, absolutePath } = await validateAndsaveFile(file);
            uploadedFiles.push(absolutePath);
            uploadedUris.push(uri);
          } catch (error) {
            console.error("Error uploading file:", error);
            // Handle the error gracefully, e.g., return a response or throw a custom error
            // Rollback: Delete the uploaded files
            if (filePath) {
              await Promise.all(uploadedFiles.map((file) => unlink(file)));
            }
            throw error;
          }
        }
        return uploadedUris;
      } catch (error) {
        console.error("Error uploading multiple files:", error);
        // Handle the error gracefully, e.g., return a response or throw a custom error
      }
    },
  };
};
