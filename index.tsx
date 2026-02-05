import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppV2 from './AppV2';
import AppDesignV2 from './AppDesignV2';
import DesignShowcase from './components/DesignShowcase';
import DesignShowcaseV2 from './components/DesignShowcaseV2';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const pathname = window.location.pathname.replace(/\/+$/, '');
const isDesignPage = pathname === '/pagefordesign';
const isDesignPageV2 = pathname === '/pagefordesign2';
const isTowerV2 = pathname === '/towerv2';
const isGameNewDesign2 = pathname === '/gamenewdesign2';

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    {isDesignPage ? (
      <DesignShowcase />
    ) : isDesignPageV2 ? (
      <DesignShowcaseV2 />
    ) : isTowerV2 ? (
      <AppV2 />
    ) : isGameNewDesign2 ? (
      <AppDesignV2 />
    ) : (
      <App />
    )}
  </React.StrictMode>
);
