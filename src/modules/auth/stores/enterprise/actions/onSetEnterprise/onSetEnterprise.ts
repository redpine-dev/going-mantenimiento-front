import { useEnterpriseStore } from '../../../enterpriseStore';
import { OnSetEnterpriseFunction } from './types';

const onSetEnterprise: OnSetEnterpriseFunction = enterprise =>
  useEnterpriseStore.setState(() => {
    return {
      enterprise,
    };
  });

export { onSetEnterprise };
