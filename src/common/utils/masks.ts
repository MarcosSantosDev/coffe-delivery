/* eslint-disable no-param-reassign */

// 10.000,00 - 10000.00
export const removeMoneyMask = (value: string | number) => {
  const originalNumber = Number(value);
  const numberIsWithMask = Number.isNaN(originalNumber);

  if (numberIsWithMask) {
    const stringValue = value.toString();
    const splitedMoneyMask = stringValue
      .split('.')
      .join('')
      .split(',')
      .join('.');

    return splitedMoneyMask.replace(/[^0-9.-]+/g, '');
  }

  return value.toString();
};

// 10.000,00
export const moneyMask = (value: number) => {
  if (!Number.isNaN(value)) {
    return value
      .toFixed(2)
      .replace(/\D/g, '')
      .replace(/\D/g, '.')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.');
  }
  return '';
};
