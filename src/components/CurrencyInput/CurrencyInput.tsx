import React, { forwardRef, useCallback, useEffect, useState } from 'react';

import { cn } from '@/utils/styles/cn';

import { Input } from '../ui/Input';

interface CurrencyInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
  > {
  value?: number;
  onChange?: (value: number) => void;
  currency?: string;
  locale?: string;
  allowNegative?: boolean;
  maxValue?: number;
  minValue?: number;
}

const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      value = 0,
      onChange,
      currency = 'CLP',
      locale = 'es-CL',
      allowNegative = false,
      maxValue,
      minValue = 0,
      className,
      placeholder = '$ 0',
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [displayValue, setDisplayValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    // Formatear número a moneda chilena
    const formatCurrency = useCallback(
      (amount: number): string => {
        if (amount === 0) return '';

        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(amount);
      },
      [locale, currency],
    );

    // Extraer solo números del string
    const parseNumber = (str: string): number => {
      const cleaned = str.replace(/[^\d-]/g, '');
      const num = parseInt(cleaned) || 0;

      // Aplicar límites
      if (maxValue !== undefined && num > maxValue) return maxValue;
      if (minValue !== undefined && num < minValue) return minValue;
      if (!allowNegative && num < 0) return 0;

      return num;
    };

    // Actualizar display cuando el valor cambia externamente
    useEffect(() => {
      if (!isFocused) {
        setDisplayValue(formatCurrency(value));
      }
    }, [value, isFocused, formatCurrency]);

    // Manejar el cambio de input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setDisplayValue(inputValue);

      const numericValue = parseNumber(inputValue);
      onChange?.(numericValue);
    };

    // Manejar focus
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      // Mostrar solo el número cuando está enfocado
      setDisplayValue(value === 0 ? '' : value.toString());
      onFocus?.(e);
    };

    // Manejar blur
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      // Formatear cuando pierde el foco
      setDisplayValue(formatCurrency(value));
      onBlur?.(e);
    };

    return (
      <Input
        ref={ref}
        type="text"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={cn('text-right', className)}
        {...props}
      />
    );
  },
);

CurrencyInput.displayName = 'CurrencyInput';

export default CurrencyInput;
export type { CurrencyInputProps };
