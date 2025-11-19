import { createContext, useContext } from 'react';

import { generateMonthWeeks } from '@/utils/date/generateMonthWeeks';
import { cn } from '@/utils/styles/cn';

import { CalendarWeek } from '../CalendarWeek';
import { DaysHeader } from '../DaysHeader/DaysHeader';
import {
  CalendarMonthBodyProps,
  CalendarMonthContextValue,
  CalendarMonthHeaderProps,
  CalendarMonthProps,
  CalendarMonthWeeksProps,
} from './types';

const CalendarMonthContext = createContext<CalendarMonthContextValue | null>(
  null,
);

const useCalendarMonth = () => {
  const context = useContext(CalendarMonthContext);
  if (!context) {
    throw new Error(
      'CalendarMonth compound components must be used within CalendarMonth',
    );
  }
  return context;
};

const CalendarMonth = ({
  currentDate,
  selectedDate,
  onDayClick,
  renderDayContent,
  className = '',
  weekStartsOn = 6,
  children,
}: CalendarMonthProps) => {
  const monthWeeks = generateMonthWeeks(currentDate, weekStartsOn);

  const contextValue: CalendarMonthContextValue = {
    currentDate,
    selectedDate,
    onDayClick,
    monthWeeks,
    weekStartsOn,
  };

  return (
    <CalendarMonthContext.Provider value={contextValue}>
      <div
        className={cn(className)}
        role="grid"
        aria-label={`Calendario de ${currentDate.toLocaleDateString('es-ES', {
          month: 'long',
          year: 'numeric',
        })}`}
      >
        {children ? (
          children
        ) : (
          <>
            <DaysHeader weekStartsOn={weekStartsOn} />
            <div className="divide-y divide-gray-200">
              {monthWeeks.map((weekStart, index) => (
                <CalendarWeek
                  key={`week-${weekStart.toISOString()}-${index}`}
                  weekStart={weekStart}
                  currentMonth={currentDate}
                  selectedDate={selectedDate}
                  onDayClick={onDayClick}
                  renderDayContent={renderDayContent}
                  weekStartsOn={weekStartsOn}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </CalendarMonthContext.Provider>
  );
};

const CalendarMonthHeader = ({ className = '' }: CalendarMonthHeaderProps) => {
  const { weekStartsOn } = useCalendarMonth();
  return <DaysHeader weekStartsOn={weekStartsOn} className={className} />;
};

const CalendarMonthBody = ({
  children,
  className = '',
}: CalendarMonthBodyProps) => {
  return (
    <div className={`divide-y divide-gray-200 ${className}`}>{children}</div>
  );
};

const CalendarMonthWeeks = ({ children }: CalendarMonthWeeksProps) => {
  const { monthWeeks, currentDate, selectedDate, onDayClick, weekStartsOn } =
    useCalendarMonth();

  return (
    <>
      {monthWeeks.map((weekStart, index) =>
        children ? (
          <div key={`week-${weekStart.toISOString()}-${index}`}>
            {children(weekStart, index)}
          </div>
        ) : (
          <CalendarWeek
            key={`week-${weekStart.toISOString()}-${index}`}
            weekStart={weekStart}
            currentMonth={currentDate}
            selectedDate={selectedDate}
            onDayClick={onDayClick}
            weekStartsOn={weekStartsOn}
          />
        ),
      )}
    </>
  );
};

CalendarMonth.Header = CalendarMonthHeader;
CalendarMonth.Body = CalendarMonthBody;
CalendarMonth.Weeks = CalendarMonthWeeks;

export { CalendarMonth };
