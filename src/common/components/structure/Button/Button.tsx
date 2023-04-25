import * as React from 'react';

import { ButtonProps, CustomButton, VariantColor } from './Button.types';

import styles from './Button.module.scss';

const getTextColorClass = (color?: VariantColor) => {
  if (color) {
    return styles[`button__text-color--${color}`];
  }

  return '';
};

const getBgColorClass = (color?: VariantColor) => {
  if (color) {
    return styles[`button__bg-color--${color}`];
  }

  return '';
};

const getSvgColorClass = (color?: VariantColor) => {
  if (color) {
    return styles[`button__svg-color--${color}`];
  }

  return '';
};

const getCounterColorClass = (color?: Omit<VariantColor, 'white'>) => {
  if (color) {
    return styles[`counter__bg-color--${color}`];
  }

  return '';
};

const getTextWeightClass = (weight?: CustomButton['textWeight']) => {
  if (weight) {
    return styles[`button__text--${weight}`];
  }

  return '';
};

const getPdSizeClass = (size?: CustomButton['size']) => {
  if (size) {
    return styles[`button__size--${size}`];
  }

  return '';
};

const allowedNumberOfChildElements = 2;

function Button({
  children,
  custom = {
    textColor: 'white',
    backgroundColor: 'black',
    iconColor: 'white',
    counterColor: 'black',
    size: 'md',
    textWeight: 'normal',
  },
  counter = {
    active: false,
    value: 0,
  },
  ...buttonProps
}: ButtonProps) {
  const buttonStyleClasses = [
    styles.button,
    getTextColorClass(custom.textColor),
    getBgColorClass(custom.backgroundColor),
    getSvgColorClass(custom.iconColor),
    getPdSizeClass(custom.size),
    getTextWeightClass(custom.textWeight),
  ];

  if (counter.active) {
    buttonStyleClasses.push(styles.counter);
    buttonStyleClasses.push(getCounterColorClass(custom.counterColor));
  }

  const childs = React.Children.toArray(children).slice(
    0,
    allowedNumberOfChildElements,
  );

  return (
    <button
      className={buttonStyleClasses.join(' ')}
      data-counter={counter.active ? counter.value : null}
      {...buttonProps}
    >
      {childs}
    </button>
  );
}

export default Button;
