import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

const devRoot = document.querySelector('#mfe_dashboard');

if (devRoot) {
  mount(devRoot);
}

export { mount };
