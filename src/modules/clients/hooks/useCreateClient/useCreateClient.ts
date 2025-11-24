import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/modules/core/api/queryClient/queryClient';

import { adapterCreateClient } from '../../adapters/adapterCreateClient';
import { UseCreateClientRequest } from './types';

const useCreateClient = () => {
  return useMutation({
    mutationFn: (request: UseCreateClientRequest) =>
      adapterCreateClient(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
    onError: error => {
      console.error('Error creating client:', error);
    },
  });
};

export { useCreateClient };
