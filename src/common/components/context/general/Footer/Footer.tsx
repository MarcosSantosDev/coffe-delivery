import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram, Whatsapp, Youtube } from '@/common/icons';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['box-grid']}>
        <h2 className={styles['topic-title']}>Nossos cafés</h2>
        <ul>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Grão
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Moído
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Cápsula
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Kits
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Acessórios
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Todos os cafés
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['box-grid']}>
        <h2 className={styles['topic-title']}>Institucional</h2>
        <ul>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Política de Privacidade
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Quem Somos
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Política de reembolso
            </Link>
          </li>
          <li>
            <Link className={styles['topic-link']} href="/#">
              Termos de serviço
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.service}>
        <div className={styles['box-grid']}>
          <h2 className={styles['topic-title']}>Atendimento</h2>
          <p className={styles['topic-paragraph']}>
            De segunda a sexta das 10 ás 17h
          </p>
        </div>

        <div className={styles.contact}>
          <h3 className={styles['topic-subtitle']}>Telefone:</h3>
          <p className={styles['topic-paragraph']}>(00) 0000-0000</p>
        </div>

        <div className={styles.contact}>
          <h3 className={styles['topic-subtitle']}>E-mail:</h3>
          <p className={styles['topic-paragraph']}>sac@coffeedelivery.com</p>
        </div>
      </div>

      <div className={styles.b2b}>
        <div className={styles['box-grid']}>
          <h2 className={styles['topic-title']}>Para Seu Negócio</h2>
          <Link className={styles['topic-link']} href="/#">
            Para cafeterias, empórios, escritórios, eventos e ++
          </Link>
        </div>

        <div className={styles['box-grid']}>
          <h2 className={styles['topic-title']}>Central de Relacionamento</h2>
          <Link className={styles['topic-link']} href="/#">
            Tire sua dúvida
          </Link>
        </div>
      </div>

      <div className={styles.social}>
        <Image
          role="none"
          src="/assets/app/coffee-delivery-logo.svg"
          alt="Coffe delivery"
          width={85}
          height={40}
        />

        <h2 className={styles['topic-title']}>Siga a Coffee Delivery</h2>
        <div className={styles['social-icons']}>
          <Link data-testid="facebook" href="/#">
            <Facebook size={25} />
          </Link>
          <Link data-testid="instagram" href="/#">
            <Instagram size={25} />
          </Link>
          <Link data-testid="whatsapp" href="/#">
            <Whatsapp size={25} />
          </Link>
          <Link data-testid="youtube" href="/#">
            <Youtube size={25} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
