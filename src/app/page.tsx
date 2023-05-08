import Image from 'next/image';

import CatalogList from '@/common/components/context/home/CatalogList/CatalogList';
import {
  CoffeFill,
  PackageFill,
  ShoppingCartFill,
  TimerFill,
} from '@/common/icons';

export default function HomePage() {
  return (
    <>
      <section className="home__section--one">
        <Image
          width={200}
          height={200}
          src="assets/app/coffee-illustration.svg"
          alt="Copo de café"
        />

        <div className="presentation">
          <div className="resume">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <ul className="topics">
            <li className="topic-item">
              <div className="circle-icon">
                <ShoppingCartFill size={16} />
              </div>
              <span>Compra simples e segura</span>
            </li>
            <li className="topic-item">
              <div className="circle-icon">
                <PackageFill size={16} />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li className="topic-item">
              <div className="circle-icon">
                <TimerFill size={16} />
              </div>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li className="topic-item">
              <div className="circle-icon">
                <CoffeFill size={16} />
              </div>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="home__section--two">
        <h2 className="title">Nossos cafés</h2>

        <CatalogList />
      </section>
    </>
  );
}
