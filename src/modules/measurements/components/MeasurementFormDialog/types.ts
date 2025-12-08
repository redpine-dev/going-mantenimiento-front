export type MeasurementFormData = {
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
  coupling: number;
  mounting: number;
  externalCause: number;
  cavitation: number;
  bearing: number;
  plainBearing: number;
  belts: number;
  structuralDeficiency: number;
  misalignment: number;
  unbalance: number;
  componentWear: number;
  shaft: number;
  electrical: number;
  gear: number;
  aerodynamicForces: number;
  hydraulicForces: number;
  lubrication: number;
  operational: number;
  productLoss: number;
  resonance: number;
  friction: number;
  rollingBearing: number;
  sensorNoSignal: number;
  safety: number;
  noTechnicalInfo: number;
  mechanicalLooseness: number;
  powerTransmission: number;
};

export type MeasurementFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  clientId: string;
  onSubmit: (data: MeasurementFormData) => void;
  isSubmitting?: boolean;
  presetOpening?: string;
};
