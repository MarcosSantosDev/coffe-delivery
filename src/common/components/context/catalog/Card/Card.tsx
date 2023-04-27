import * as React from 'react';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import Image from 'next/image';

import { Counter } from '@/common/components/form';
import { Button } from '@/common/components/structure';
import { moneyMask } from '@/common/utils/masks';

import { CardProps } from './Card.types';

import styles from './Card.module.scss';

function Card({
  id,
  pathImg,
  altImg,
  types = [],
  title,
  description,
  price,
  onSubmit,
}: CardProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const productQuantity = data.get('quantity') as string | null;

    if (productQuantity) {
      onSubmit({
        id,
        quantity: productQuantity,
      });
    }
  };

  return (
    <div className={styles.card}>
      <div>
        <Image
          className={styles['card__product-image']}
          src={pathImg}
          alt={altImg}
          width={120}
          height={120}
        />
      </div>

      <div className={styles.card__product}>
        <ul>
          {types.map(type => (
            <li key={type.replaceAll(' ', '-')}>{type}</li>
          ))}
        </ul>

        <div className={styles['card__product-information']}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className={styles['card__purchase-section']}>
        <span className={styles['card__purchase-section--price']}>
          R$ <strong>{moneyMask(price)}</strong>
        </span>

        <form onSubmit={handleSubmit}>
          <Counter value={1} name="quantity" min={1} />

          <Button
            type="submit"
            title="adicionar produto"
            custom={{
              backgroundColor: 'purple-dark',
              iconColor: 'white',
              size: 'sm',
            }}
          >
            <ShoppingCartSimple size={14} weight="fill" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Card;
