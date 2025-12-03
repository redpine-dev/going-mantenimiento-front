import { z } from 'zod';

const measurementFormSchema = z.object({
  month: z
    .string()
    .nonempty('El mes es requerido')
    .refine(val => {
      const n = Number(val);
      return Number.isInteger(n) && n >= 1 && n <= 12;
    }, 'Mes inválido'),
  year: z.enum(['2025', '2026'], {
    required_error: 'El año es requerido',
    invalid_type_error: 'Año inválido',
  }),
  opening: z.string().nonempty('El opening es requerido'),
  good: z.number().min(0, 'Debe ser >= 0'),
  observation: z.number().min(0, 'Debe ser >= 0'),
  unsatisfactory: z.number().min(0, 'Debe ser >= 0'),
  danger: z.number().min(0, 'Debe ser >= 0'),
  unmeasured: z.number().min(0, 'Debe ser >= 0'),
});

export { measurementFormSchema };
