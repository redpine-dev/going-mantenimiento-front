import { PropsWithChildren } from 'react';

import { SessionContext } from './SessionContext';
import { SessionContextValues } from './types';

const SessionContextProvider = ({
  children,
  ...values
}: PropsWithChildren<SessionContextValues>) => {
  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  );
};

export { SessionContextProvider };
