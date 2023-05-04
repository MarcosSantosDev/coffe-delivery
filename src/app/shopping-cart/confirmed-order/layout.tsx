import * as React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pedido confirmado | Coffe Delivery',
  description: 'Pedido confirmado | Coffe Delivery',
};

function ConfirmedOrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export default ConfirmedOrderLayout;
