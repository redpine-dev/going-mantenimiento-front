import { User } from '@/modules/users/domain/types';
import { updateUser } from '@/modules/users/services/updateUser';

import { toUser } from '../transformers/toUser';
import { AdapterUpdateUserParams } from './types';

const adapterUpdateUser = async (
  params: AdapterUpdateUserParams,
): Promise<User> => {
  const response = await updateUser(params);
  return toUser(response.data);
};

export { adapterUpdateUser };
