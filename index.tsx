import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DesignShowcase from './components/DesignShowcase';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const pathname = window.location.pathname.replace(/\/+$/, '');
const isDesignPage = pathname === '/pagefordesign';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isDesignPage ? <DesignShowcase /> : <App />}
  </React.StrictMode>
);
