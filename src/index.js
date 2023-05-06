import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Remova a importação de GlobalStyles daqui

// Adicione comentários explicativos
const rootElement = document.getElementById('root');

// Use ReactDOM.render em vez de ReactDOM.createRoot
ReactDOM.render(
  <React.StrictMode>
    {/* Movido a importação de GlobalStyles para dentro do componente App */}
    <App />
  </React.StrictMode>,
  rootElement
);
