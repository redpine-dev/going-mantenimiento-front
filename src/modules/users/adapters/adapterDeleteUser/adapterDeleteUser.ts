import { User } from '@/modules/users/domain/types';
import { deleteUser } from '@/modules/users/services/deleteUser';

import { toUser } from '../transformers/toUser';
import { AdapterDeleteUserParams } from './types';

const adapterDeleteUser = async (
  params: AdapterDeleteUserParams,
): Promise<User> => {
  const response = await deleteUser(params);
  return toUser(response.data);
};

export { adapterDeleteUser };
