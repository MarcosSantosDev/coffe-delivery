import { useState } from 'react';

interface CartItem {
  id: string;
  pathImg: string;
  altImg: string;
  title: string;
  price: number;
}

interface ShoppingCart {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
}

const useShoppingCart = (): ShoppingCart => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem): void => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item: CartItem): void => {
    const newCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(newCartItems);
  };

  const clearCart = (): void => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useShoppingCart;
