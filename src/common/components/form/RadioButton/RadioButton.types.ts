import * as React from 'react';

export interface RadioButtonProps {
  name: string;
  value: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactNode;
}
