'use client';

import { useState } from 'react';

import { useCartStore } from '@/store';

import { QuantitySelector, SizeSelector } from '@/components';

import { CartProduct, Product, Size } from '@/interfaces';

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const handleAddToCart = () => {
    setPosted(true);

    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0]
    }

    addProductToCart(cartProduct);

    setSize(undefined);
    setQuantity(1);
    setPosted(false);
  }

  return (
    <>
      {posted && !size && (
        <span className='mt-2 text-red-500 fade-in'>
          Debe seleccionar una talla*
        </span>
      )}

      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onChangeSize={setSize}
      />

      <QuantitySelector
        quantity={quantity}
        onChangeQuantity={setQuantity}
      />

      <button
        className="btn-primary my-5"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </>
  )
}
