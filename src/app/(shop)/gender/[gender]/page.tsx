import { notFound, redirect } from "next/navigation";

import { Gender } from "@prisma/client";

import { Pagination, ProductGrid, Title } from "@/components";

import { getPaginatedProductsWithImages } from "@/actions";

const labels: Record<string, string> = {
  'men': 'Hombres',
  'women': 'Mujeres',
  'kid': 'Niños',
  'unisex': 'Unisex'
}

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  }
}

export default async function GenderDetailPage({ params, searchParams }: Props) {
  const { gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  // if (id === 'kids') notFound();
  
  return (
    <>
      <Title
        title={`Artículos para ${labels[gender]}`}
        subtitle="Todos los productos"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}