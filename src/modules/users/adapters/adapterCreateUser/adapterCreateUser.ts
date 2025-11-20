import { User } from '@/modules/users/domain/types';
import { createUser } from '@/modules/users/services/createUser';

import { toUser } from '../transformers/toUser';
import { AdapterCreateUserParams } from './types';

const adapterCreateUser = async (
  params: AdapterCreateUserParams,
): Promise<User> => {
  const response = await createUser(params);
  return toUser(response.data);
};

export { adapterCreateUser };
