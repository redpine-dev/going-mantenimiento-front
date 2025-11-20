// API Entity Types - prefixed with "Api"
export type ApiUser = {
  _id: string;
  username: string;
  password: string;
  role: string;
  clientId?: string;
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
export type GetUsersResponse = ApiResponse<ApiUser[]>;
export type GetUserResponse = ApiResponse<ApiUser>;
export type CreateUserResponse = ApiResponse<ApiUser>;
export type UpdateUserResponse = ApiResponse<ApiUser>;
export type DeleteUserResponse = ApiResponse<ApiUser>;
