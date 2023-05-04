import { TextFieldProps } from './TextField.types';

import styles from './TextField.module.scss';

function TextField({ ...restTextFieldProps }: TextFieldProps) {
  return <input {...restTextFieldProps} type="text" className={styles.input} />;
}

export default TextField;
