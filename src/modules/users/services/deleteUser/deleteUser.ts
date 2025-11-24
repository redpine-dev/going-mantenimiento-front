import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';
import { DeleteUserResponse } from '@/modules/users/domain/api.types';

import { DeleteUserRequest } from './types';

const deleteUser = async (
  request: DeleteUserRequest,
): Promise<DeleteUserResponse> => {
  const { id } = request;
  const response = await fetchWithAuth(`/users/${id}`, {
    method: 'DELETE',
  });
  return response;
};

export { deleteUser };
