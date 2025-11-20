import { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash2 } from 'lucide-react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { User } from '@/modules/users/domain/types';

import { ClientCell } from '../ClientCell';

type GetColumnsProps = {
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

const getColumns = ({
  onEdit,
  onDelete,
}: GetColumnsProps): ColumnDef<User>[] => [
  {
    accessorKey: 'username',
    header: 'Usuario',
    cell: ({ row }) => <p className="font-medium">{row.original.username}</p>,
    enableSorting: true,
  },
  {
    accessorKey: 'role',
    header: 'Rol',
    cell: ({ row }) => {
      const role = row.original.role;
      const variant = role === 'admin' ? 'default' : 'secondary';
      const label = role === 'admin' ? 'Administrador' : 'Cliente';

      return (
        <Badge variant={variant} className="capitalize">
          {label}
        </Badge>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: 'clientId',
    header: 'Cliente',
    cell: ({ row }) => {
      const user = row.original;

      if (user.role !== 'client') {
        return <span className="text-sm text-muted-foreground">-</span>;
      }

      if (!user.clientId) {
        return (
          <span className="text-sm text-muted-foreground">Sin asignar</span>
        );
      }

      return <ClientCell clientId={user.clientId} />;
    },
    enableSorting: false,
  },
  {
    accessorKey: 'createdAt',
    header: 'Fecha de Creación',
    cell: ({ row }) => {
      const date = row.original.createdAt;
      return (
        <div className="text-sm text-muted-foreground">
          {date.toLocaleDateString('es-CL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      );
    },
    enableSorting: true,
  },
  {
    id: 'actions',
    header: 'Acciones',
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onEdit(row.original)}
        >
          <Pencil className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(row.original)}
        >
          <Trash2 className="size-4 text-destructive" />
        </Button>
      </div>
    ),
    enableSorting: false,
  },
];

export { getColumns };
