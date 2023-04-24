import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

describe('TextField component', () => {
  it('should be in the document', () => {
    render(<TextField />);

    const element = screen.getByRole('textbox');

    expect(element).toBeInTheDocument();
  });

  it('should calls onChange function when input value changes', () => {
    const onChange = jest.fn();

    render(<TextField value="" onChange={onChange} />);

    const textField = screen.getByRole('textbox');

    fireEvent.change(textField, { target: { value: 'Marcos Santos' } });

    expect(onChange).toHaveBeenCalled();
  });
});
