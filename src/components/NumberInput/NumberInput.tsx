/* eslint-disable react/display-name */
import { forwardRef } from 'react';

import { Input } from '@/components/ui/Input';

import { type NumberInputProps } from './types';

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <Input
        {...props}
        onKeyDown={e => {
          if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
          }
        }}
        onChange={e => {
          const output = parseInt(e.target.value, 10);
          onChange(isNaN(output) ? 0 : output);
        }}
        value={isNaN(value) ? '' : value.toString()}
        ref={ref}
        type="text"
        inputMode="numeric"
      />
    );
  },
);

export { NumberInput };
