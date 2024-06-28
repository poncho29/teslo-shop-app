'use server';

import prisma from "@/lib/prisma";

export const getPaginatedProductsWithImages = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        images: {
          take: 2,
          select: {
            url: true
          }
        }
      }
    });

    console.log(products);
  } catch (error) {
    console.log(error);
  }
}