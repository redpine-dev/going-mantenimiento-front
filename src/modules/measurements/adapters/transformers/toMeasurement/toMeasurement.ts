import { ApiMeasurement } from '@/modules/measurements/domain/api.types';
import { Measurement } from '@/modules/measurements/domain/types';

const toMeasurement = (api: ApiMeasurement): Measurement => {
  return {
    id: api._id,
    year: api.year,
    month: api.month,
    monthIndex: api.monthIndex,
    opening: api.opening,
    // Campos de estado originales
    good: api.good,
    observation: api.observation,
    unsatisfactory: api.unsatisfactory,
    danger: api.danger,
    unmeasured: api.unmeasured,
    // Campos de diagnóstico
    coupling: api.coupling,
    mounting: api.mounting,
    externalCause: api.externalCause,
    cavitation: api.cavitation,
    bearing: api.bearing,
    plainBearing: api.plainBearing,
    belts: api.belts,
    structuralDeficiency: api.structuralDeficiency,
    misalignment: api.misalignment,
    unbalance: api.unbalance,
    componentWear: api.componentWear,
    shaft: api.shaft,
    electrical: api.electrical,
    gear: api.gear,
    aerodynamicForces: api.aerodynamicForces,
    hydraulicForces: api.hydraulicForces,
    lubrication: api.lubrication,
    operational: api.operational,
    productLoss: api.productLoss,
    resonance: api.resonance,
    friction: api.friction,
    rollingBearing: api.rollingBearing,
    sensorNoSignal: api.sensorNoSignal,
    safety: api.safety,
    noTechnicalInfo: api.noTechnicalInfo,
    mechanicalLooseness: api.mechanicalLooseness,
    powerTransmission: api.powerTransmission,
    clientId: api.clientId,
    createdAt: new Date(api.createdAt),
    updatedAt: new Date(api.updatedAt),
  };
};

export { toMeasurement };
