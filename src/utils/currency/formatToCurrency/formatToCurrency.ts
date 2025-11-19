import { formatToCLP } from '../formatToCLP';

export type CurrencyFormat = 'full';

const formatFunctions: Record<CurrencyFormat, (value: number) => string> = {
  full: formatToCLP,
};

const formatToCurrency = (value: number, format: CurrencyFormat = 'full') => {
  const formatter = formatFunctions[format];
  return formatter(value);
};

export { formatToCurrency };
