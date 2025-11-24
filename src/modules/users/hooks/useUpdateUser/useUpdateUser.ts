import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/modules/core/api/queryClient/queryClient';
import { adapterUpdateUser } from '@/modules/users/adapters/adapterUpdateUser';

import { UseUpdateUserRequest } from './types';

const useUpdateUser = () => {
  return useMutation({
    mutationFn: (request: UseUpdateUserRequest) => adapterUpdateUser(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: error => {
      console.error('Error updating user:', error);
    },
  });
};

export { useUpdateUser };
