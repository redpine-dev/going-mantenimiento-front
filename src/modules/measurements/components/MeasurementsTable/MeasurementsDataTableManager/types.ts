import { Measurement } from '@/modules/measurements/domain/types';

export type MeasurementsDataTableManagerProps = {
  data: Measurement[];
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
};
