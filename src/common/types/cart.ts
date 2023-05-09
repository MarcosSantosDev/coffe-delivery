import { CatalogProduct } from './catalog';

export interface CartProduct
  extends Pick<
    CatalogProduct,
    'id' | 'pathImg' | 'altImg' | 'title' | 'price'
  > {
  quantity: number;
}

export interface ShoppingCart {
  form: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
    card: string;
    quantity: string;
  };
}
