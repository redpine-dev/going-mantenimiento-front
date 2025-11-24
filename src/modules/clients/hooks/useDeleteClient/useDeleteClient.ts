import { useMutation } from '@tanstack/react-query';

import { adapterDeleteClient } from '@/modules/clients/adapters/adapterDeleteClient';
import { queryClient } from '@/modules/core/api/queryClient/queryClient';

import { UseDeleteClientRequest } from './types';

const useDeleteClient = () => {
  return useMutation({
    mutationFn: (request: UseDeleteClientRequest) =>
      adapterDeleteClient(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
    onError: error => {
      console.error('Error deleting client:', error);
    },
  });
};

export { useDeleteClient };
