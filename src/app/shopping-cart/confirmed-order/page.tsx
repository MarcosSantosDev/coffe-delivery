import Image from 'next/image';

import { MapPinFill, MoneySymbol, TimerFill } from '@/common/icons';

const address = {
  cep: '12345678',
  street: 'Rua João Daniel Martinelli',
  number: '100',
  complement: '',
  district: 'Farrapos',
  city: 'Porto Alegre',
  uf: 'RS',
};

const timeToDelevery = {
  from: 20,
  to: 30,
};

const cart = 'Cartão de Crédito';

export default function ConfirmedOrderPage() {
  return (
    <section className="confirmed-order">
      <div className="delivery-order__feedback">
        <h1 className="delivery-order__feedback-title">
          Uhu! Pedido confirmado
        </h1>
        <p className="delivery-order__feedback-description">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="delivery-order__card__edge-gradient">
        <div className="delivery-order__card">
          <ul>
            <li className="delivery-order__card-topic">
              <div className="circle-content__icon circle-content__icon--purple">
                <MapPinFill size={16} />
              </div>
              <p>
                Entrega em{' '}
                <strong>
                  {address.street}, {address.number}
                </strong>
                <br />
                {address.district} - {address.city}, {address.uf}
              </p>
            </li>
            <li className="delivery-order__card-topic">
              <div className="circle-content__icon circle-content__icon--yellow">
                <TimerFill size={16} />
              </div>
              <p>
                Previsão de entrega
                <br />
                <strong>
                  {timeToDelevery.from} min - {timeToDelevery.to} min
                </strong>
              </p>
            </li>
            <li className="delivery-order__card-topic">
              <div className="circle-content__icon circle-content__icon--yellow-dark">
                <MoneySymbol size={16} />
              </div>
              <p>
                Pagamento na entrega <br /> <strong>{cart}</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="delivery-order__image">
        <Image
          width={250}
          height={250}
          src="/assets/app/delivery-illustration.svg"
          alt="Ilustração de entrega"
        />
      </div>
    </section>
  );
}
