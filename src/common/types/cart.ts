import { CatalogProduct } from './catalog';

export interface CartProduct
  extends Pick<
    CatalogProduct,
    'id' | 'pathImg' | 'altImg' | 'title' | 'price'
  > {
  quantity: number;
}
