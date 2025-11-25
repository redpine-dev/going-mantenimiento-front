export type MeasurementFormData = {
  date: string;
  good: number;
  observation: number;
  unsatisfactory: number;
  danger: number;
  unmeasured: number;
};

export type MeasurementFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  clientId: string;
  onSubmit: (data: MeasurementFormData) => void;
  isSubmitting?: boolean;
};
