import prisma from '../lib/prisma';

import { capitalize } from '../helpers/capitalize';

import { initialData } from "./seed";

async function main() {
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

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
  const { type, images, ...product1} = products[0];

  await prisma.product.create({
    data: {
      ...product1,
      categoryId: categoriesMap['shirts']
    }
  });

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[capitalize(type)]
      }
    });

    // Images
  })
  
  console.log('Seed executed successfully');
};

(() => {
  if ( process.env.NODE_ENV === 'production' ) return;

  main();
})();