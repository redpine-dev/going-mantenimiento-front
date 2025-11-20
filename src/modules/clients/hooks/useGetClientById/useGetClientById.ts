import { useQuery } from '@tanstack/react-query';

import { adapterGetClientById } from '@/modules/clients/adapters/adapterGetClientById';

import { UseGetClientByIdParams } from './types';

const useGetClientById = (params: UseGetClientByIdParams) => {
  const { data, ...query } = useQuery({
    queryKey: ['clients', params.id],
    queryFn: () => adapterGetClientById(params),
    enabled: !!params.id,
  });

  return {
    data,
    ...query,
  };
};

export { useGetClientById };
