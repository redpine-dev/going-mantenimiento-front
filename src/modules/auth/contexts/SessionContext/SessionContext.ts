import { createContext } from 'react';

import { SessionContextValues } from './types';

const SessionContext = createContext<SessionContextValues | null>(null);

export { SessionContext };
