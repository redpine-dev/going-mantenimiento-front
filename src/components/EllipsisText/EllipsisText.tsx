import { Slot } from '@radix-ui/react-slot';
import { useCallback, useState } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import { cn } from '@/utils/styles/cn';

import { type EllipsisTextProps } from './types';

const EllipsisText = ({
  children,
  delayDuration = 300,
  className,
  asChild = false,
  ...props
}: EllipsisTextProps) => {
  const [open, setOpen] = useState(false);

  const Comp = asChild ? Slot : 'p';

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip
        delayDuration={delayDuration}
        {...props}
        open={open}
        onOpenChange={setOpen}
      >
        <TooltipTrigger
          className={cn('w-full max-w-fit truncate text-start', className)}
          asChild
          onClick={handleClick}
        >
          <Comp>{children}</Comp>
        </TooltipTrigger>
        <TooltipContent className="max-w-[280px] text-pretty">
          {children}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { EllipsisText };
