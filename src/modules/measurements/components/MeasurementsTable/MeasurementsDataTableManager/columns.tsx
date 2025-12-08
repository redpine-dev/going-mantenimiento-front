import { ColumnDef } from '@tanstack/react-table';
import { ChevronDown, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Measurement } from '@/modules/measurements/domain/types';

export const getColumns = (): ColumnDef<Measurement>[] => [
  {
    id: 'expand',
    header: '',
    cell: ({ row }) => (
      <Button
        variant="ghost"
        size="sm"
        className="size-6 p-0"
        onClick={() => row.toggleExpanded()}
      >
        {row.getIsExpanded() ? (
          <ChevronDown className="size-4" />
        ) : (
          <ChevronRight className="size-4" />
        )}
      </Button>
    ),
    meta: {
      className: 'w-10',
    },
  },
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
    header: 'Insatisfact.',
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
  {
    id: 'statusTotal',
    header: 'Status Total',
    cell: ({ row }) => {
      const m = row.original;
      const total =
        m.good + m.observation + m.unsatisfactory + m.danger + m.unmeasured;
      return <span className="font-bold text-primary">{total}</span>;
    },
  },
];

export const diagnosticFieldsConfig = [
  { key: 'coupling', label: 'Acoplamiento' },
  { key: 'mounting', label: 'Anclaje' },
  { key: 'externalCause', label: 'Causa Externa' },
  { key: 'cavitation', label: 'Cavitación' },
  { key: 'bearing', label: 'Cojinete' },
  { key: 'plainBearing', label: 'Cojinetes Planos' },
  { key: 'belts', label: 'Correas' },
  { key: 'structuralDeficiency', label: 'Defic. Estructural' },
  { key: 'misalignment', label: 'Desalineación' },
  { key: 'unbalance', label: 'Desbalanceo' },
  { key: 'componentWear', label: 'Desgaste Comp.' },
  { key: 'shaft', label: 'Eje' },
  { key: 'electrical', label: 'Eléctrico' },
  { key: 'gear', label: 'Engrane' },
  { key: 'aerodynamicForces', label: 'Fuerzas Aerodin.' },
  { key: 'hydraulicForces', label: 'Fuerzas Hidráulicas' },
  { key: 'lubrication', label: 'Lubricación' },
  { key: 'operational', label: 'Operacional' },
  { key: 'productLoss', label: 'Pérdida Producto' },
  { key: 'resonance', label: 'Resonancia' },
  { key: 'friction', label: 'Roce' },
  { key: 'rollingBearing', label: 'Rodamiento' },
  { key: 'sensorNoSignal', label: 'Sensor Sin Señal' },
  { key: 'safety', label: 'Seguridad' },
  { key: 'noTechnicalInfo', label: 'Sin Info. Técnica' },
  { key: 'mechanicalLooseness', label: 'Soltura Mecánica' },
  { key: 'powerTransmission', label: 'Transm. Potencia' },
] as const;
