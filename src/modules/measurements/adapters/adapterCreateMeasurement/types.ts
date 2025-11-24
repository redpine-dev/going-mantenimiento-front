export type AdapterCreateMeasurementParams = {
  date: string | Date;
  good: number;
  observation: number;
  unsatisfactory: number;
  danger: number;
  unmeasured: number;
  clientId: string;
};
