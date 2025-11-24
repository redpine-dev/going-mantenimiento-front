// API Entity Types - prefixed with "Api"
export type ApiClient = {
  _id: string;
  name: string;
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
export type GetClientsResponse = ApiResponse<ApiClient[]>;
export type GetClientResponse = ApiResponse<ApiClient>;
export type CreateClientResponse = ApiResponse<ApiClient>;
export type UpdateClientResponse = ApiResponse<ApiClient>;
export type DeleteClientResponse = ApiResponse<ApiClient>;
