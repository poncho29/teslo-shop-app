import { notFound } from "next/navigation";

import { getProductBySlug } from "@/actions";

import { titleFont } from "@/config/fonts";

import { 
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
  StockLabel
} from "@/components";
import { AddToCart } from "./ui/AddToCart";

export const revalidate = 604800; // 7 days

interface Props {
  params: {
    slug: string;
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="grid gap-3 mt-5 mb-20 md:grid-cols-3 ">
      <div className="col-span-1 md:col-span-2">
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">
        <StockLabel slug={slug} />
        <h1
          className={`${titleFont.className} antialiased font-bold text-xl`}
        >
          { product.title }
        </h1>

        <p className="text-lg mb-5">${ product.price }</p>

        <AddToCart product={product} />

        <h3 className="text-sm font-bold">Descripción</h3>
        <p className="font-light">
          { product.description }
        </p>
      </div>
    </div>
  );
}