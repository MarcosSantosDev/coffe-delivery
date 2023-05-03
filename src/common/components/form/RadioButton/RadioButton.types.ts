import * as React from 'react';

export interface RadioButtonProps
  extends React.InputHTMLAttributes<Omit<HTMLInputElement, 'type'>> {
  name: string;
  value: string;
  children: React.ReactNode;
}
