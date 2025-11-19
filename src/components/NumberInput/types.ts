import { ComponentProps } from 'react';

type NumberInputProps = Omit<ComponentProps<'input'>, 'value' | 'onChange'> & {
  value: number;
  onChange: (value: number) => void;
};

export type { NumberInputProps };
