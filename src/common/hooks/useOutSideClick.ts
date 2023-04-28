import * as React from 'react';

type AnyEvent = MouseEvent | TouchEvent;

function useClickOutsideAlert(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
) {
  React.useEffect(() => {
    function handleClickOutside(event: AnyEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutsideAlert;
