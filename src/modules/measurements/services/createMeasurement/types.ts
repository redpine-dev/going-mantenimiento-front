export type CreateMeasurementRequest = {
  year: number;
  month: number;
  opening: string;
  // Campos de estado originales
  good: number;
  observation: number;
  unsatisfactory: number;
  danger: number;
  unmeasured: number;
  // Campos de diagnóstico
  coupling: number; // ACOPLAMIENTO
  mounting: number; // ANCLAJE
  externalCause: number; // CAUSA EXTERNA
  cavitation: number; // CAVITACIÓN
  bearing: number; // COJINETE
  plainBearing: number; // COJINETES PLANOS
  belts: number; // CORREAS
  structuralDeficiency: number; // DEFIC. ESTRUCTURAL
  misalignment: number; // DESALINEACIÓN
  unbalance: number; // DESBALANCEO
  componentWear: number; // DESGASTE COMPONENTES
  shaft: number; // EJE
  electrical: number; // ELÉCTRICO
  gear: number; // ENGRANE
  aerodynamicForces: number; // FUERZAS AERODINÁMICAS
  hydraulicForces: number; // FUERZAS HIDRÁULICAS
  lubrication: number; // LUBRICACIÓN
  operational: number; // OPERACIONAL
  productLoss: number; // PÉRDIDA DE PRODUCTO
  resonance: number; // RESONANCIA
  friction: number; // ROCE
  rollingBearing: number; // RODAMIENTO
  sensorNoSignal: number; // SENSOR SIN SEÑAL
  safety: number; // SEGURIDAD
  noTechnicalInfo: number; // SIN INFO. TÉCNICA
  mechanicalLooseness: number; // SOLTURA MECÁNICA
  powerTransmission: number; // TRANSMISIÓN DE POTENCIA
  clientId: string;
};
