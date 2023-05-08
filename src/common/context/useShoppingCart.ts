/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { CartProduct } from '@/common/types/cart';
import localStorage from '@/common/utils/localStorage';

interface CartState {
  products: CartProduct[];
}

interface CartActions {
  addProduct: (newProduct: CartProduct) => void;
  updateProductQuantity: (
    productId: CartProduct['id'],
    quantity: CartProduct['quantity'],
  ) => void;
  removeProduct: (productId: string) => void;
}

const initialData: CartState = {
  products: [],
};
const cartLocalStoreKey = '@coffe-delevery:cart-store';

const cartLocalStorage = localStorage(cartLocalStoreKey, initialData);

const useShoppingCart = create(
  immer<CartState & CartActions>(set => {
    const initialCartState = cartLocalStorage.getState();

    return {
      products: initialCartState.products,
      addProduct: newProduct => {
        set(state => {
          const alreadyIncluded = state.products.find(product => {
            return product.id === newProduct.id;
          });

          if (alreadyIncluded) {
            return state;
          }

          state.products.push(newProduct);

          cartLocalStorage.setNewState(state);
        });
      },
      updateProductQuantity: (productId, quantity) => {
        set(state => {
          state.products = state.products.map(product => {
            if (product.id === productId) {
              return {
                ...product,
                quantity,
              };
            }

            return product;
          });

          cartLocalStorage.setNewState(state);
        });
      },
      removeProduct: productId => {
        set(state => {
          state.products = state.products.filter(
            product => product.id !== productId,
          );

          cartLocalStorage.setNewState(state);
        });
      },
    };
  }),
);

export default useShoppingCart;
