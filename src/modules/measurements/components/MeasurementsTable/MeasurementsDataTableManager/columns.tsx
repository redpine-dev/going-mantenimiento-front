import { ColumnDef } from '@tanstack/react-table';

import { Measurement } from '@/modules/measurements/domain/types';

export const getColumns = (): ColumnDef<Measurement>[] => [
  {
    accessorKey: 'date',
    header: 'Fecha',
    cell: ({ row }) =>
      row.original.date.toLocaleDateString('es-CL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    enableSorting: true,
  },
  {
    accessorKey: 'good',
    header: 'Bueno',
    cell: ({ row }) => row.original.good,
  },
  {
    accessorKey: 'observation',
    header: 'Observación',
    cell: ({ row }) => row.original.observation,
  },
  {
    accessorKey: 'unsatisfactory',
    header: 'Insatisfactorio',
    cell: ({ row }) => row.original.unsatisfactory,
  },
  {
    accessorKey: 'danger',
    header: 'Peligro',
    cell: ({ row }) => row.original.danger,
  },
  {
    accessorKey: 'unmeasured',
    header: 'No Medido',
    cell: ({ row }) => row.original.unmeasured,
  },
];
