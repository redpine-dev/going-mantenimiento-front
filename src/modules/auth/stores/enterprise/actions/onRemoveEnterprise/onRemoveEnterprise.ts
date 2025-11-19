import { useEnterpriseStore } from '@/modules/auth/stores/enterpriseStore';

import { OnRemoveEnterpriseFunction } from './types';

const onRemoveEnterprise: OnRemoveEnterpriseFunction = () =>
  useEnterpriseStore.setState(() => {
    return {
      enterprise: null,
    };
  });

export { onRemoveEnterprise };
