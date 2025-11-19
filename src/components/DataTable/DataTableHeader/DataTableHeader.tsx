import { flexRender, Header } from '@tanstack/react-table';

import { cn } from '@/utils/styles/cn';

import { SortableDataTableHeader } from '../SortableDataTableHeader/SortableDataTableHeader';
import { DataTableHeaderProps } from './types';

const DataTableHeader = <TData,>({
  table,
  headClassName,
}: DataTableHeaderProps<TData>) => {
  const headerGroups = table.getHeaderGroups();

  const getContent = (header: Header<TData, unknown>) =>
    header.isPlaceholder
      ? null
      : flexRender(header.column.columnDef.header, header.getContext());

  return (
    <thead className="sticky top-0 z-10 table-fixed bg-white">
      {headerGroups.map(headerGroup => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return (
              <th
                key={header.id}
                id={header.id}
                style={{ width: `${header.getSize()}px` }}
                className={cn(
                  header.column.columnDef.meta !== undefined &&
                    'headClassName' in header.column.columnDef.meta
                    ? (header.column.columnDef?.meta?.headClassName as string)
                    : headClassName,
                )}
              >
                {header.column.getCanSort() ? (
                  <SortableDataTableHeader column={header.column} size="sm">
                    {getContent(header)}
                  </SortableDataTableHeader>
                ) : (
                  getContent(header)
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export { DataTableHeader };
// test comment
