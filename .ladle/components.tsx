/* eslint-disable react/prop-types */
import '../src/index.css';

import type { GlobalProvider } from '@ladle/react';
import React from 'react';

export const Provider: GlobalProvider = ({ children, globalState }) => {
  // Aplicar el tema desde globalState al body para que las CSS variables funcionen
  React.useEffect(() => {
    if (globalState.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [globalState.theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">{children}</div>
  );
};
