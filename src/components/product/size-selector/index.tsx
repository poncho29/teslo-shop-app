import clsx from "clsx";

import { type Size } from "@/interfaces"

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];
  onChangeSize: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onChangeSize }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>

      <div>
        {availableSizes.map((size) => (
          <button
            key={size}
            className={
              clsx(
                "mx-2 text-lg hover:underline",
                {'underline': size === selectedSize}
              )
            }
            onClick={() => onChangeSize(size)}
          >
            { size }
          </button>
        ))}
      </div>
    </div>
  )
}
