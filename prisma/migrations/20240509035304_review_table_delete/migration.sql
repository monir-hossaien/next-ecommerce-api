/*
  Warnings:

  - You are about to drop the `product_reviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_reviews` DROP FOREIGN KEY `product_reviews_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_reviews` DROP FOREIGN KEY `product_reviews_product_id_fkey`;

-- DropTable
DROP TABLE `product_reviews`;
