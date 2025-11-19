import { PropsWithChildren } from 'react';

import { EnterpriseContext } from './EnterpriseContext';
import { EnterpriseContextValues } from './types';

const EnterpriseContextProvider = ({
  children,
  ...values
}: PropsWithChildren<EnterpriseContextValues>) => {
  return (
    <EnterpriseContext.Provider value={values}>
      {children}
    </EnterpriseContext.Provider>
  );
};

export { EnterpriseContextProvider };
