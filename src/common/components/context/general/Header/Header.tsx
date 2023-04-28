import * as React from 'react';
import { List, MapPin, ShoppingCart } from '@phosphor-icons/react';
import Image from 'next/image';

import { Button } from '@/common/components/structure';
import useClickOutsideAlert from '@/common/hooks/useOutSideClick';

import styles from './Header.module.scss';

const menuActionsElementId = '#menu-actions';
const menuActionsMobileDropdownClass = 'toggle-active';

const removeNavigationActionsClass = () => {
  const menuSection = document.querySelector(menuActionsElementId);

  if (menuSection) {
    if (menuSection.classList.contains(menuActionsMobileDropdownClass)) {
      menuSection.classList.remove(menuActionsMobileDropdownClass);
    }
  }
};

const toggleNavigationActionsClass = () => {
  const menuSection = document.querySelector(menuActionsElementId);

  if (menuSection) {
    if (menuSection.classList.contains(menuActionsMobileDropdownClass)) {
      menuSection.classList.remove(menuActionsMobileDropdownClass);
    } else {
      menuSection.classList.add(menuActionsMobileDropdownClass);
    }
  }
};

const coffeDeliveryToLocation = 'Belo Horizonte, MG';
const cartCounter = {
  active: true,
  value: 2,
};

function Header() {
  const navigationActionsRef = React.useRef(null);

  useClickOutsideAlert(navigationActionsRef, removeNavigationActionsClass);

  return (
    <header
      role="navigation"
      aria-label="Coffe delivery navigation"
      className={styles.navigation}
    >
      <Image
        role="none"
        src="assets/app-logo.svg"
        alt="Coffe delivery"
        width={85}
        height={40}
      />

      <div role="menu" className="navigation__menu" ref={navigationActionsRef}>
        <div role="menubar" className="navigation__menu--toggle">
          <Button
            title="Menu de navegação"
            type="button"
            custom={{
              backgroundColor: 'purple-light',
              iconColor: 'purple',
              size: 'sm',
            }}
            onClick={toggleNavigationActionsClass}
          >
            <List size={22} weight="fill" />
          </Button>
        </div>

        <nav id="menu-actions">
          <Button
            role="menuitem"
            title="Localização atual"
            type="button"
            custom={{
              backgroundColor: 'gray',
              textColor: 'purple',
              iconColor: 'purple',
              size: 'sm',
            }}
            disabled
          >
            <MapPin size={22} weight="fill" />
            {coffeDeliveryToLocation}
          </Button>

          <Button
            role="menuitem"
            title="Ir para o carrinho"
            type="button"
            custom={{
              backgroundColor: 'yellow-light',
              iconColor: 'yellow-dark',
              size: 'sm',
              counterColor: 'yellow-dark',
            }}
            counter={cartCounter}
          >
            <ShoppingCart size={22} weight="fill" />
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
