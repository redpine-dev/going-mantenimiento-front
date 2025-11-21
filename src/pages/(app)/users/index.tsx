import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/Button';
import { DeleteUserDialog } from '@/modules/users/components/DeleteUserDialog';
import {
  UserFormData,
  UserFormDialog,
} from '@/modules/users/components/UserFormDialog';
import { UsersDataManager } from '@/modules/users/components/UsersTable/UsersDataManager';
import { User } from '@/modules/users/domain/types';
import { useCreateUser } from '@/modules/users/hooks/useCreateUser';
import { useDeleteUser } from '@/modules/users/hooks/useDeleteUser';
import { useUpdateUser } from '@/modules/users/hooks/useUpdateUser';

const UsersPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const createMutation = useCreateUser();
  const updateMutation = useUpdateUser();
  const deleteMutation = useDeleteUser();

  const handleOpenCreateDialog = () => {
    setSelectedUser(undefined);
    setIsFormOpen(true);
  };

  const handleOpenEditDialog = (user: User) => {
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleOpenDeleteDialog = (user: User) => {
    setUserToDelete(user);
    setIsDeleteOpen(true);
  };

  const handleFormSubmit = async (data: UserFormData) => {
    try {
      if (selectedUser) {
        // En modo edición
        const updateData: {
          id: string;
          username: string;
          password?: string;
          role: string;
          clientId?: string;
        } = {
          id: selectedUser.id,
          username: data.username,
          role: data.role,
        };

        // Solo incluir password si se proporcionó
        if (data.password && data.password.trim().length > 0) {
          updateData.password = data.password;
        }

        // Solo incluir clientId si el rol es "client"
        if (data.role === 'client' && data.clientId) {
          updateData.clientId = data.clientId;
        }

        await updateMutation.mutateAsync(updateData);
        toast.success('Usuario actualizado exitosamente');
      } else {
        // En modo creación
        const createData: {
          username: string;
          password: string;
          role: string;
          clientId?: string;
        } = {
          username: data.username,
          password: data.password!,
          role: data.role,
        };

        // Solo incluir clientId si el rol es "client"
        if (data.role === 'client' && data.clientId) {
          createData.clientId = data.clientId;
        }

        await createMutation.mutateAsync(createData);
        toast.success('Usuario creado exitosamente');
      }
      setIsFormOpen(false);
      setSelectedUser(undefined);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ocurrió un error';
      toast.error(errorMessage);
    }
  };

  const handleDelete = async () => {
    if (!userToDelete) return;

    try {
      await deleteMutation.mutateAsync({ id: userToDelete.id });
      toast.success('Usuario eliminado exitosamente');
      setIsDeleteOpen(false);
      setUserToDelete(null);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ocurrió un error';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gestión de Usuarios</h1>
          <p className="text-muted-foreground">
            Administra los usuarios del sistema
          </p>
        </div>
        <Button onClick={handleOpenCreateDialog}>
          <Plus className="mr-2 size-4" />
          Agregar Usuario
        </Button>
      </div>

      <UsersDataManager
        onEdit={handleOpenEditDialog}
        onDelete={handleOpenDeleteDialog}
      />

      <UserFormDialog
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        user={selectedUser}
        onSubmit={handleFormSubmit}
        isSubmitting={createMutation.isPending || updateMutation.isPending}
      />

      <DeleteUserDialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        user={userToDelete}
        onConfirm={handleDelete}
        isDeleting={deleteMutation.isPending}
      />
    </div>
  );
};

export default UsersPage;
