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
  good: number | '';
  observation: number | '';
  unsatisfactory: number | '';
  danger: number | '';
  unmeasured: number | '';
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
      month: '',
      year: '',
      opening: presetOpening ?? '',
      good: 0,
      observation: 0,
      unsatisfactory: 0,
      danger: 0,
      unmeasured: 0,
    },
  });

  const total = form
    .watch(['good', 'observation', 'unsatisfactory', 'danger', 'unmeasured'])
    .reduce<number>((acc, val) => acc + (Number(val) || 0), 0);

  const handleNumericChange =
    (onChange: (value: number | '') => void) =>
    (e: { target: { value: string } }) => {
      const value = e.target.value;
      onChange(value === '' ? '' : Number(value));
    };

  useEffect(() => {
    if (open) {
      // default period to current month and allowed year (2025/2026), fallback 2025
      const today = new Date();
      const currentYear = today.getFullYear();
      const yyyy =
        currentYear === 2025 || currentYear === 2026 ? currentYear : 2025;
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      form.reset({
        month: mm,
        year: String(yyyy),
        opening: presetOpening ?? '',
        good: 0,
        observation: 0,
        unsatisfactory: 0,
        danger: 0,
        unmeasured: 0,
      });
    }
  }, [open, form, presetOpening]);

  const handleSubmit = (data: FormValues) => {
    // Ensure numeric fields are numbers and required
    onSubmit({
      year: Number(data.year),
      month: Number(data.month),
      opening: data.opening,
      good: Number(data.good),
      observation: Number(data.observation),
      unsatisfactory: Number(data.unsatisfactory),
      danger: Number(data.danger),
      unmeasured: Number(data.unmeasured),
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Medición</DialogTitle>
          <DialogDescription>
            Registra una nueva medición para el cliente seleccionado.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
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
                          <SelectValue placeholder="Selecciona mes" />
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
                          <SelectValue placeholder="Selecciona año" />
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
            </div>

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
                      placeholder="Nombre de la apertura"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="good"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bueno</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={handleNumericChange(field.onChange)}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="observation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Observación</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={handleNumericChange(field.onChange)}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unsatisfactory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insatisfactorio</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={handleNumericChange(field.onChange)}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="danger"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Peligro</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={handleNumericChange(field.onChange)}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unmeasured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>No Medido</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={handleNumericChange(field.onChange)}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-end">
              <p className="text-sm font-medium">Total registros: {total}</p>
            </div>

            <DialogFooter>
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
                disabled={isSubmitting || !clientId || total <= 0}
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
