import { Table } from '@tanstack/react-table';
import { useEffect } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/Pagination';

import { PageInput } from './PageInput';
import { PageSizeSelect } from './PageSizeSelect';

const PaginationControls = <TData,>({
  table,
  options,
}: {
  table: Table<TData>;
  options?: number[];
}) => {
  const { getState, setPageIndex, setPageSize } = table;
  const { pageIndex } = getState().pagination;

  useEffect(() => {
    setPageSize(20);
  }, [setPageSize]);

  const onPreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };

  const onNextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const isInFirstPage = pageIndex === 0;

  return (
    <Pagination>
      <PaginationContent>
        <PageSizeSelect table={table} options={options} />
        <PaginationPrevious onClick={onPreviousPage} isActive={isInFirstPage} />
        <PageInput table={table} />
        <PaginationNext onClick={onNextPage} />
      </PaginationContent>
    </Pagination>
  );
};

export { PaginationControls };
