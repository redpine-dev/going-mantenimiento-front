const formatToCLP = (value: number, options: Intl.NumberFormatOptions = {}) => {
  const formatter = Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    ...options,
  });

  return formatter.format(value);
};

export { formatToCLP };
