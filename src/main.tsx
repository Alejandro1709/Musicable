import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AlbumProvider from './context/albumContext';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={global} />
    <Global styles={reset} />
    <BrowserRouter>
      <AlbumProvider>
        <App />
      </AlbumProvider>
    </BrowserRouter>
  </React.StrictMode>
);
