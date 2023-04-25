import { fireEvent, render, screen } from '@testing-library/react';

import Counter from './Counter';

describe('Counter component', () => {
  it('should be in the document', () => {
    render(<Counter name="product-xpto" />);

    const buttons = screen.getAllByRole('spinbutton');
    const counterInput = screen.getByRole('spinbutton', {
      name: 'counter-input',
    });
    const counterMinusButton = screen.getByRole('spinbutton', {
      name: 'counter-minus-button',
    });
    const counterPlusButton = screen.getByRole('spinbutton', {
      name: 'counter-plus-button',
    });

    expect(buttons).toHaveLength(3);
    expect(counterInput).toBeInTheDocument();
    expect(counterMinusButton).toBeInTheDocument();
    expect(counterPlusButton).toBeInTheDocument();
  });

  it('should click the button with the increment icon and the input after the click should update from 0 to 1', () => {
    render(<Counter name="product-xpto" />);

    const counterInput = screen.getByRole('spinbutton', {
      name: 'counter-input',
    });
    const counterPlusButton = screen.getByRole('spinbutton', {
      name: 'counter-plus-button',
    });

    expect(counterInput).toHaveValue(0);

    fireEvent.click(counterPlusButton);

    expect(counterInput).toHaveValue(1);
  });

  it('should click the button with the decrement icon and the input after the click should update from 0 to -1', () => {
    render(<Counter name="product-xpto" min={-5} />);

    const counterInput = screen.getByRole('spinbutton', {
      name: 'counter-input',
    });
    const counterMinusButton = screen.getByRole('spinbutton', {
      name: 'counter-minus-button',
    });

    expect(counterInput).toHaveValue(0);

    fireEvent.click(counterMinusButton);

    expect(counterInput).toHaveValue(-1);
  });

  it('should set the maximum and minimum value equal to 0, after clicking on the action buttons the input value must have value 0', () => {
    render(<Counter name="product-xpto" min={0} max={0} />);

    const counterInput = screen.getByRole('spinbutton', {
      name: 'counter-input',
    });

    const counterPlusButton = screen.getByRole('spinbutton', {
      name: 'counter-plus-button',
    });
    const counterMinusButton = screen.getByRole('spinbutton', {
      name: 'counter-minus-button',
    });

    expect(counterInput).toHaveValue(0);

    fireEvent.click(counterPlusButton);
    expect(counterInput).toHaveValue(0);

    fireEvent.click(counterMinusButton);
    expect(counterInput).toHaveValue(0);
  });
});
