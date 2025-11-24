import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog/Dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Input/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select/Select';
import { useGetClients } from '@/modules/clients/hooks/useGetClients';

import { UserFormData, UserFormDialogProps } from './types';
import { userFormSchema, userFormSchemaCreate } from './validation';

const UserFormDialog = ({
  open,
  onOpenChange,
  user,
  onSubmit,
  isSubmitting,
}: UserFormDialogProps) => {
  const isEditMode = !!user;
  const { data: clients = [] } = useGetClients();

  const form = useForm<UserFormData>({
    resolver: zodResolver(isEditMode ? userFormSchema : userFormSchemaCreate),
    defaultValues: {
      username: '',
      password: '',
      role: 'admin',
      clientId: '',
    },
  });

  const watchRole = form.watch('role');

  useEffect(() => {
    if (user) {
      form.reset({
        username: user.username,
        password: '',
        role: user.role as 'admin' | 'client',
        clientId: user.clientId || '',
      });
    } else {
      form.reset({
        username: '',
        password: '',
        role: 'admin',
        clientId: '',
      });
    }
  }, [user, form]);

  const handleSubmit = (data: UserFormData) => {
    // Si está en modo edición y no se ingresó contraseña, la eliminamos del objeto
    if (isEditMode && !data.password) {
      const { username, role, clientId } = data;
      onSubmit({ username, role, clientId });
    } else {
      onSubmit(data);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
          </DialogTitle>
          <DialogDescription>
            {isEditMode
              ? 'Actualiza la información del usuario.'
              : 'Completa el formulario para crear un nuevo usuario.'}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de Usuario</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingrese el nombre de usuario"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña {isEditMode && '(opcional)'}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={
                        isEditMode
                          ? 'Dejar vacío para mantener la actual'
                          : 'Ingrese la contraseña'
                      }
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  {isEditMode && (
                    <FormDescription>
                      Dejar vacío para mantener la contraseña actual
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rol</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                    disabled={isSubmitting}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione un rol" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Administrador</SelectItem>
                      <SelectItem value="client">Cliente</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {watchRole === 'client' && (
              <FormField
                control={form.control}
                name="clientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cliente</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un cliente" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {clients.map(client => (
                          <SelectItem key={client.id} value={client.id}>
                            {client.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? 'Guardando...'
                  : isEditMode
                    ? 'Actualizar'
                    : 'Crear'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { UserFormDialog };
