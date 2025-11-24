import { useQuery } from '@tanstack/react-query';

import { adapterGetMeasurementsByClient } from '@/modules/measurements/adapters/adapterGetMeasurementsByClient';

import { UseGetMeasurementsByClientParams } from './types';

const useGetMeasurementsByClient = (
  params: UseGetMeasurementsByClientParams,
) => {
  const { data, ...query } = useQuery({
    queryKey: ['measurements', params.clientId],
    queryFn: () => adapterGetMeasurementsByClient(params),
    enabled: !!params.clientId,
  });

  return {
    data,
    ...query,
  };
};

export { useGetMeasurementsByClient };
