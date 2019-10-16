import React from 'react';
import Auth0Lock from 'auth0-lock';
import logo from './logo.svg';
import './App.css';

function App() {
  const options = {
    language: 'es',
    theme: {
      logo,
      primaryColor: '#0c217b',
    }
  };

  const lock = new Auth0Lock(
    'vqfJzynAoS2giMFbogqxcCMdGcK121So',
    'reservamos.auth0.com',
    options
  );

  return (
    <div className="App">
      <button onClick={() => lock.show()}>Login</button>
    </div>
  );
}

export default App;
