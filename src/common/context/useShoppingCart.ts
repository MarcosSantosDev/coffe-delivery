/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { SHOPPING_CART_PRODUCTS } from '@/common/constants';
import { CartProduct } from '@/common/types/cart';
import sessionStorage from '@/common/utils/sessionStorage';

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

const cartSessionStorage = sessionStorage(SHOPPING_CART_PRODUCTS, initialData);

const useShoppingCart = create(
  immer<CartState & CartActions>(set => {
    const initialCartState = cartSessionStorage.getState();

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

          cartSessionStorage.setNewState(state);
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

          cartSessionStorage.setNewState(state);
        });
      },
      removeProduct: productId => {
        set(state => {
          state.products = state.products.filter(
            product => product.id !== productId,
          );

          cartSessionStorage.setNewState(state);
        });
      },
    };
  }),
);

export default useShoppingCart;
