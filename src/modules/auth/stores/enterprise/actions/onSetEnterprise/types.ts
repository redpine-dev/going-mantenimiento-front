import { Enterprise } from '@/modules/auth/domain/types';

type OnSetEnterpriseFunction = (enterprise: Enterprise) => void;

export type { OnSetEnterpriseFunction };
