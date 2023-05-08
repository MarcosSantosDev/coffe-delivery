import * as React from 'react';
import Image from 'next/image';

import { Counter } from '@/common/components/form';
import { Button } from '@/common/components/structure';
import { ShoppingCartFill } from '@/common/icons';
import { moneyMask } from '@/common/utils/masks';

import { CardProps } from './Card.types';

import styles from './Card.module.scss';

function Card({ catalogProduct, onSubmit }: CardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const quantityInputValue = data.get('quantity') as string | null;

    const quantity = Number.isNaN(quantityInputValue)
      ? 0
      : Number(quantityInputValue);

    if (quantity) {
      onSubmit({
        id: catalogProduct.id,
        title: catalogProduct.title,
        pathImg: catalogProduct.pathImg,
        altImg: catalogProduct.altImg,
        price: catalogProduct.price,
        quantity,
      });
    }
  };

  React.useEffect(() => {
    if (catalogProduct.active) {
      cardRef.current?.classList.add('catalog-card__active');
    }
  }, [catalogProduct.active]);

  return (
    <div ref={cardRef} className={styles.card}>
      <div>
        <Image
          className={styles['card__product-image']}
          src={catalogProduct.pathImg}
          alt={catalogProduct.altImg}
          width={120}
          height={120}
        />
      </div>

      <div className={styles.card__product}>
        <ul>
          {catalogProduct.types.map(type => (
            <li key={type.replaceAll(' ', '-')}>{type}</li>
          ))}
        </ul>

        <div className={styles['card__product-information']}>
          <h3>{catalogProduct.title}</h3>
          <p>{catalogProduct.description}</p>
        </div>
      </div>

      <div className={styles['card__purchase-section']}>
        <span className={styles['card__purchase-section--price']}>
          R$ <strong>{moneyMask(catalogProduct.price)}</strong>
        </span>

        <form onSubmit={handleSubmit}>
          <Counter value={1} name="quantity" min={1} />

          <Button
            type="submit"
            title="comprar produto"
            custom={{
              backgroundColor: 'purple-dark',
              iconColor: 'white',
              size: 'sm',
            }}
          >
            <ShoppingCartFill size={14} />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Card;
