import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onChangeQuantity: (value: number) => void;
}

export const QuantitySelector = ({ quantity, onChangeQuantity }: Props) => {
  const handleQuantityChange = (value: number) => {
    if (quantity + value < 1)  return;

    onChangeQuantity(quantity + value);
  }

  return (
    <div className="flex">
      <button onClick={() => handleQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="w-20 mx-3 px-5 text-center rounded bg-gray-100">
        { quantity }
      </span>

      <button onClick={() => handleQuantityChange(+1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  )
}
