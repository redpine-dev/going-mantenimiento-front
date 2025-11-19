import { Enterprise, User } from '@/modules/auth/domain/types';

type UseSessionStoreType = {
  isAuth: true | false | 'unknown';
  user: null | User;
};

type UseEnterpriseStoreType = {
  enterprise: null | Enterprise;
};

export type { UseEnterpriseStoreType, UseSessionStoreType };
