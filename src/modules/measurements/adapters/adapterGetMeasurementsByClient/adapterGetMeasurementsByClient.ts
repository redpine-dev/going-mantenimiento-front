import { Measurement } from '@/modules/measurements/domain/types';
import { getMeasurementsByClient } from '@/modules/measurements/services/getMeasurementsByClient';

import { toMeasurement } from '../transformers/toMeasurement';
import { AdapterGetMeasurementsByClientParams } from './types.ts';

const adapterGetMeasurementsByClient = async (
  params: AdapterGetMeasurementsByClientParams,
): Promise<Measurement[]> => {
  const response = await getMeasurementsByClient(params);
  return response.data.map(toMeasurement);
};

export { adapterGetMeasurementsByClient };
