/*
  Warnings:

  - You are about to drop the column `createAt` on the `brands` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `brands` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `product_details` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `product_details` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `brands` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `categories` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `product_details` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `products` DROP COLUMN `createAt`,
    DROP COLUMN `updateAt`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
