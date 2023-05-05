import { fireEvent, render, screen } from '@testing-library/react';

import Card from '@/common/components/context/catalog/Card/Card';
import { moneyMask } from '@/common/utils/masks';

const coffeMock = {
  id: '132',
  pathImg: 'assets/catalog/cappuccino-coffee.svg',
  altImg: 'coffe american',
  types: ['especial', 'alcoólico'],
  title: 'Capuccino',
  description:
    'Bebida com canela feita de doses iguais de café, leite e espuma',
  price: 9.9,
};

describe('Card component', () => {
  const onSubmitMocked = jest.fn();

  it('should render the component', () => {
    render(<Card {...coffeMock} onSubmit={onSubmitMocked} />);

    const elementCardImg = screen.getByAltText(coffeMock.altImg);
    const elementCardTitle = screen.getByText(coffeMock.title);
    const elementCardDescription = screen.getByText(coffeMock.description);
    const elementCardTypes01 = screen.getByText(coffeMock.types[0]);
    const elementCardTypes02 = screen.getByText(coffeMock.types[1]);
    const elementCardPrice = screen.getByText(moneyMask(coffeMock.price));
    const elementButtonAddProduct = screen.getByTitle(/comprar produto/i);

    expect(elementCardImg).toBeInTheDocument();
    expect(elementCardImg).toHaveAttribute('src', coffeMock.pathImg);
    expect(elementCardTitle).toBeInTheDocument();
    expect(elementCardDescription).toBeInTheDocument();
    expect(elementCardTypes01).toBeInTheDocument();
    expect(elementCardTypes02).toBeInTheDocument();
    expect(elementCardPrice).toBeInTheDocument();
    expect(elementButtonAddProduct).toBeInTheDocument();
  });

  it('should call the submit function when clicking the "comprar produto" button', () => {
    render(<Card {...coffeMock} onSubmit={onSubmitMocked} />);

    const elementButtonAddProduct = screen.getByTitle(/comprar produto/i);

    fireEvent.click(elementButtonAddProduct);

    expect(onSubmitMocked).toHaveBeenCalledWith({
      id: coffeMock.id,
      quantity: '1',
    });
  });
});
