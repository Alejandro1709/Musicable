import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={global} />
    <Global styles={reset} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
