import { formatToCLP } from '@/utils/currency/formatToCLP';

import { type CurrencyProps } from './types';

const Currency = ({
  fallbackValue = '-',
  emptyValue = '-',
  children: value,
}: CurrencyProps) => {
  if (value === '' || value === null || value === undefined) return emptyValue;

  const numberValue = Number(value);

  if (isNaN(numberValue)) return fallbackValue;

  return formatToCLP(numberValue);
};

export { Currency };
