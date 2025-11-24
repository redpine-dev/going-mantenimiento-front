import { Button } from '@/components/ui/Button';

import { DataTableMessageProps } from './types';

const DataTableMessage = ({
  icon,
  action,
  actionMessage,
  message,
}: DataTableMessageProps) => {
  return (
    <div
      className="sticky left-0 flex w-full flex-col items-center justify-center"
      style={{
        width: `var(--container-width)`,
        height: `var(--container-height)`,
      }}
    >
      <div className="flex size-full   flex-col items-center justify-center gap-y-4 rounded-md bg-background p-4">
        {icon}
        <p className="text-wrap text-center text-muted-foreground">{message}</p>

        {action && (
          <Button
            variant="default"
            size={'sm'}
            onClick={action}
            id="btn-table-action"
          >
            {actionMessage}
          </Button>
        )}
      </div>
    </div>
  );
};

export { DataTableMessage };
