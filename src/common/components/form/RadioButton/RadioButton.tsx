import * as React from 'react';

import { RadioButtonProps } from './RadioButton.types';

import styles from './RadioButton.module.scss';

function RadioButton({
  name,
  value,
  onChange,
  checked,
  children,
}: RadioButtonProps) {
  const inputId = React.useId();

  return (
    <label htmlFor={inputId} className={styles.label}>
      <input
        type="radio"
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <button type="button" className={styles['radio-button']}>
        {children}
      </button>
    </label>
  );
}

export default RadioButton;
