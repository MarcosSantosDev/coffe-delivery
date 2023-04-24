import { fireEvent, render, screen } from '@testing-library/react';

import RadioButton from './RadioButton';

describe('RadioButton component', () => {
  it('should renders radio button with label', () => {
    render(
      <RadioButton name="gender" value="male">
        Male
      </RadioButton>,
    );

    const inputValue = screen.getByDisplayValue('male');
    const buttonText = screen.getByText('Male');

    expect(inputValue).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  it('should call onChange function when radio button is clicked', () => {
    const onChange = jest.fn();

    render(
      <RadioButton name="gender" value="male" onChange={onChange}>
        Male
      </RadioButton>,
    );

    const button = screen.getByDisplayValue('male');

    fireEvent.click(button);

    expect(onChange).toHaveBeenCalled();
  });
});
