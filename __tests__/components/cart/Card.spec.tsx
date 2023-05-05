import { fireEvent, render, screen } from '@testing-library/react';

import Card from '@/common/components/context/cart/Card/Card';
import { moneyMask } from '@/common/utils/masks';

const coffeMock = {
  id: '132',
  pathImg: 'assets/catalog/cappuccino-coffee.svg',
  altImg: 'coffe american',
  title: 'Capuccino',
  price: 9.9,
};

describe('Card component', () => {
  const onRemoveMocked = jest.fn();
  const onChangeQuantityMocked = jest.fn();

  it('should render the component', () => {
    render(
      <Card
        {...coffeMock}
        onRemove={onRemoveMocked}
        onChangeQuantity={onChangeQuantityMocked}
      />,
    );

    const elementCardImg = screen.getByAltText(coffeMock.altImg);
    const elementCardTitle = screen.getByText(coffeMock.title);
    const elementCardPrice = screen.getByText(
      `R$ ${moneyMask(coffeMock.price)}`,
    );
    const elementButtonRemoveProduct = screen.getByTitle(/remover produto/i);
    const counterPlusButton = screen.getByRole('spinbutton', {
      name: 'counter-plus-button',
    });
    const counterMinusButton = screen.getByRole('spinbutton', {
      name: 'counter-minus-button',
    });

    expect(elementCardImg).toBeInTheDocument();
    expect(elementCardImg).toHaveAttribute('src', coffeMock.pathImg);
    expect(elementCardTitle).toBeInTheDocument();
    expect(elementCardPrice).toBeInTheDocument();
    expect(elementButtonRemoveProduct).toBeInTheDocument();
    expect(counterPlusButton).toBeInTheDocument();
    expect(counterMinusButton).toBeInTheDocument();
  });

  it('should call the "onRemove" function when clicking on the "REMOVER" button', () => {
    render(
      <Card
        {...coffeMock}
        onRemove={onRemoveMocked}
        onChangeQuantity={onChangeQuantityMocked}
      />,
    );

    const counterPlusButton = screen.getByTitle(/remover produto/i);

    fireEvent.click(counterPlusButton);

    expect(onRemoveMocked).toHaveBeenCalledTimes(1);
    expect(onRemoveMocked).toHaveBeenCalledWith(coffeMock.id);
  });

  it('should call the "onChangeQuantity" function when clicking on the "+" icon button and receiving the value 2 as a change', () => {
    render(
      <Card
        {...coffeMock}
        onRemove={onRemoveMocked}
        onChangeQuantity={onChangeQuantityMocked}
      />,
    );

    const counterPlusButton = screen.getByRole('spinbutton', {
      name: 'counter-plus-button',
    });

    fireEvent.click(counterPlusButton);

    expect(onChangeQuantityMocked).toHaveBeenCalledTimes(1);
    expect(onChangeQuantityMocked).toHaveBeenCalledWith(2);
  });
});
