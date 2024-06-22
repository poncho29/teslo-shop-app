import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";

import { QuantitySelector, SizeSelector } from "@/components";

import { initialData } from "@/seed/seed";

interface Props {
  params: {
    slug: string;
  }
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find(product => product.slug === slug);

  if (!product) notFound();

  return (
    <div className="grid gap-3 mt-5 mb-20 md:grid-cols-3 ">
      <div className="col-span-1 md:col-span-2">
        <h1>Product Page</h1>
      </div>

      <div className="col-span-1 px-5">
        <h1
          className={`${titleFont.className} antialiased font-bold text-xl`}
        >
          { product.title }
        </h1>

        <p className="text-lg mb-5">${ product.price }</p>

        <SizeSelector
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        <QuantitySelector quantity={3} />

        <button className="btn-primary my-5">
          Agregar al carrito
        </button>

        <h3 className="text-sm font-bold">Descripción</h3>
        <p className="font-light">
          { product.description }
        </p>
      </div>
    </div>
  );
}