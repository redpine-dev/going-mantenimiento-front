import React from 'react';

import { SessionContextProvider } from '../../contexts/SessionContext';
import { useHasSession } from '../../hooks/useHasSession';

const AuthGuard = ({
  children,
  fallback = null,
  loader = null,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
  loader: React.ReactNode;
}) => {
  const { user, isLoading, isAuth } = useHasSession();

  if (isLoading || isAuth === 'unknown') {
    return loader;
  }

  if (!user) {
    return fallback;
  }

  return (
    <SessionContextProvider user={user}>{children}</SessionContextProvider>
  );
};

export { AuthGuard };
