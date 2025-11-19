import { useEnterpriseStore } from '../../stores/enterpriseStore';

const useHasEnterprise = () => {
  const { enterprise } = useEnterpriseStore();

  return { enterprise };
};

export { useHasEnterprise };
