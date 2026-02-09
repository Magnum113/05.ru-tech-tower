import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppDesignV2 from './AppDesignV2';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const pathname = window.location.pathname.replace(/\/+$/, '');
const isGameNewDesign2 = pathname === '/gamenewdesign2';
const isOldV1 = pathname === '/oldv1';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isOldV1 ? (
      <App />
    ) : isGameNewDesign2 ? (
      <AppDesignV2 />
    ) : (
      <AppDesignV2 />
    )}
  </React.StrictMode>
);
