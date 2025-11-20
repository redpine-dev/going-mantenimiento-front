import { useQuery } from '@tanstack/react-query';

import { adapterGetClients } from '@/modules/clients/adapters/adapterGetClients';

const useGetClients = () => {
  const { data, ...query } = useQuery({
    queryKey: ['clients'],
    queryFn: adapterGetClients,
  });

  return {
    data,
    ...query,
  };
};

export { useGetClients };
