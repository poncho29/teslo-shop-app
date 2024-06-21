'use client';

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Product } from "@/interfaces";

interface Props {
  products: Product;
}

export const ProductGridItem = ({ products }: Props) => {
  const [displayImage, setDisplayImage] = useState(products.images[0]);

  return (
    <div
      className="rounded-md overflow-hidden fade-in"
    >
      <Link href={`/product/${products.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={products.title}
          width={500}
          height={500}
          className="w-full object-cover rounded"
          onMouseEnter={() => setDisplayImage(products.images[1])}
          onMouseLeave={() => setDisplayImage(products.images[0])}
        />
      </Link>

      <div  className="flex flex-col p-4">
        <Link
          href={`/product/${products.slug}`}
          className="hover:text-blue-600"
        >
          { products.title }
        </Link>

        <span className="font-bold">${ products.price }</span>
      </div>
    </div>
  )
}
