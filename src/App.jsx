import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';
export const App = () => {

 const [name, setName] = useLocalStorage('name', 'John');
 const clearStorage = () => {
	window.localStorage.clear();
	// Optionally reset all related states as well
	setName(''); // Reset name state if it was stored in localStorage
  };
  

/*    const [name, setName] = useState(() => window.localStorage.getItem('name') || 'John');

  useEffect(() => {
    window.localStorage.setItem('name', name);//'name' is the key property in the localStorage.If there nothing there assign name = 'John'
  }, [name]); */ // if name change run useEffect() again

  return (
    <div className="App">
      <h1>Welcome, {name}!</h1>
      <p>your name:</p>
      <input onChange={(e) => setName(e.target.value)}></input>
	  <button onClick={clearStorage}>Clear All Storage</button>
    </div>
  );
};
