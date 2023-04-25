import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {
  it('should render the button with the correct content', () => {
    render(<Button>Hello</Button>);

    const button = screen.getByText('Hello');

    expect(button).toBeInTheDocument();
  });

  it('should call the onClick function when clicked', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Click me</Button>);

    const button = screen.getByText('Click me');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByText('Disabled');

    expect(button).toBeDisabled();
  });
});
