import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

type WishlistStore = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
};

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => 
        set((state) => {
          if (state.items.find((item) => item.id === product.id)) return state;
          return { items: [...state.items, product] };
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      isInWishlist: (productId) =>
        get().items.some((item) => item.id === productId),
    }),
    {
      name: 'mini-dreams-wishlist',
    }
  )
);
