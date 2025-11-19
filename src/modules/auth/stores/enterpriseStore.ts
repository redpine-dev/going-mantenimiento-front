import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { UseEnterpriseStoreType } from './types';

const useEnterpriseStore = create<UseEnterpriseStoreType>()(
  immer(
    persist(
      () => {
        return {
          enterprise: null,
        } as UseEnterpriseStoreType;
      },
      {
        name: 'enterprise',
      },
    ),
  ),
);

export { useEnterpriseStore };
