import { User } from '@/modules/auth/domain/types';

type OnSetSessionFunction = (user: User) => void;

export type { OnSetSessionFunction };
