//Inside useLocalStorage.js
import { useState, useEffect } from 'react';

//---------CUSTOM MADE HOOK

export const useLocalStorage = (key, defaultValue = '') => {
  const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key]);

  return [state, setState];
};

// return [state, setState];  Because the custom hook returns that then is possible for this statement to work:  const [name, setName] = useLocalStorage('name', 'John'); when add it to the app component. because name will behave like stater and setName as setState otherwise it wont
