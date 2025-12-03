import { ApiMeasurement } from '@/modules/measurements/domain/api.types';
import { Measurement } from '@/modules/measurements/domain/types';

const toMeasurement = (api: ApiMeasurement): Measurement => {
  return {
    id: api._id,
    year: api.year,
    month: api.month,
    monthIndex: api.monthIndex,
    opening: api.opening,
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
