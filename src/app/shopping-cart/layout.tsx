import * as React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrinho de compras | Coffe Delivery',
  description: 'Carrinho de compras | Coffe Delivery',
};

function ShoppingCartLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export default ShoppingCartLayout;
