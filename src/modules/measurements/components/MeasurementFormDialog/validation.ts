import { z } from 'zod';

const measurementFormSchema = z.object({
  date: z.string().nonempty('La fecha es requerida'),
  good: z.number().min(0, 'Debe ser >= 0'),
  observation: z.number().min(0, 'Debe ser >= 0'),
  unsatisfactory: z.number().min(0, 'Debe ser >= 0'),
  danger: z.number().min(0, 'Debe ser >= 0'),
  unmeasured: z.number().min(0, 'Debe ser >= 0'),
});

export { measurementFormSchema };
