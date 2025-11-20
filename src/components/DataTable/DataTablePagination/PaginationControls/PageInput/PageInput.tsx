import { useEffect, useState } from 'react';

import { NumberInput } from '@/components/NumberInput';
import { useDebounceFunction } from '@/modules/shared/hooks/useDebounceFunction';

import { PageInputProps } from './types';

const PageInput = <TData,>({ table }: PageInputProps<TData>) => {
  const [pageValue, setPageValue] = useState<number>(1);

  const page = table.getState().pagination.pageIndex + 1;
  const { setPageIndex: setPage } = table;
  const debouncedSetPage = useDebounceFunction((pageValue: number) => {
    setPage(pageValue - 1);
  }, 500);

  const onChangePage = (value: number) => {
    setPageValue(value);

    if (value > 0) {
      debouncedSetPage(value);
    }
  };

  useEffect(() => {
    setPageValue(page);
  }, [page]);

  return (
    <NumberInput
      value={pageValue}
      onChange={onChangePage}
      className="w-10 [&_*]:text-center"
    />
  );
};

export { PageInput };
