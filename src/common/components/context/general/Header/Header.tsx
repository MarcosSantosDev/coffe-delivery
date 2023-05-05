import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Menu from './Menu/Menu';

import styles from './Header.module.scss';

function Header() {
  return (
    <header
      role="navigation"
      aria-label="Coffe delivery navigation"
      className={styles.navigation}
    >
      <Link href="/">
        <Image
          role="none"
          src="/assets/app/coffe-delivery-logo.svg"
          alt="Coffe delivery"
          width={85}
          height={40}
        />
      </Link>

      <Menu />
    </header>
  );
}

export default Header;
