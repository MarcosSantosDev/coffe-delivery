export interface CardProps {
  id: string;
  pathImg: string;
  altImg: string;
  title: string;
  price: number;
  onRemove: (id: string) => void;
  onChangeQuantity: (quantity: number) => void;
}
