import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';
import { UpdateUserResponse } from '@/modules/users/domain/api.types';

import { UpdateUserRequest } from './types';

const updateUser = async (
  request: UpdateUserRequest,
): Promise<UpdateUserResponse> => {
  const { id, ...data } = request;
  const response = await fetchWithAuth(`/users/${id}`, {
    method: 'PUT',
    data,
  });
  return response;
};

export { updateUser };
