// API Entity Types - prefixed with "Api"
export type ApiMeasurement = {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// API Response Wrapper
export type ApiResponse<T> = {
  success: boolean;
  data: T;
};

// Specific API Responses
export type GetMeasurementsResponse = ApiResponse<ApiMeasurement[]>;
export type CreateMeasurementResponse = ApiResponse<ApiMeasurement>;
