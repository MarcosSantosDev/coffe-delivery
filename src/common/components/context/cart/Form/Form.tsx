'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import CartList from '@/common/components/context/cart/CartList/CartList';
import { RadioButton, TextField } from '@/common/components/form';
import { Button } from '@/common/components/structure';
import useShoppingCart from '@/common/context/useShoppingCart';
import useConfirmOrder from '@/common/hooks/useConfirmOrder';
import {
  Bank,
  MapPinLine,
  Money,
  MoneySymbol,
  ShoppingCartFill,
} from '@/common/icons';

import styles from './Form.module.scss';

function SubmitButton() {
  const shoppingCart = useShoppingCart(state => {
    return {
      cartIsEmpty: state.products.length === 0,
    };
  });

  return (
    <Button
      type="submit"
      custom={{
        backgroundColor: 'yellow',
        textColor: 'white',
        textWeight: 'bold',
        size: 'md',
      }}
      disabled={shoppingCart.cartIsEmpty}
    >
      CONFIRMAR PEDIDO
    </Button>
  );
}

function Form() {
  const router = useRouter();
  const pathname = usePathname();
  const confirmOrder = useConfirmOrder();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formValues = {
      cep: formData.get('address-cep') as string,
      street: formData.get('address-street') as string,
      number: formData.get('address-number') as string,
      complement: formData.get('address-complement') as string,
      district: formData.get('address-district') as string,
      city: formData.get('address-city') as string,
      uf: formData.get('address-uf') as string,
      card: formData.get('card') as string,
      quantity: formData.get('quantity') as string,
    };

    confirmOrder.setNewState({
      address: {
        street: formValues.street,
        number: formValues.number,
        complement: formValues.complement,
        district: formValues.district,
        city: formValues.city,
        uf: formValues.uf,
      },
      paymentType: formValues.card,
    });

    router.push(`${pathname}/confirmed-order`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['shopping-cart']}>
        <h4 className={styles['shopping-cart__title']}>Complete seu pedido</h4>
        <div className={styles['shopping-cart__card-fields']}>
          <div className={styles['shopping-cart__topic']}>
            <div className="topic__icon--yellow-dark">
              <MapPinLine size={22} />
            </div>
            <div className={styles['shopping-cart__topic-text']}>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde desejar receber ser pedido</span>
            </div>
          </div>
          <div className={styles['shopping-cart__group-inputs']}>
            <TextField
              id="address-cep"
              name="address-cep"
              placeholder="CEP"
              required
            />
            <TextField
              id="address-street"
              name="address-street"
              placeholder="Rua"
              required
            />
            <TextField
              id="address-number"
              name="address-number"
              placeholder="Número"
              required
            />
            <TextField
              id="address-complement"
              name="address-complement"
              placeholder="Complemento"
            />
            <TextField
              id="address-district"
              name="address-district"
              placeholder="Bairro"
              required
            />
            <TextField
              id="address-city"
              name="address-city"
              placeholder="Cidade"
              required
            />
            <TextField
              id="address-uf"
              name="address-uf"
              placeholder="UF"
              required
            />
          </div>
        </div>
        <div className={styles['shopping-cart__card-fields']}>
          <div className={styles['shopping-cart__topic']}>
            <div className="topic__icon--purple">
              <MoneySymbol size={22} />
            </div>
            <div className={styles['shopping-cart__topic-text']}>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>
          <div className={styles['shopping-cart__content-payment-cards']}>
            <RadioButton name="card" value="credit-card" required>
              <ShoppingCartFill size={16} />
              CARTÃO CRÉDITO
            </RadioButton>
            <RadioButton name="card" value="debit-card" required>
              <Bank size={16} />
              CARTÃO DÉBITO
            </RadioButton>
            <RadioButton name="card" value="money" required>
              <Money size={16} />
              DINHEIRO
            </RadioButton>
          </div>
        </div>
      </div>
      <div className={styles['shopping-cart']}>
        <h4 className={styles['shopping-cart__title']}>Cafés selecionados</h4>

        <div className={styles['shopping-cart__card-fields--rounded-edge']}>
          <CartList />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}

export default Form;
