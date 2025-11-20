import { Client } from '../../domain/types';

export type DeleteClientDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  client: Client | null;
  onConfirm: () => void;
  isDeleting: boolean;
};
