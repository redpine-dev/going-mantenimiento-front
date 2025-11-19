import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth';

const getUser = async () => {
  const response = await fetchWithAuth('/auth/user');
  return response.user;
};

export { getUser };
