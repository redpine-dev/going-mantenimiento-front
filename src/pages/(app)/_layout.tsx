import { QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Outlet } from 'react-router-dom';

import { AppLayout as AppLayoutComponent } from '@/components/layout/AppLayout';
import { Toaster } from '@/components/ui/Sonner';
import { AuthGuard } from '@/modules/auth/components/AuthGuard';
import { queryClient } from '@/modules/core/api/queryClient';

const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AuthGuard
        loader={
          <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="size-12 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        }
        fallback={<Navigate to="/login" replace />}
      >
        <AppLayoutComponent>
          <Outlet />
        </AppLayoutComponent>
      </AuthGuard>
    </QueryClientProvider>
  );
};

export default AppLayout;
