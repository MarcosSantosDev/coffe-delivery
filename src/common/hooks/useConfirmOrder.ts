import sessionStorage from '@/common/utils/sessionStorage';

import { SHOPPING_CART_PAY } from '../constants/storage';

interface ConfirmOrder {
  address: {
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
  };
  paymentType: string;
}

const paymentSessionStorage = sessionStorage<ConfirmOrder>(SHOPPING_CART_PAY, {
  address: {
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    uf: '',
  },
  paymentType: '',
});

function useConfirmOrder() {
  return paymentSessionStorage;
}

export default useConfirmOrder;
