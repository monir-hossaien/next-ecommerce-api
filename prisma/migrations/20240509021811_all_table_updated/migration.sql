/*
  Warnings:

  - The values [pending,processing,completed] on the enum `invoices_delivery_status` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[brandName]` on the table `brands` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `invoices` MODIFY `delivery_status` ENUM('Pending', 'Processing', 'Completed') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `brands_brandName_key` ON `brands`(`brandName`);
