import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog/Dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Input/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

import { MeasurementFormDialogProps } from './types';
import { measurementFormSchema } from './validation';

type FormValues = {
  month: string;
  year: string;
  opening: string;
  // Campos de estado originales
  good: number | '';
  observation: number | '';
  unsatisfactory: number | '';
  danger: number | '';
  unmeasured: number | '';
  // Campos de diagnóstico
  coupling: number | '';
  mounting: number | '';
  externalCause: number | '';
  cavitation: number | '';
  bearing: number | '';
  plainBearing: number | '';
  belts: number | '';
  structuralDeficiency: number | '';
  misalignment: number | '';
  unbalance: number | '';
  componentWear: number | '';
  shaft: number | '';
  electrical: number | '';
  gear: number | '';
  aerodynamicForces: number | '';
  hydraulicForces: number | '';
  lubrication: number | '';
  operational: number | '';
  productLoss: number | '';
  resonance: number | '';
  friction: number | '';
  rollingBearing: number | '';
  sensorNoSignal: number | '';
  safety: number | '';
  noTechnicalInfo: number | '';
  mechanicalLooseness: number | '';
  powerTransmission: number | '';
};

const diagnosticFields = [
  { name: 'coupling', label: 'Acoplamiento' },
  { name: 'mounting', label: 'Anclaje' },
  { name: 'externalCause', label: 'Causa Externa' },
  { name: 'cavitation', label: 'Cavitación' },
  { name: 'bearing', label: 'Cojinete' },
  { name: 'plainBearing', label: 'Cojinetes Planos' },
  { name: 'belts', label: 'Correas' },
  { name: 'structuralDeficiency', label: 'Defic. Estructural' },
  { name: 'misalignment', label: 'Desalineación' },
  { name: 'unbalance', label: 'Desbalanceo' },
  { name: 'componentWear', label: 'Desgaste Comp.' },
  { name: 'shaft', label: 'Eje' },
  { name: 'electrical', label: 'Eléctrico' },
  { name: 'gear', label: 'Engrane' },
  { name: 'aerodynamicForces', label: 'Fuerzas Aerodin.' },
  { name: 'hydraulicForces', label: 'Fuerzas Hidráulicas' },
  { name: 'lubrication', label: 'Lubricación' },
  { name: 'operational', label: 'Operacional' },
  { name: 'productLoss', label: 'Pérdida Producto' },
  { name: 'resonance', label: 'Resonancia' },
  { name: 'friction', label: 'Roce' },
  { name: 'rollingBearing', label: 'Rodamiento' },
  { name: 'sensorNoSignal', label: 'Sensor Sin Señal' },
  { name: 'safety', label: 'Seguridad' },
  { name: 'noTechnicalInfo', label: 'Sin Info. Técnica' },
  { name: 'mechanicalLooseness', label: 'Soltura Mecánica' },
  { name: 'powerTransmission', label: 'Transm. Potencia' },
] as const;

const statusFields = [
  { name: 'good', label: 'Bueno' },
  { name: 'observation', label: 'Observación' },
  { name: 'unsatisfactory', label: 'Insatisfactorio' },
  { name: 'danger', label: 'Peligro' },
  { name: 'unmeasured', label: 'No Medido' },
] as const;

const defaultFormValues: FormValues = {
  month: '',
  year: '',
  opening: '',
  good: 0,
  observation: 0,
  unsatisfactory: 0,
  danger: 0,
  unmeasured: 0,
  coupling: 0,
  mounting: 0,
  externalCause: 0,
  cavitation: 0,
  bearing: 0,
  plainBearing: 0,
  belts: 0,
  structuralDeficiency: 0,
  misalignment: 0,
  unbalance: 0,
  componentWear: 0,
  shaft: 0,
  electrical: 0,
  gear: 0,
  aerodynamicForces: 0,
  hydraulicForces: 0,
  lubrication: 0,
  operational: 0,
  productLoss: 0,
  resonance: 0,
  friction: 0,
  rollingBearing: 0,
  sensorNoSignal: 0,
  safety: 0,
  noTechnicalInfo: 0,
  mechanicalLooseness: 0,
  powerTransmission: 0,
};

