import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/modules/core/api/queryClient/queryClient';
import { adapterDeleteUser } from '@/modules/users/adapters/adapterDeleteUser';

import { UseDeleteUserRequest } from './types';

const useDeleteUser = () => {
  return useMutation({
    mutationFn: (request: UseDeleteUserRequest) => adapterDeleteUser(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: error => {
      console.error('Error deleting user:', error);
    },
  });
};

export { useDeleteUser };
