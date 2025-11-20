import { Client } from '../../domain/types';

export type ClientFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client?: Client;
  onSubmit: (data: ClientFormData) => void;
  isSubmitting: boolean;
};

export type ClientFormData = {
  name: string;
};