const MeasurementFormDialog = ({
  open,
  onOpenChange,
  clientId,
  onSubmit,
  isSubmitting,
  presetOpening,
}: MeasurementFormDialogProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(measurementFormSchema),
    defaultValues: {
      ...defaultFormValues,
      opening: presetOpening ?? '',
    },
  });

  const statusTotal = form
    .watch(['good', 'observation', 'unsatisfactory', 'danger', 'unmeasured'])
    .reduce<number>((acc, val) => acc + (Number(val) || 0), 0);

  const diagnosticTotal = form
    .watch(diagnosticFields.map(f => f.name))
    .reduce<number>((acc, val) => acc + (Number(val) || 0), 0);

  const handleNumericChange =
    (onChange: (value: number | '') => void) =>
    (e: { target: { value: string } }) => {
      const value = e.target.value;
      onChange(value === '' ? '' : Number(value));
    };

  useEffect(() => {
    if (open) {
      const today = new Date();
      const currentYear = today.getFullYear();
      const yyyy =
        currentYear === 2025 || currentYear === 2026 ? currentYear : 2025;
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      form.reset({
        ...defaultFormValues,
        month: mm,
        year: String(yyyy),
        opening: presetOpening ?? '',
      });
    }
  }, [open, form, presetOpening]);

  const handleSubmit = (data: FormValues) => {
    onSubmit({
      year: Number(data.year),
      month: Number(data.month),
      opening: data.opening,
      good: Number(data.good),
      observation: Number(data.observation),
      unsatisfactory: Number(data.unsatisfactory),
      danger: Number(data.danger),
      unmeasured: Number(data.unmeasured),
      coupling: Number(data.coupling),
      mounting: Number(data.mounting),
      externalCause: Number(data.externalCause),
      cavitation: Number(data.cavitation),
      bearing: Number(data.bearing),
      plainBearing: Number(data.plainBearing),
      belts: Number(data.belts),
      structuralDeficiency: Number(data.structuralDeficiency),
      misalignment: Number(data.misalignment),
      unbalance: Number(data.unbalance),
      componentWear: Number(data.componentWear),
      shaft: Number(data.shaft),
      electrical: Number(data.electrical),
      gear: Number(data.gear),
      aerodynamicForces: Number(data.aerodynamicForces),
      hydraulicForces: Number(data.hydraulicForces),
      lubrication: Number(data.lubrication),
      operational: Number(data.operational),
      productLoss: Number(data.productLoss),
      resonance: Number(data.resonance),
      friction: Number(data.friction),
      rollingBearing: Number(data.rollingBearing),
      sensorNoSignal: Number(data.sensorNoSignal),
      safety: Number(data.safety),
      noTechnicalInfo: Number(data.noTechnicalInfo),
      mechanicalLooseness: Number(data.mechanicalLooseness),
      powerTransmission: Number(data.powerTransmission),
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar Medición</DialogTitle>
          <DialogDescription>
            Registra una nueva medición para el cliente seleccionado.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Fecha y Apertura */}
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mes</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Mes" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) =>
                            String(i + 1).padStart(2, '0'),
                          ).map(m => (
                            <SelectItem key={m} value={m}>
                              {m}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Año</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Año" />
                        </SelectTrigger>
                        <SelectContent>
                          {['2025', '2026'].map(y => (
                            <SelectItem key={y} value={y}>
                              {y}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="opening"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apertura</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        disabled={isSubmitting || !!presetOpening}
                        placeholder="Apertura"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Campos de Estado */}
            <div className="space-y-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                  Estado de Equipos
                </h3>
                <div className="rounded-md bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                  Status Total: {statusTotal}
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {statusFields.map(field => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel className="text-xs">{field.label}</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            {...formField}
                            onChange={handleNumericChange(formField.onChange)}
                            disabled={isSubmitting}
                            className="h-9"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Campos de Diagnóstico */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                  Diagnóstico
                </h3>
                <span className="text-sm text-muted-foreground">
                  Total: {diagnosticTotal}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {diagnosticFields.map(field => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name}
                    render={({ field: formField }) => (
                      <FormItem>
                        <FormLabel className="text-xs">{field.label}</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            {...formField}
                            onChange={handleNumericChange(formField.onChange)}
                            disabled={isSubmitting}
                            className="h-9"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>

            <DialogFooter className="flex gap-2 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !clientId || statusTotal <= 0}
              >
                {isSubmitting ? 'Guardando...' : 'Guardar'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export { MeasurementFormDialog };
