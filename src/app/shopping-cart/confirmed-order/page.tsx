'use client';

import * as React from 'react';
import Image from 'next/image';

import { PAYMENT_TYPES } from '@/common/constants';
import useConfirmOrder from '@/common/hooks/useConfirmOrder';
import { MapPinFill, MoneySymbol, TimerFill } from '@/common/icons';

const timeToDelevery = {
  from: 20,
  to: 30,
};

function ConfirmedOrderPage() {
  const confirmOrder = useConfirmOrder();
  const confirmOrderState = confirmOrder.getState();

  const paymentTypesFound = PAYMENT_TYPES.filter(payment => {
    return payment.value === confirmOrderState.paymentType;
  });

  const resumeConfirmedOrder = {
    address: confirmOrderState.address,
    paymentType: paymentTypesFound.length ? paymentTypesFound[0].label : '',
  };

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
                  {resumeConfirmedOrder.address.street},{' '}
                  {resumeConfirmedOrder.address.number}
                </strong>
                <br />
                {resumeConfirmedOrder.address.district} -{' '}
                {resumeConfirmedOrder.address.city},{' '}
                {resumeConfirmedOrder.address.uf}
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
                Pagamento na entrega <br />{' '}
                <strong>{resumeConfirmedOrder.paymentType}</strong>
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

export default ConfirmedOrderPage;
