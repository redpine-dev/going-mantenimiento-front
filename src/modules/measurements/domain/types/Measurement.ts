export type Measurement = {
  id: string;
  date: Date;
  good: number;
  observation: number;
  unsatisfactory: number;
  danger: number;
  unmeasured: number;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
};
