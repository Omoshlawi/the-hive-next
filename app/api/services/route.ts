import { ServiceSchema } from "@/app/lib/schema/pricing";
import prisma from "@/prisma/client";
import { existsSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { MEDIA_ROOT } from "@/app/lib/constants";
import { upload } from "@/app/lib/serverutils";

export const GET = async (request: NextRequest) => {
  const services = await prisma.service.findMany();
  return NextResponse.json({ results: services });
};

export const POST = async (request: NextRequest) => {
  try {
    const uploader = await upload({ uploadTo: "upload/services", request });
    const image = await uploader.single("image");
  } catch (error: any) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Rest of your code
  console.log(await request.formData());
  return NextResponse.json({ uploaded: "Status" });
};
