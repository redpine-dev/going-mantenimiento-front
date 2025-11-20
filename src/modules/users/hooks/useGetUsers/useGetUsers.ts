import { useQuery } from '@tanstack/react-query';

import { adapterGetUsers } from '@/modules/users/adapters/adapterGetUsers';

const useGetUsers = () => {
  const { data, ...query } = useQuery({
    queryKey: ['users'],
    queryFn: adapterGetUsers,
  });

  console.log(data);
  return {
    data,
    ...query,
  };
};

export { useGetUsers };
