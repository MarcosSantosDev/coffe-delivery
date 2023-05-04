'use client';

import * as React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Card from '@/common/components/context/cart/Card/Card';
import { RadioButton, TextField } from '@/common/components/form';
import { Button } from '@/common/components/structure';
import {
  Bank,
  MapPinLine,
  Money,
  MoneySymbol,
  ShoppingCartFill,
} from '@/common/icons';

import styles from './Form.module.scss';

const coffeMock = {
  id: '1',
  pathImg: 'assets/catalog/coffe-capuccino.svg',
  altImg: 'coffe american',
  title: 'Capuccino',
  price: 9.9,
};

const totalValueOfProducts = 'R$ 29,70';
const deliveryValue = 'R$ 3,50';
const amount = 'R$ 33,20';

function Form() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);

    // const data = {
    //   cep: formData.get('address-cep'),
    //   street: formData.get('address-street'),
    //   number: formData.get('address-number'),
    //   complement: formData.get('address-complement'),
    //   district: formData.get('address-district'),
    //   city: formData.get('address-city'),
    //   uf: formData.get('address-uf'),
    //   card: formData.get('card'),
    //   quantity: formData.get('quantity'),
    // };

    router.push(`${pathname}/confirmed-order`);
  };

  const handleRemoveProduct = () => {
    //
  };

  const handleChangeQuantity = () => {
    //
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
          <div className={styles['shopping-cart__content-coffe-list']}>
            <Card
              {...coffeMock}
              onRemove={handleRemoveProduct}
              onChangeQuantity={handleChangeQuantity}
            />
            <hr className={styles['thematic-break']} />
          </div>
          <table className={styles['shopping-cart__content-prices']}>
            <tr>
              <td>Total de itens</td>
              <td>{totalValueOfProducts}</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>{deliveryValue}</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>{amount}</strong>
              </td>
            </tr>
          </table>
          <Button
            type="submit"
            custom={{
              backgroundColor: 'yellow',
              textColor: 'white',
              textWeight: 'bold',
              size: 'md',
            }}
          >
            CONFIRMAR PEDIDO
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
