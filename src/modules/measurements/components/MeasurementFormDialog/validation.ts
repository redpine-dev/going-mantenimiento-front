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
  // Campos de estado originales
  good: z.number().min(0, 'Debe ser >= 0'),
  observation: z.number().min(0, 'Debe ser >= 0'),
  unsatisfactory: z.number().min(0, 'Debe ser >= 0'),
  danger: z.number().min(0, 'Debe ser >= 0'),
  unmeasured: z.number().min(0, 'Debe ser >= 0'),
  // Campos de diagnóstico (todos obligatorios)
  coupling: z.number().min(0, 'Debe ser >= 0'),
  mounting: z.number().min(0, 'Debe ser >= 0'),
  externalCause: z.number().min(0, 'Debe ser >= 0'),
  cavitation: z.number().min(0, 'Debe ser >= 0'),
  bearing: z.number().min(0, 'Debe ser >= 0'),
  plainBearing: z.number().min(0, 'Debe ser >= 0'),
  belts: z.number().min(0, 'Debe ser >= 0'),
  structuralDeficiency: z.number().min(0, 'Debe ser >= 0'),
  misalignment: z.number().min(0, 'Debe ser >= 0'),
  unbalance: z.number().min(0, 'Debe ser >= 0'),
  componentWear: z.number().min(0, 'Debe ser >= 0'),
  shaft: z.number().min(0, 'Debe ser >= 0'),
  electrical: z.number().min(0, 'Debe ser >= 0'),
  gear: z.number().min(0, 'Debe ser >= 0'),
  aerodynamicForces: z.number().min(0, 'Debe ser >= 0'),
  hydraulicForces: z.number().min(0, 'Debe ser >= 0'),
  lubrication: z.number().min(0, 'Debe ser >= 0'),
  operational: z.number().min(0, 'Debe ser >= 0'),
  productLoss: z.number().min(0, 'Debe ser >= 0'),
  resonance: z.number().min(0, 'Debe ser >= 0'),
  friction: z.number().min(0, 'Debe ser >= 0'),
  rollingBearing: z.number().min(0, 'Debe ser >= 0'),
  sensorNoSignal: z.number().min(0, 'Debe ser >= 0'),
  safety: z.number().min(0, 'Debe ser >= 0'),
  noTechnicalInfo: z.number().min(0, 'Debe ser >= 0'),
  mechanicalLooseness: z.number().min(0, 'Debe ser >= 0'),
  powerTransmission: z.number().min(0, 'Debe ser >= 0'),
});

export { measurementFormSchema };
