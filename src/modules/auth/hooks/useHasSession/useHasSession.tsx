import { useEffect, useState } from 'react';

import { getUser } from '@/modules/auth/services/getUser';
import { onRemoveSession } from '@/modules/auth/stores/session/actions/onRemoveSession';
import { onSetSession } from '@/modules/auth/stores/session/actions/onSetSession';
import { useSessionStore } from '@/modules/auth/stores/sessionStore';

const useHasSession = () => {
  const { isAuth, user } = useSessionStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      setIsLoading(true);
      try {
        const user = await getUser();
        if (user.role !== 'admin') {
          throw new Error('No autorizado');
        }
        onSetSession(user);
      } catch (error) {
        console.error(error);
        onRemoveSession();
        localStorage.removeItem('auth_token');
      }
      setIsLoading(false);
    };
    checkSession();
  }, [isAuth]);

  return { isAuth, user, isLoading };
};

export { useHasSession };
