import { User } from '@/modules/users/domain/types';
import { getUsers } from '@/modules/users/services/getUsers';

import { toUser } from '../transformers/toUser';

const adapterGetUsers = async (): Promise<User[]> => {
  const response = await getUsers();

  return response.data.map(toUser);
};

export { adapterGetUsers };
