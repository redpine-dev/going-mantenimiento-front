import { createContext } from 'react';

import { EnterpriseContextValues } from './types';

const EnterpriseContext = createContext<EnterpriseContextValues | null>(null);

export { EnterpriseContext };
