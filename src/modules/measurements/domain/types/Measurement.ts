export type Measurement = {
  id: string;
  year: number;
  month: number; // 1-12
  monthIndex: number; // year*12 + (month - 1)
  opening: string;
  good: number;
  observation: number;
  unsatisfactory: number;
  danger: number;
  unmeasured: number;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
};
