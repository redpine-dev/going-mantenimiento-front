import { User } from '@/modules/users/domain/types';

export type UsersDataTableManagerProps = {
  data: User[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};
