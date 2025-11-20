import { Skeleton } from '@/components/ui/Skeleton';
import { useGetClientById } from '@/modules/clients/hooks/useGetClientById';

const ClientCell = ({ clientId }: { clientId: string }) => {
  const {
    data: client,
    isLoading,
    isError,
  } = useGetClientById({ id: clientId });

  if (isLoading) {
    return <Skeleton className="h-4 w-24" />;
  }

  if (isError) {
    return <span className="text-sm text-destructive">Error</span>;
  }

  return <span className="text-sm">{client?.name}</span>;
};

export { ClientCell };
