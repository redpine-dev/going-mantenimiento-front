import { ApiUser } from '@/modules/users/domain/api.types';
import { User } from '@/modules/users/domain/types';

const toUser = (apiUser: ApiUser): User => {
  return {
    id: apiUser._id,
    username: apiUser.username,
    role: apiUser.role,
    clientId: apiUser.clientId,
    createdAt: new Date(apiUser.createdAt),
    updatedAt: new Date(apiUser.updatedAt),
  };
};

export { toUser };
