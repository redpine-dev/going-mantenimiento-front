import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';
import { CreateMeasurementResponse } from '@/modules/measurements/domain/api.types';

import { CreateMeasurementRequest } from './types';

const createMeasurement = async (
  request: CreateMeasurementRequest,
): Promise<CreateMeasurementResponse> => {
  const response = await fetchWithAuth('/measurements', {
    method: 'POST',
    data: request,
  });
  return response;
};

export { createMeasurement };
