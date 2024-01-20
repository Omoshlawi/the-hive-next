import { PropertySchema } from "@/app/lib/schema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = await PropertySchema.safeParseAsync(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  // const property = await prisma.properties.create({ data: validation.data });
  // return NextResponse.json(property, { status: 201 });
};

export const GET = async (request: NextRequest) => {
  const properties = await prisma.properties.findMany();
  return NextResponse.json(properties);
};
