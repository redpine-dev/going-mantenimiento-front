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
        onSetSession(user);
      } catch (error) {
        console.error(error);
        onRemoveSession();
      }
      setIsLoading(false);
    };
    checkSession();
  }, [isAuth]);

  return { isAuth, user, isLoading };
};

export { useHasSession };
