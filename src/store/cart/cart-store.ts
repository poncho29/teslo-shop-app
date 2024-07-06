import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartProduct } from "@/interfaces";

interface State {
  cart: CartProduct[];

  addProductToCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
  
      // Methods
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
  
        // Revisar si el producto existe en el carrito con la talla seleccionada
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );
  
        if (!productInCart) {
          // Insertar el producto en el carrito
          set({ cart: [...cart, product] });
          return;
        }
  
        // El product existe en el carrito con la talla seleccionada
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            // Aumentar la cantidad del producto
            return {
              ...item,
              quantity: item.quantity + product.quantity
            }
          }
  
          return item;
        });
  
        set({ cart: updatedCartProducts });
      }
    }),
    {
      name: "shopping-cart",
    }
  )
)