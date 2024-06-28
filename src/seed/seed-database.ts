require('dotenv').config();

import prisma from '../lib/prisma';

import { initialData } from "./seed";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  //Categories
  const { categories, products } = initialData;
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDb = await prisma.category.findMany();

  const categoriesMap = categoriesDb.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;

    return map;
  }, {} as Record<string, string>);

  // Products
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    });

    // Images
    const imageData = images.map(image => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productImage.createMany({
      data: imageData
    });
  });
  
  console.log('Seed executed successfully');
};

(() => {
  if ( process.env.NODE_ENV === 'production' ) return;

  main();
})();