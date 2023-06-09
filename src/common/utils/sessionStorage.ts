export function getItem<T>(key: string, initialData: T): T {
  if (typeof window !== 'undefined') {
    const item = window.sessionStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }
  }

  return initialData;
}

export function setItem<T>(key: string, data: T) {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(key, JSON.stringify(data));
  }
}

export function removeItem(key: string) {
  if (typeof window !== 'undefined') {
    window.sessionStorage.removeItem(key);
  }
}

function sessionStorage<T>(sessionStorageKey: string, initialData: T) {
  return {
    getState: () => getItem<T>(sessionStorageKey, initialData),
    setNewState: (newState: T) => {
      setItem<T>(sessionStorageKey, newState);
    },
    removeItem: () => removeItem(sessionStorageKey),
  };
}

export default sessionStorage;
