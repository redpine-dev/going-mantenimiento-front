import { User } from '@/modules/users/domain/types';

export type UsersDataManagerProps = {
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};
