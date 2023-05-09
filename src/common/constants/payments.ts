interface PaymentType {
  label: string;
  value: string;
}

export const PAYMENT_TYPES: PaymentType[] = [
  {
    label: 'Cartão de crédito',
    value: 'credit-card',
  },
  {
    label: 'Cartão de débito',
    value: 'debit-card',
  },
  {
    label: 'Dinheiro',
    value: 'money',
  },
];
