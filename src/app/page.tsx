import { Metadata } from 'next';

import styles from './Home.module.scss';

export const metadata: Metadata = {
  title: 'Coffe Delivery | Home',
  description: 'Coffe Delivery | Home',
};

export default function HomePage() {
  return <h2 className={styles.title}>Coffe Delivery</h2>;
}
