import { CartProduct } from '@/common/types/cart';

export interface CardProps {
  cartProduct: CartProduct;
  onRemove: (id: string) => void;
  onChangeQuantity: (quantity: number) => void;
}
