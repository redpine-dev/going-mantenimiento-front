import { QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Outlet } from 'react-router-dom';

import { Toaster } from '@/components/ui/Sonner';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
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
        <div className="min-h-screen bg-background">
          {/* Header con ThemeToggle */}
          <header className="border-b border-border bg-card">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-foreground">
                  RedPine
                </h1>
              </div>
              <ThemeToggle />
            </div>
          </header>

          {/* Contenido principal */}
          <main className="container mx-auto px-4 py-6">
            <Outlet />
          </main>
        </div>
      </AuthGuard>
    </QueryClientProvider>
  );
};

export default AppLayout;
