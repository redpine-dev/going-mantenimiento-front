import { Slot } from '@radix-ui/react-slot';
import { type ComponentPropsWithoutRef, forwardRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { cn } from '@/utils/styles/cn';

const GoBackButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'> & { asChild?: boolean; to?: string }
>(({ asChild = false, children, className, to, ...props }, ref) => {
  const navigate = useNavigate();

  const Comp = asChild ? Slot : 'button';

  const handleClick = useCallback(() => {
    if (to !== undefined) {
      navigate(to);
    } else {
      navigate(-1);
    }
  }, [navigate, to]);

  return (
    <Comp
      {...props}
      disabled={props.disabled}
      className={cn(
        'inline-flex w-fit items-center justify-center gap-2',
        'text-sm text-muted-foreground hover:[&>*]:underline',
        className,
      )}
      ref={ref}
      onClick={handleClick}
    >
      {children}
    </Comp>
  );
});

GoBackButton.displayName = 'GoBackButton';

export { GoBackButton };
