import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";

import { initialData } from "@/seed/seed";

import { Category } from "@/interfaces";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function CategoryDetailPage({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Unisex'
  }

  // if (id === 'kids') notFound();
  
  return (
    <>
      <Title
        title={`Artículos para ${labels[id]}`}
        subtitle="Todos los productos"
      />

      <ProductGrid products={products} />
    </>
  );
}