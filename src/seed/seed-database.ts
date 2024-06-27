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

  console.log(categoriesData)
  await prisma.category.createMany({
    data: categoriesData
  });

  console.log('Seed executed successfully');
};

(() => {
  if ( process.env.NODE_ENV === 'production' ) return;

  main();
})();