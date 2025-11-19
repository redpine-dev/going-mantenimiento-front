import { useContext } from 'react';

import { SessionContext } from './SessionContext';

const useSessionContext = (consumer: string) => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error(`${consumer} must be used within a SessionProvider`);
  }

  return context;
};

export { useSessionContext };
