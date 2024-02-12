import { useState } from 'react';
export function useLocalStorage<T>(key: string, initialValue?: T) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return {
      value: initialValue,
      setLocalStorageValue: () => {},
      removeLocalStorageValue: () => {},
    };
  }

  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeLocalStorageValue = () => {
    localStorage.removeItem(key);
  };

  return {
    value,
    setLocalStorageValue,
    removeLocalStorageValue,
  };
}
