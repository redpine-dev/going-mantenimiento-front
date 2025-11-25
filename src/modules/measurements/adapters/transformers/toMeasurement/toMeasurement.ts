import { ApiMeasurement } from '@/modules/measurements/domain/api.types';
import { Measurement } from '@/modules/measurements/domain/types';

const toMeasurement = (api: ApiMeasurement): Measurement => {
  return {
    id: api._id,
    date: new Date(api.date),
    good: api.good,
    observation: api.observation,
    unsatisfactory: api.unsatisfactory,
    danger: api.danger,
    unmeasured: api.unmeasured,
    clientId: api.clientId,
    createdAt: new Date(api.createdAt),
    updatedAt: new Date(api.updatedAt),
  };
};

export { toMeasurement };
