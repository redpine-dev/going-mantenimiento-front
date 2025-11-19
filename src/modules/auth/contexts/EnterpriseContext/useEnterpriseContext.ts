import { useContext } from 'react';

import { EnterpriseContext } from './EnterpriseContext';

const useEnterpriseContext = (consumer: string) => {
  const context = useContext(EnterpriseContext);

  if (!context) {
    throw new Error(`${consumer} must be used within a EnterpriseProvider`);
  }

  return context;
};

export { useEnterpriseContext };
