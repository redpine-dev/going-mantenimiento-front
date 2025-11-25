import { Measurement } from '@/modules/measurements/domain/types';
import { createMeasurement } from '@/modules/measurements/services/createMeasurement';

import { toMeasurement } from '../transformers/toMeasurement';
import { AdapterCreateMeasurementParams } from './types';

const adapterCreateMeasurement = async (
  params: AdapterCreateMeasurementParams,
): Promise<Measurement> => {
  const response = await createMeasurement(params);
  return toMeasurement(response.data);
};

export { adapterCreateMeasurement };
