import { Navigate } from 'react-router-dom';

import { AuthGuard } from '@/modules/auth/components/AuthGuard/AuthGuard';
import { LoginCard } from '@/modules/auth/components/LoginCard';

const Index = () => {
  return (
    <AuthGuard fallback={<LoginCard />} loader={<div>Cargando...</div>}>
      <Navigate to="/dashboard" />
    </AuthGuard>
  );
};

export default Index;
