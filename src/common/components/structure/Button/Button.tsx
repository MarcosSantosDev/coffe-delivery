'use client';

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
    return `button-counter__bg-color--${color}`;
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
  counter,
  ...buttonProps
}: ButtonProps) {
  const buttonCounterRef = React.useRef<HTMLButtonElement>(null);

  const buttonStyleClasses = [
    styles.button,
    getTextColorClass(custom.textColor),
    getBgColorClass(custom.backgroundColor),
    getSvgColorClass(custom.iconColor),
    getPdSizeClass(custom.size),
    getTextWeightClass(custom.textWeight),
  ].filter(Boolean);

  const childs = React.Children.toArray(children).slice(
    0,
    allowedNumberOfChildElements,
  );

  React.useEffect(() => {
    if (buttonCounterRef.current !== null && counter) {
      const counterClass = getCounterColorClass(custom.counterColor);

      if (counter.active) {
        buttonCounterRef.current.classList.remove('button-counter__hiden');
        buttonCounterRef.current.classList.add(counterClass);
      } else {
        buttonCounterRef.current.classList.remove(counterClass);
        buttonCounterRef.current.classList.add('button-counter__hiden');
      }
      buttonCounterRef.current.innerHTML = counter.value.toString();
    }
  }, [counter, custom.counterColor]);

  return (
    <button {...buttonProps} className={buttonStyleClasses.join(' ')}>
      <span ref={buttonCounterRef} className="button-counter__hiden">
        0
      </span>
      {childs}
    </button>
  );
}

export default Button;
