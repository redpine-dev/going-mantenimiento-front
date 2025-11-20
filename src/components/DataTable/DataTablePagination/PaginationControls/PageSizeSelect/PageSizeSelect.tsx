import { type Table } from '@tanstack/react-table';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';

const PageSizeSelect = <TData,>({
  table,
  options = [20, 50, 100],
}: {
  table: Table<TData>;
  options?: number[];
}) => {
  return (
    <Select
      value={`${table.getState().pagination.pageSize}`}
      onValueChange={value => {
        table.setPageSize(Number(value));
      }}
    >
      <SelectTrigger className="h-8 w-[70px]">
        <SelectValue placeholder={table.getState().pagination.pageSize} />
      </SelectTrigger>
      <SelectContent side="top">
        {options.map(pageSize => (
          <SelectItem key={pageSize} value={`${pageSize}`}>
            {pageSize}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { PageSizeSelect };
