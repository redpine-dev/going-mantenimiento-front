export type MeasurementFormData = {
  year: number;
  month: number;
  opening: string;
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
  presetOpening?: string;
};
