import { Loader2 } from 'lucide-react';
import { createContext, useContext } from 'react';

import { cn } from '@/utils/styles/cn';

import {
  CalendarDayBadgeProps,
  CalendarDayContentProps,
  CalendarDayContextValue,
  CalendarDayFooterProps,
  CalendarDayHeaderProps,
  CalendarDayNumberProps,
  CalendarDayProps,
} from './types';

const CalendarDayContext = createContext<CalendarDayContextValue | null>(null);

const useCalendarDay = () => {
  const context = useContext(CalendarDayContext);
  if (!context) {
    throw new Error(
      'CalendarDay compound components must be used within CalendarDay',
    );
  }
  return context;
};

const CalendarDay = ({
  date,
  isCurrentMonth = true,
  isSelected = false,
  isToday = false,
  isDisabled = false,
  onClick,
  children,
  className = '',
  isLoading = false,
}: CalendarDayProps) => {
  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick(date);
    }
  };

  const contextValue: CalendarDayContextValue = {
    date,
    isCurrentMonth,
    isSelected,
    isToday,
    isDisabled,
  };

  return (
    <CalendarDayContext.Provider value={contextValue}>
      <div
        className={cn(
          'relative flex min-h-full cursor-pointer flex-col p-2 transition-all duration-200',
          isDisabled && 'cursor-not-allowed opacity-50',
          isSelected && 'bg-blue-50 ring-2 ring-blue-500',
          isToday && 'bg-blue-100 font-semibold',
          !isCurrentMonth && 'opacity-40',
          className,
        )}
        onClick={handleClick}
        role="gridcell"
        aria-label={`${date.toLocaleDateString()}`}
        aria-selected={isSelected}
        tabIndex={isDisabled ? -1 : 0}
        onKeyDown={e => {
          if (isDisabled) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader2 className="size-4 animate-spin" />
          </div>
        ) : (
          <>
            {children || (
              <>
                <div className="mb-2 flex items-start justify-between">
                  <span
                    className={cn(
                      'text-sm',
                      isToday && 'font-bold text-blue-600',
                      !isToday && 'text-gray-900',
                    )}
                  >
                    {date.getDate()}
                  </span>
                </div>
                <div className="flex-1 overflow-hidden"></div>
              </>
            )}
          </>
        )}
      </div>
    </CalendarDayContext.Provider>
  );
};

const CalendarDayNumber = ({ className = '' }: CalendarDayNumberProps) => {
  const { date, isToday } = useCalendarDay();

  return (
    <span
      className={cn(
        'text-sm',
        isToday && 'font-bold text-blue-600',
        !isToday && 'text-gray-900',
        className,
      )}
    >
      {date.getDate()}
    </span>
  );
};

const CalendarDayHeader = ({
  children,
  className = '',
}: CalendarDayHeaderProps) => {
  return (
    <div className={cn('mb-2 flex items-start justify-between', className)}>
      {children}
    </div>
  );
};

const CalendarDayContent = ({
  children,
  className = '',
}: CalendarDayContentProps) => {
  return (
    <div className={cn('flex-1 overflow-hidden', className)}>{children}</div>
  );
};

const CalendarDayFooter = ({
  children,
  className = '',
}: CalendarDayFooterProps) => {
  return (
    <div
      className={cn(
        'mt-auto flex items-center justify-center border-t border-gray-100 pt-2',
        className,
      )}
    >
      {children}
    </div>
  );
};

const CalendarDayBadge = ({
  children,
  variant = 'default',
  className = '',
}: CalendarDayBadgeProps) => {
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};

CalendarDay.Number = CalendarDayNumber;
CalendarDay.Header = CalendarDayHeader;
CalendarDay.Content = CalendarDayContent;
CalendarDay.Footer = CalendarDayFooter;
CalendarDay.Badge = CalendarDayBadge;

export { CalendarDay };
export type { CalendarDayProps };
