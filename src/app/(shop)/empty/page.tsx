import Link from "next/link";

import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div
      className="w-full h-[calc(100vh-56px)] flex flex-col items-center justify-center
      md:flex-row"
    >
      <IoCartOutline size={180} className="mx-5" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">
          Tu carrito está vacío
        </h1>

        <Link
          href="/"
          className="mt-2 text-4xl text-blue-500"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}