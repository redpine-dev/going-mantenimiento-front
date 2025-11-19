import { Skeleton } from '@/components/ui/Skeleton';
import { createArrayOfNumbers } from '@/utils/array';
import { cn } from '@/utils/styles/cn';

import { DataTableLoaderProps } from './types';

const ARRAY_START_NUMBER = 0;
const DELAY_FACTOR = 400;

const DataTableLoader = ({
  colSpan,
  className,
  rowAmount = 1,
}: DataTableLoaderProps) => {
  const rows = createArrayOfNumbers(rowAmount, ARRAY_START_NUMBER);
  return rows.map(index => {
    return (
      <tr
        key={`loader_row_${index}`}
        className={cn('opacity-0 duration-100')}
        style={{
          animationDelay: `${DELAY_FACTOR * index}ms`,
        }}
      >
        <td className={cn(className)} key={`${index}`} colSpan={colSpan}>
          <Skeleton className="h-[1em] w-full" />
        </td>
      </tr>
    );
  });
};

export { DataTableLoader };
