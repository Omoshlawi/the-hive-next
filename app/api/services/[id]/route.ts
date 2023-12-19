import { ServiceSchema } from "@/app/lib/schema/pricing";
import { upload } from "@/app/lib/serverutils";
import prisma from "@/prisma/client";
import { toNumber } from "lodash";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const formData = await request.formData();
    let body = Array.from(formData.entries()).reduce((prev, curr) => {
      const [key, value] = curr;
      if (key === "image" && formData.get("image") instanceof File) {
        return prev;
      }
      return { ...prev, [key]: value };
    }, {});

    if (formData.get("image") instanceof File) {
      const uploader = await upload({
        uploadTo: "/upload/services/",
        formData,
      });
      const image = await uploader.single("image");
      body = { image, ...body };
    }
    const validation = await ServiceSchema.safeParseAsync(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }
    const service = await prisma.service.update({
      where: { id: toNumber(params.id) },
      data: {
        ...validation.data,
        slug: slugify(validation.data.title, { lower: true, trim: true }),
        id: toNumber(params.id),
      },
    });
    return NextResponse.json({ service });
  } catch (error: any) {
    return NextResponse.json({ detail: error.message }, { status: 500 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const id = toNumber(params.id);
  const service = await prisma.service.findUnique({
    where: { id },
  });
  if (!service)
    return NextResponse.json({ detail: "Service not found" }, { status: 404 });
  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ detail: "Service deleted successfully!" });
};
