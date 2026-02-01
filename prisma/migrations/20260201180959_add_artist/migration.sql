/*
  Warnings:

  - Added the required column `album` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Song" ADD COLUMN     "album" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Artist" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "instrument" TEXT,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);
