import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import ThemeProvider from './modules/shared/hooks/useTheme/useTheme';
import { Routes } from './utils/routes/react-router-lazy';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="redpine-ui-theme">
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);
