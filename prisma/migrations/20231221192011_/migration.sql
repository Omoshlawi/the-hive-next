/*
  Warnings:

  - You are about to drop the `Property` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PropertyTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Propertype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_typeId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyImage" DROP CONSTRAINT "PropertyImage_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyTag" DROP CONSTRAINT "PropertyTag_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyTag" DROP CONSTRAINT "PropertyTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_propertyId_fkey";

-- DropTable
DROP TABLE "Property";

-- DropTable
DROP TABLE "PropertyImage";

-- DropTable
DROP TABLE "PropertyTag";

-- DropTable
DROP TABLE "Propertype";

-- DropTable
DROP TABLE "Tag";

-- DropEnum
DROP TYPE "Status";
