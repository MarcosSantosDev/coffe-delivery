import { TextFieldProps } from './TextField.types';

import styles from './TextField.module.scss';

function TextField({ ...textFieldProps }: TextFieldProps) {
  return <input {...textFieldProps} type="text" className={styles.input} />;
}

export default TextField;
