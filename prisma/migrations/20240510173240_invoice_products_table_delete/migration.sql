/*
  Warnings:

  - You are about to drop the `invoice_products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `invoice_products` DROP FOREIGN KEY `invoice_products_invoice_id_fkey`;

-- DropForeignKey
ALTER TABLE `invoice_products` DROP FOREIGN KEY `invoice_products_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `invoice_products` DROP FOREIGN KEY `invoice_products_user_id_fkey`;

-- DropTable
DROP TABLE `invoice_products`;
