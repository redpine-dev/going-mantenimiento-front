import { Table } from '@tanstack/react-table';

import { Measurement } from '@/modules/measurements/domain/types';

export type MeasurementsTableProps = {
  table: Table<Measurement>;
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
};
