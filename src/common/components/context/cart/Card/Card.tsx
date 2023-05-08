'use client';

import * as React from 'react';
import Image from 'next/image';

import { Counter } from '@/common/components/form';
import { Button } from '@/common/components/structure';
import { Trash } from '@/common/icons';
import { moneyMask } from '@/common/utils/masks';

import { CardProps } from './Card.types';

import styles from './Card.module.scss';

function Card({ cartProduct, onRemove, onChangeQuantity }: CardProps) {
  const handleRemoveProduct = () => onRemove(cartProduct.id);

  return (
    <div className={styles.card}>
      <Image
        className={styles['card__product-image']}
        src={cartProduct.pathImg}
        alt={cartProduct.altImg}
        width={64}
        height={64}
      />

      <div className={styles.card__product}>
        <p>{cartProduct.title}</p>

        <strong>R$ {moneyMask(cartProduct.price)}</strong>

        <div className={styles['card__product--actions']}>
          <Counter
            name="quantity"
            value={cartProduct.quantity}
            min={1}
            onChange={onChangeQuantity}
          />

          <Button
            type="button"
            title="remover produto"
            custom={{
              backgroundColor: 'gray',
              textColor: 'black',
              iconColor: 'purple',
              size: 'sm',
            }}
            onClick={handleRemoveProduct}
          >
            <Trash size={16} />
            REMOVER
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
