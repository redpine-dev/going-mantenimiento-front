import { Enterprise } from './Enterprise';

type User = {
  name: string;
  id: string;
  isRedPineAdmin: boolean;
  enterprises: Enterprise[];
};

export type { User };
