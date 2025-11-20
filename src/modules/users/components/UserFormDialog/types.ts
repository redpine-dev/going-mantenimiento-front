import { User } from '@/modules/users/domain/types';

export type UserFormData = {
  username: string;
  password?: string;
  role: 'admin' | 'client';
  clientId?: string;
};

export type UserFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: User;
  onSubmit: (data: UserFormData) => void;
  isSubmitting: boolean;
};
