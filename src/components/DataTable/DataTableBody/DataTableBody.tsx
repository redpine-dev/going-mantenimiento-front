import { DataTableEmpty } from '../DataTableEmpty';
import { DataTableError } from '../DataTableError';
import { DataTableLoader } from '../DataTableLoader';
import { DataTableBodyProps } from './types';

const DataTableBody = <TData,>({
  isLoading,
  isError,
  table,
  onRetry,
  emptyMessage = 'No existen datos disponibles',
  children,
}: DataTableBodyProps<TData>) => {
  const rows = table.getRowModel().rows;
  const { pageSize } = table.getState().pagination;
  const cols = table.getVisibleLeafColumns().length;

  return (
    <tbody>
      {isLoading ? (
        <DataTableLoader colSpan={cols} rowAmount={pageSize} />
      ) : isError ? (
        <tr className="[&&]:hover:opacity-100 ">
          <td
            colSpan={cols}
            className="h-24 cursor-default text-center text-red-500"
          >
            <DataTableError onRetry={onRetry} />
          </td>
        </tr>
      ) : rows.length === 0 ? (
        <tr className="[&&]:hover:opacity-100">
          <td
            colSpan={cols}
            className="h-24 cursor-default text-center text-red-500"
          >
            <DataTableEmpty emptyMessage={emptyMessage} />
          </td>
        </tr>
      ) : (
        <>{children}</>
      )}
    </tbody>
  );
};

export { DataTableBody };
