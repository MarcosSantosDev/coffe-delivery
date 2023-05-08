export function getItem<T>(key: string, initialData: T): T {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    }
  }

  return initialData;
}

export function setItem<T>(key: string, data: T) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}

function localStorage<T>(localStorageKey: string, initialData: T) {
  return {
    getState: () => getItem<T>(localStorageKey, initialData),
    setNewState: (newState: T) => {
      setItem<T>(localStorageKey, newState);
    },
  };
}

export default localStorage;
