import { getPaginatedProductsWithImages } from "@/actions";

import { ProductGrid, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function ShopPage({ searchParams }: Props) {
  console.log(searchParams);
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products } = await getPaginatedProductsWithImages({ page });

  return (
    <>
      <Title 
        title="Tienda"
        subtitle="Todos los productos"
      />

      <ProductGrid products={products} />
    </>
  );
}
