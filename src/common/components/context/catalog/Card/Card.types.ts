type CardData = {
  id: string;
  quantity: string;
};

export interface CardProps {
  id: string;
  pathImg: string;
  altImg: string;
  types: string[];
  title: string;
  description: string;
  price: number;
  onSubmit: (data: CardData) => void;
}
