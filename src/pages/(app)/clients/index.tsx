import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  ClientFormData,
  ClientFormDialog,
} from '@/modules/clients/components/ClientFormDialog';
import { ClientsDataManager } from '@/modules/clients/components/ClientsTable/ClientsDataManager';
import { DeleteClientDialog } from '@/modules/clients/components/DeleteClientDialog';
import { Client } from '@/modules/clients/domain/types';
import { useCreateClient } from '@/modules/clients/hooks/useCreateClient';
import { useDeleteClient } from '@/modules/clients/hooks/useDeleteClient';
import { useUpdateClient } from '@/modules/clients/hooks/useUpdateClient';

const ClientsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | undefined>(
    undefined,
  );
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);

  const createMutation = useCreateClient();
  const updateMutation = useUpdateClient();
  const deleteMutation = useDeleteClient();

  const handleOpenCreateDialog = () => {
    setSelectedClient(undefined);
    setIsFormOpen(true);
  };

  const handleOpenEditDialog = (client: Client) => {
    setSelectedClient(client);
    setIsFormOpen(true);
  };

  const handleOpenDeleteDialog = (client: Client) => {
    setClientToDelete(client);
    setIsDeleteOpen(true);
  };

  const handleFormSubmit = async (data: ClientFormData) => {
    try {
      if (selectedClient) {
        await updateMutation.mutateAsync({
          id: selectedClient.id,
          name: data.name,
        });
        toast.success('Cliente actualizado exitosamente');
      } else {
        await createMutation.mutateAsync({ name: data.name });
        toast.success('Cliente creado exitosamente');
      }
      setIsFormOpen(false);
      setSelectedClient(undefined);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ocurrió un error';
      toast.error(errorMessage);
    }
  };

  const handleDelete = async () => {
    if (!clientToDelete) return;

    try {
      await deleteMutation.mutateAsync({ id: clientToDelete.id });
      toast.success('Cliente eliminado exitosamente');
      setIsDeleteOpen(false);
      setClientToDelete(null);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ocurrió un error';

      if (
        errorMessage.includes('usuarios asociados') ||
        errorMessage.includes('associated')
      ) {
        toast.error(
          'No se puede eliminar el cliente porque tiene usuarios asociados',
        );
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestión de Clientes</h1>
          <p className="text-muted-foreground">
            Administra los clientes del sistema
          </p>
        </div>
        <Button onClick={handleOpenCreateDialog}>
          <Plus className="mr-2 size-4" />
          Agregar Cliente
        </Button>
      </div>

      <Card>
        <ClientsDataManager
          onEdit={handleOpenEditDialog}
          onDelete={handleOpenDeleteDialog}
        />
      </Card>

      <ClientFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        client={selectedClient}
        onSubmit={handleFormSubmit}
        isSubmitting={createMutation.isPending || updateMutation.isPending}
      />

      <DeleteClientDialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        client={clientToDelete}
        onConfirm={handleDelete}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
};

export default ClientsPage;
