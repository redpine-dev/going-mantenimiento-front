import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/modules/core/api/queryClient/queryClient';

import { adapterCreateMeasurement } from '../../adapters/adapterCreateMeasurement';
import { UseCreateMeasurementRequest } from './types';

const useCreateMeasurement = () => {
  return useMutation({
    mutationFn: (request: UseCreateMeasurementRequest) =>
      adapterCreateMeasurement(request),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['measurements', variables.clientId],
      });
    },
    onError: error => {
      console.error('Error creating measurement:', error);
    },
  });
};

export { useCreateMeasurement };
