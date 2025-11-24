import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';
import { CreateUserResponse } from '@/modules/users/domain/api.types';

import { CreateUserRequest } from './types';

const createUser = async (
  request: CreateUserRequest,
): Promise<CreateUserResponse> => {
  const response = await fetchWithAuth('/users', {
    method: 'POST',
    data: request,
  });
  return response;
};

export { createUser };
