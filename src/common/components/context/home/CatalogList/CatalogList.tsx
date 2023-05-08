'use client';

import Card from '@/common/components/context/home/Card/Card';
import useShoppingCart from '@/common/context/useShoppingCart';
import * as coffeListMocked from '@/common/mock/coffe-catalog';
import { CartProduct } from '@/common/types/cart';

import styles from './CatalogList.module.scss';

function CatalogList() {
  const { addProduct, coffeList } = useShoppingCart(state => ({
    addProduct: state.addProduct,
    coffeList: coffeListMocked.coffeList.map(product => ({
      ...product,
      active: state.products.some(({ id }) => id === product.id),
    })),
  }));

  const handleBuyCoffe = (product: CartProduct) => {
    addProduct(product);
  };

  return (
    <div className={styles['coffee-list']}>
      {coffeList.map(coffe => (
        <Card key={coffe.id} catalogProduct={coffe} onSubmit={handleBuyCoffe} />
      ))}
    </div>
  );
}

export default CatalogList;
