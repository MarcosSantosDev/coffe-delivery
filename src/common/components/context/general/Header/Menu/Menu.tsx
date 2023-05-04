'use client';

import * as React from 'react';

import { Button } from '@/common/components/structure';
import useClickOutsideAlert from '@/common/hooks/useOutSideClick';
import { ListBold, MapPinFill, ShoppingCartFill } from '@/common/icons';

import useMenu from './useMenu';

const coffeDeliveryToLocation = 'Belo Horizonte, MG';
const cartCounter = {
  active: false,
  value: 0,
};

function Menu() {
  const navigationActionsRef = React.useRef(null);
  const {
    removeNavigationActionsClass,
    toggleNavigationActionsClass,
    goToShoppingCart,
  } = useMenu();

  useClickOutsideAlert(navigationActionsRef, removeNavigationActionsClass);

  return (
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
          <ListBold size={22} />
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
          <MapPinFill size={22} />
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
          onClick={goToShoppingCart}
        >
          <ShoppingCartFill size={22} />
        </Button>
      </nav>
    </div>
  );
}

export default Menu;
