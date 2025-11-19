import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/Button';

import { DataTablePaginationProps } from './types';

const DataTablePagination = ({
  pagination,
  onPreviousPage,
  onNextPage,
  disabled = false,
}: DataTablePaginationProps) => {
  const { hasPrevPage, hasNextPage } = pagination;

  return (
    <div className="flex items-center justify-between space-x-4 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={onPreviousPage}
        disabled={disabled || !hasPrevPage}
      >
        <ChevronLeft className="size-4" />
        Anterior
      </Button>
      <div className="text-sm text-gray-500">
        Página {pagination.page} de {pagination.totalPages}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onNextPage}
        disabled={disabled || !hasNextPage}
      >
        Siguiente
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
};

export { DataTablePagination };
