import { useRouter } from 'next/navigation';

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

const useMenu = () => {
  const router = useRouter();

  const goToShoppingCart = () => {
    removeNavigationActionsClass();

    router.push('/shopping-cart');
  };

  return {
    removeNavigationActionsClass,
    toggleNavigationActionsClass,
    goToShoppingCart,
  };
};

export default useMenu;
