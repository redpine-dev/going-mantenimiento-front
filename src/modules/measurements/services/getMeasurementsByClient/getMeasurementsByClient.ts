import { fetchWithAuth } from '@/modules/core/api/client/fetchWithAuth/fetchWithAuth';
import { GetMeasurementsResponse } from '@/modules/measurements/domain/api.types';

import { GetMeasurementsByClientRequest } from './types';

const getMeasurementsByClient = async (
  request: GetMeasurementsByClientRequest,
): Promise<GetMeasurementsResponse> => {
  const response = await fetchWithAuth('/measurements', {
    method: 'GET',
    params: { clientId: request.clientId },
  });
  return response;
};

export { getMeasurementsByClient };
