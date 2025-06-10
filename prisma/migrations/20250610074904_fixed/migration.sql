/*
  Warnings:

  - You are about to drop the column `endCate` on the `Election` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Election` table without a default value. This is not possible if the table is not empty.
  - Added the required column `electionId` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Election" DROP COLUMN "endCate",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Position" ADD COLUMN     "electionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_electionId_fkey" FOREIGN KEY ("electionId") REFERENCES "Election"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
