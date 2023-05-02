interface CardSubmitData {
  id: string;
  quantity: string;
}

export interface CardData {
  id: string;
  pathImg: string;
  altImg: string;
  types: string[];
  title: string;
  description: string;
  price: number;
}

export interface CardProps extends CardData {
  onSubmit: (data: CardSubmitData) => void;
}
