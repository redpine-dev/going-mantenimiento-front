import { Enterprise } from '@/modules/auth/domain/types';

type EnterpriseContextValues = {
  enterprise: Enterprise;
};

export type { Enterprise, EnterpriseContextValues };
