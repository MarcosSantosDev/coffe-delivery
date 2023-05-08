import { fireEvent, render, screen } from '@testing-library/react';

import Card from '@/common/components/context/home/Card/Card';
import { CardProps } from '@/common/components/context/home/Card/Card.types';
import { CartProduct } from '@/common/types/cart';
import { moneyMask } from '@/common/utils/masks';

const catalogProductMock: CardProps['catalogProduct'] = {
  id: '1',
  pathImg: 'assets/catalog/cappuccino-coffee.svg',
  altImg: 'coffe american',
  types: ['especial', 'alcoólico'],
  title: 'Capuccino',
  description:
    'Bebida com canela feita de doses iguais de café, leite e espuma',
  price: 9.9,
  active: false,
};

const coffeCartMock: CartProduct = {
  id: catalogProductMock.id,
  title: catalogProductMock.title,
  pathImg: catalogProductMock.pathImg,
  altImg: catalogProductMock.altImg,
  price: catalogProductMock.price,
  quantity: 1,
};

describe('Card component', () => {
  const onSubmitMocked = jest.fn();

  it('should render the component', () => {
    render(
      <Card catalogProduct={catalogProductMock} onSubmit={onSubmitMocked} />,
    );

    const elementCardImg = screen.getByAltText(catalogProductMock.altImg);
    const elementCardTitle = screen.getByText(catalogProductMock.title);
    const elementCardDescription = screen.getByText(
      catalogProductMock.description,
    );
    const elementCardTypes01 = screen.getByText(catalogProductMock.types[0]);
    const elementCardTypes02 = screen.getByText(catalogProductMock.types[1]);
    const elementCardPrice = screen.getByText(
      moneyMask(catalogProductMock.price),
    );
    const elementButtonAddProduct = screen.getByTitle(/comprar produto/i);

    expect(elementCardImg).toBeInTheDocument();
    expect(elementCardImg).toHaveAttribute('src', catalogProductMock.pathImg);
    expect(elementCardTitle).toBeInTheDocument();
    expect(elementCardDescription).toBeInTheDocument();
    expect(elementCardTypes01).toBeInTheDocument();
    expect(elementCardTypes02).toBeInTheDocument();
    expect(elementCardPrice).toBeInTheDocument();
    expect(elementButtonAddProduct).toBeInTheDocument();
  });

  it('should call the submit function when clicking the "comprar produto" button', () => {
    render(
      <Card catalogProduct={catalogProductMock} onSubmit={onSubmitMocked} />,
    );

    const elementButtonAddProduct = screen.getByTitle(/comprar produto/i);

    fireEvent.click(elementButtonAddProduct);

    expect(onSubmitMocked).toHaveBeenCalledWith(coffeCartMock);
  });
});
