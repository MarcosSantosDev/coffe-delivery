import { CartProduct } from '@/common/types/cart';
import { CatalogProduct } from '@/common/types/catalog';

export interface CardProps {
  catalogProduct: CatalogProduct & {
    active: boolean;
  };
  onSubmit: (data: CartProduct) => void;
}
