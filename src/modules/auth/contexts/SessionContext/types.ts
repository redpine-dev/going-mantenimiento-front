import { User } from '@/modules/auth/domain/types';

type SessionContextValues = {
  user: User;
};

export type { SessionContextValues, User };
