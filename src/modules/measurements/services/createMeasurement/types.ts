export type CreateMeasurementRequest = {
  date: string | Date;
  good: number;
  observation: number;
  unsatisfactory: number;
  danger: number;
  unmeasured: number;
  clientId: string;
};
