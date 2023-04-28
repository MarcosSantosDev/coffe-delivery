import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '@/common/components/context/general/Header/Header';

describe('Header component', () => {
  it('should renders image, location and cart buttons', () => {
    render(<Header />);

    const coffeDeliveryImg = screen.getByAltText(/Coffe Delivery/i);
    const locationButton = screen.getByTitle(/Localização atual/i);
    const cartButton = screen.getByTitle(/Ir para o carrinho/i);

    expect(coffeDeliveryImg).toBeInTheDocument();
    expect(locationButton).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
  });
});
