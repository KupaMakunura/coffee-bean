import { ShoppingItem } from "@/interfaces";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem extends ShoppingItem {
  quantity: number;
}

// store interface
interface Store {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create(
  persist<Store>(
    (set, get) => ({
      cart: [],
      cartTotal: 0,
      //   add item to cart
      addToCart(item) {
        const cart = get().cart;
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          set({
            cart: cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          });
        } else {
          set({ cart: [...cart, { ...item, quantity: 1 }] });
        }
      },
      //   remove item from cart
      removeFromCart(id) {
        const cart = get().cart;
        set({ cart: cart.filter((item) => item.id !== id) });
      },

      //   update cart quantity
      updateQuantity(id, quantity) {
        const cart = get().cart;
        set({
          cart: cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },
      //   clear cart
      clearCart() {
        set({ cart: [] });
      },
      //   get total price
    }),

    // the storage key and persist type
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
