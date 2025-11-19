import { type ComponentPropsWithoutRef } from 'react';

import { type Tooltip } from '@/components/ui/Tooltip';

type EllipsisTextProps = ComponentPropsWithoutRef<typeof Tooltip> & {
  className?: string;
  asChild?: boolean;
};

export type { EllipsisTextProps };
