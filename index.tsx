import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppV2 from './AppV2';
import DesignShowcase from './components/DesignShowcase';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const pathname = window.location.pathname.replace(/\/+$/, '');
const isDesignPage = pathname === '/pagefordesign';
const isTowerV2 = pathname === '/towerv2';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isDesignPage ? <DesignShowcase /> : isTowerV2 ? <AppV2 /> : <App />}
  </React.StrictMode>
);
