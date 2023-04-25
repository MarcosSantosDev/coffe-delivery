import * as React from 'react';

export type VariantColor =
  | 'white'
  | 'black'
  | 'gray'
  | 'yellow'
  | 'yellow-dark'
  | 'yellow-light'
  | 'purple'
  | 'purple-dark'
  | 'purple-light';

export type CustomButton = {
  textColor?: VariantColor;
  backgroundColor?: VariantColor;
  iconColor?: VariantColor;
  counterColor?: Omit<VariantColor, 'white'>;
  textWeight?: 'normal' | 'bold';
  size?: 'sm' | 'md';
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  custom?: CustomButton;
  counter?: {
    active: boolean;
    value: number;
  };
}
