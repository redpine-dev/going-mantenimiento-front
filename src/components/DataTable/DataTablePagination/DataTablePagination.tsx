import { Pagination } from '@/components/ui/Pagination';

import { PaginationControls } from './PaginationControls/PaginationControls';
import { DataTablePaginationProps } from './types';

const DataTablePagination = <TData,>({
  table,
  options,
}: DataTablePaginationProps<TData>) => {
  return (
    <div className="flex items-center ">
      <Pagination>
        <PaginationControls table={table} options={options} />
      </Pagination>
    </div>
  );
};

export { DataTablePagination };
