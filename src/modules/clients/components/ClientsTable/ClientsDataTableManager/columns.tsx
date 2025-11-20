import { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Client } from '@/modules/clients/domain/types';

type GetColumnsProps = {
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
};

export const getColumns = ({
  onEdit,
  onDelete,
}: GetColumnsProps): ColumnDef<Client>[] => [
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({ row }) => <p>{row.original.name}</p>,
    enableSorting: true,
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
          aria-label="Editar cliente"
        >
          <Pencil className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(row.original)}
          aria-label="Eliminar cliente"
        >
          <Trash2 className="size-4 text-destructive" />
        </Button>
      </div>
    ),
    enableSorting: false,
  },
];
