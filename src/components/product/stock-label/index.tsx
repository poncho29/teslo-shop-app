'use client';

import { useEffect, useState } from "react";

import { getStockBySlug } from "@/actions/product/get-stock";

import { titleFont } from "@/config/fonts";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
  }

  return (
    <h4
      className={`${titleFont.className} antialiased font-bold text-lg`}
    >
      Stock: { stock }
    </h4>
  )
}
