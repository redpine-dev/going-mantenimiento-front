import { flexRender, Header } from '@tanstack/react-table';

import { TableHead } from '@/components/ui/Table/TableHead/TableHead';
import { TableHeader } from '@/components/ui/Table/TableHeader/TableHeader';
import { TableRow } from '@/components/ui/Table/TableRow/TableRow';
import { cn } from '@/utils/styles/cn';

import { SortableDataTableHeader } from '../SortableDataTableHeader';
import { DataTableHeaderProps } from './types';

const DataTableHeader = <TData,>({ table }: DataTableHeaderProps<TData>) => {
  const headerGroups = table.getHeaderGroups();

  const getContent = (header: Header<TData, unknown>) =>
    header.isPlaceholder
      ? null
      : flexRender(header.column.columnDef.header, header.getContext());

  return (
    <TableHeader>
      {headerGroups.map(headerGroup => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            return (
              <TableHead
                key={header.id}
                id={header.id}
                style={{ width: `${header.getSize()}px` }}
                className={cn(
                  header.column.columnDef.meta !== undefined &&
                    'headClassName' in header.column.columnDef.meta
                    ? (header.column.columnDef?.meta?.headClassName as string)
                    : '',
                )}
              >
                {header.column.getCanSort() ? (
                  <SortableDataTableHeader column={header.column} size="sm">
                    {getContent(header)}
                  </SortableDataTableHeader>
                ) : (
                  getContent(header)
                )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export { DataTableHeader };
