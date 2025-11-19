import { useSessionStore } from '@/modules/auth/stores/sessionStore';

import { OnRemoveSessionFunction } from './types';

const onRemoveSession: OnRemoveSessionFunction = () =>
  useSessionStore.setState(() => {
    return {
      isAuth: false,
      user: null,
    };
  });

export { onRemoveSession };
