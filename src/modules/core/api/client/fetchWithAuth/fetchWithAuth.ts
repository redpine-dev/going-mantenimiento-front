import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import ENVIRONMENT from '@/lib/environment';
import { onRemoveSession } from '@/modules/auth/stores/session/actions/onRemoveSession';

interface FetchWithAuthOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: unknown;
  params?: Record<string, string | number | boolean>; // Query parameters
  headers?: Record<string, string>;
  responseType?: 'json' | 'blob' | 'text' | 'arraybuffer';
}

// Helper function for making authenticated requests
export const fetchWithAuth = async (
  endpoint: string,
  options: FetchWithAuthOptions = {},
) => {
  const token = localStorage.getItem('auth_token');

  if (!token) {
    throw new Error('No autorizado - token no válido');
  }

  const axiosConfig: AxiosRequestConfig = {
    method: options.method || 'GET',
    url: `${ENVIRONMENT.API_BASE_URL}${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': `${token}`,
      ...(options.headers || {}),
    },
    data: options.data,
    params: options.params, // Query parameters
    responseType: options.responseType || 'json',
  };

  try {
    const response: AxiosResponse = await axios(axiosConfig);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response?.status === 401) {
      // Token expirado o inválido
      console.log('Token expirado o inválido');
      localStorage.removeItem('token');
      onRemoveSession();
      throw new Error('Sesión expirada');
    }

    const status = axiosError.response?.status || 500;
    const statusText = axiosError.response?.statusText || 'Error desconocido';
    throw new Error(`Error en la API: ${status} - ${statusText}`);
  }
};
