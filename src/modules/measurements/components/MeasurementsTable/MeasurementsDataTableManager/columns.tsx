import { ColumnDef } from '@tanstack/react-table';

import { Measurement } from '@/modules/measurements/domain/types';

export const getColumns = (): ColumnDef<Measurement>[] => [
  {
    accessorKey: 'date',
    header: 'Mes/Año',
    cell: ({ row }) => {
      const mm = row.original.month;
      const yyyy = row.original.year;
      return `${mm}/${yyyy}`;
    },
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
