import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/modules/core/api/queryClient/queryClient';
import { adapterCreateUser } from '@/modules/users/adapters/adapterCreateUser';

import { UseCreateUserRequest } from './types';

const useCreateUser = () => {
  return useMutation({
    mutationFn: (request: UseCreateUserRequest) => adapterCreateUser(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: error => {
      console.error('Error creating user:', error);
    },
  });
};

export { useCreateUser };
