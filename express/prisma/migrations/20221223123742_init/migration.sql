/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Image] ADD [number] INT NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[Image] ADD CONSTRAINT [Image_number_key] UNIQUE NONCLUSTERED ([number]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
