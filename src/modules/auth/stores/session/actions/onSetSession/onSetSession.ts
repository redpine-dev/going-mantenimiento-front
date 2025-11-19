import { useSessionStore } from '@/modules/auth/stores/sessionStore';

import { OnSetSessionFunction } from './types';

const onSetSession: OnSetSessionFunction = user =>
  useSessionStore.setState(() => {
    return {
      isAuth: true,
      user,
    };
  });

export { onSetSession };
