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

import { MeasurementFormDialogProps } from './types';
import { measurementFormSchema } from './validation';

type FormValues = {
  date: string;
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
}: MeasurementFormDialogProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(measurementFormSchema),
    defaultValues: {
      date: '',
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
      // default date to today in yyyy-mm-dd
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      form.reset({
        date: `${yyyy}-${mm}-${dd}`,
        good: 0,
        observation: 0,
        unsatisfactory: 0,
        danger: 0,
        unmeasured: 0,
      });
    }
  }, [open, form]);

  const handleSubmit = (data: FormValues) => {
    // Normalize date to 12:00 local time for the selected day
    const normalizedDate =
      data.date && /^\d{4}-\d{2}-\d{2}$/.test(data.date)
        ? `${data.date}T12:00:00`
        : data.date;
    // Ensure numeric fields are numbers and required
    onSubmit({
      date: normalizedDate,
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
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} disabled={isSubmitting} />
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
              <Button type="submit" disabled={isSubmitting || !clientId}>
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
