'use client';

import * as React from 'react';

import Card from '@/common/components/context/cart/Card/Card';
import useShoppingCart from '@/common/context/useShoppingCart';
import { ShoppingCartFill } from '@/common/icons';
import { CartProduct } from '@/common/types/cart';
import * as masks from '@/common/utils/masks';

import styles from './CartList.module.scss';

const DELIVERY_PRICE = 3.5;

function sumProductPrices(products: CartProduct[]) {
  return products.reduce((value: number, product) => {
    const productValue = product.price * product.quantity;

    return value + productValue;
  }, 0);
}

function CartList() {
  const shoppingCart = useShoppingCart(state => {
    const { products, removeProduct, updateProductQuantity } = state;

    return {
      cartIsEmpty: products.length === 0,
      totalValue: sumProductPrices(products),
      products,
      removeProduct,
      updateProductQuantity,
    };
  });

  const handleUpdateProduct = (productId: string) => {
    return (quantity: number) => {
      return shoppingCart.updateProductQuantity(productId, quantity);
    };
  };

  return (
    <>
      <div className={styles['coffee-shopping__list']}>
        {shoppingCart.cartIsEmpty && (
          <div className={styles['coffee-shopping__empty-card']}>
            <ShoppingCartFill size={24} />
            <h4>Carrinho de compras vazio</h4>
          </div>
        )}

        {shoppingCart.products.map(product => (
          <React.Fragment key={product.id}>
            <Card
              cartProduct={product}
              onRemove={shoppingCart.removeProduct}
              onChangeQuantity={handleUpdateProduct(product.id)}
            />
            <hr className={styles['thematic-break']} />
          </React.Fragment>
        ))}
      </div>

      <table className={styles['coffee-shopping__prices']}>
        <tbody>
          <tr>
            <td>Total de itens</td>
            <td>R$ {masks.moneyMask(shoppingCart.totalValue)}</td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>R$ {masks.moneyMask(DELIVERY_PRICE)}</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>
                R$ {masks.moneyMask(shoppingCart.totalValue + DELIVERY_PRICE)}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CartList;
