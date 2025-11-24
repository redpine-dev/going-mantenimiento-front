import { z } from 'zod';

export const userFormSchema = z
  .object({
    username: z
      .string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
      .max(50, 'El nombre de usuario no puede exceder 50 caracteres')
      .trim(),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(100, 'La contraseña no puede exceder 100 caracteres')
      .optional()
      .or(z.literal('')),
    role: z.enum(['admin', 'client'], {
      required_error: 'Debes seleccionar un rol',
    }),
    clientId: z.string().optional().or(z.literal('')),
  })
  .refine(
    data => {
      // Si el rol es "client", clientId es requerido
      if (data.role === 'client') {
        return !!data.clientId && data.clientId.trim().length > 0;
      }
      return true;
    },
    {
      message: 'Debes seleccionar un cliente cuando el rol es "Cliente"',
      path: ['clientId'],
    },
  );

export const userFormSchemaCreate = userFormSchema.refine(
  data => {
    // En modo creación, la contraseña es obligatoria
    return !!data.password && data.password.trim().length >= 6;
  },
  {
    message: 'La contraseña es requerida',
    path: ['password'],
  },
);
