import { useMutation } from '@tanstack/react-query';

import { adapterUpdateClient } from '@/modules/clients/adapters/adapterUpdateClient';
import { queryClient } from '@/modules/core/api/queryClient/queryClient';

import { UseUpdateClientRequest } from './types';

const useUpdateClient = () => {
  return useMutation({
    mutationFn: (request: UseUpdateClientRequest) =>
      adapterUpdateClient(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
    onError: error => {
      console.error('Error updating client:', error);
    },
  });
};

export { useUpdateClient };
