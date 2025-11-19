import ENVIRONMENT from '@/lib/environment';
import { User } from '@/modules/auth/domain/types';

const login = async (username: string, password: string): Promise<User> => {
  const response = await fetch(`${ENVIRONMENT.API_BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ name: username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Error al iniciar sesión');
  }

  const data = await response.json();

  const { user, token } = data;

  localStorage.setItem('auth_token', token);
  return user;
};

export { login };
