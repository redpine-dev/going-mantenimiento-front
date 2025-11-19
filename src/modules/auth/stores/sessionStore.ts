import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { queryClient } from '@/modules/core/api/queryClient';

import { UseSessionStoreType } from './types';

const useSessionStore = create<UseSessionStoreType>()(
  immer(() => {
    return {
      isAuth: 'unknown',
      user: null,
    } as UseSessionStoreType;
  }),
);

useSessionStore.subscribe(state => {
  if (state.isAuth === false) {
    queryClient.clear();
  }
});

export { useSessionStore };
