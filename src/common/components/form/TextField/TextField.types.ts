import * as React from 'react';

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
