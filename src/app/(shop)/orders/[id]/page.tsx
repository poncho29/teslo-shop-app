import Link from "next/link";
import Image from "next/image";

import { Title } from "@/components";

import { initialData } from "@/seed/seed";
import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string
  }
}

export default function OrdeDetailPage({ params }: Props) {
  const { id } = params;

  return (
    <div className="flex items-center justify-center px-10 mb-72 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${ id }`} />

        <div className="grid grid-col-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col mt-5">
            <div
              className={
                clsx(
                  "flex items-center rounded-lg mb-5 py-2 px-3.5 text-xs font-bold text-white",
                  {
                    'bg-red-500': false,
                    'bg-green-700': true
                  }
                )
              }
            >
              <IoCartOutline size={30} />
              <span className="mx-2">Pendiente de pago</span>
              {/* <span className="mx-2">Pagada</span> */}
            </div>

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
                  <p>${ product.price } x 3</p>
                  <p className="font-bold">Subtotal: ${ product.price * 3 }</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de la orden */}
          <div className="p-7 rounded-xl shadow-xl bg-white">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">John Doe</p>
              <p>123 Main Street</p>	
              <p>City, State 12345</p>
              <p>Miami</p>
              <p>United States</p>
              <p>CP 12345</p>
              <p>123 456 7890</p>
            </div>

            <div className="w-full h-0.5 rounded mb-10 bg-gray-200"></div>

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
          </div>
        </div>
      </div>
    </div>
  );
}