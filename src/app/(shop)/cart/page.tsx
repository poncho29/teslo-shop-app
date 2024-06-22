import Link from "next/link";

import { QuantitySelector, Title } from "@/components";

import { initialData } from "@/seed/seed";
import Image from "next/image";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CartPage() {
  return (
    <div className="flex items-center justify-center px-10 mb-72 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-col-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link
              href="/"
              className="mb-5 underline"
            >
              Continúa comprando
            </Link>
          

            {productsInCart.map((product) => (
              <div
                key={product.slug}
                className="flex mb-5"
              >
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="size-24 mr-5 rounded"
                />

                <div>
                  <p>{ product.title }</p>
                  <p>${ product.price }</p>

                  <QuantitySelector quantity={3} />

                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de la orden */}
          <div className="max-h-72 p-7 rounded-xl shadow-xl bg-white">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (19%)</span>
              <span className="text-right">$ 15</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 115</span>
            </div>

            <div className="w-full mt-5 mb-2">
              <Link
                href="/checkout/address"
                className="flex btn-primary"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}