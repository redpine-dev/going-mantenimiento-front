import { EnterpriseContextProvider } from '../../contexts/EnterpriseContext';
import { useHasEnterprise } from '../../hooks/useHasEnterprise';
import { EnterpriseGuardProps } from './types';

const EnterpriseGuard = ({ children }: EnterpriseGuardProps) => {
  const { enterprise } = useHasEnterprise();

  if (enterprise === null) {
    return null;
  }

  return (
    <EnterpriseContextProvider enterprise={enterprise}>
      {children}
    </EnterpriseContextProvider>
  );
};

export { EnterpriseGuard };
