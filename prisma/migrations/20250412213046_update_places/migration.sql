/*
  Warnings:

  - You are about to drop the column `ratingsAverage` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "ratingsAverage" DOUBLE PRECISION NOT NULL DEFAULT -1,
ADD COLUMN     "ratingsCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "ratingsAverage";
