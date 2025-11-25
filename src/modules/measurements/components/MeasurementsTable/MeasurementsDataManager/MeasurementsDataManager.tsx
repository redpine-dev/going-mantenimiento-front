import { useGetMeasurementsByClient } from '@/modules/measurements/hooks/useGetMeasurementsByClient';

import { MeasurementsDataTableManager } from '../MeasurementsDataTableManager';
import { MeasurementsDataManagerProps } from './types';

const MeasurementsDataManager = ({
  clientId,
}: MeasurementsDataManagerProps) => {
  const {
    data: measurements = [],
    isLoading,
    isError,
    refetch,
  } = useGetMeasurementsByClient({ clientId });

  return (
    <MeasurementsDataTableManager
      data={measurements}
      isLoading={isLoading}
      isError={isError}
      onRetry={() => refetch()}
    />
  );
};

export { MeasurementsDataManager };
