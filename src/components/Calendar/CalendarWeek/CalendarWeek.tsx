import { createContext, useContext } from 'react';

import { generateWeekDays } from '@/utils/date/generateWeekDays';

import { CalendarDay } from '../CalendarDay';
import {
  CalendarWeekContextValue,
  CalendarWeekDaysProps,
  CalendarWeekProps,
} from './types';

const CalendarWeekContext = createContext<CalendarWeekContextValue | null>(
  null,
);

const useCalendarWeek = () => {
  const context = useContext(CalendarWeekContext);
  if (!context) {
    throw new Error(
      'CalendarWeek compound components must be used within CalendarWeek',
    );
  }
  return context;
};

const CalendarWeek = ({
  weekStart,
  currentMonth,
  selectedDate,
  onDayClick,
  renderDayContent,
  className = '',
  weekStartsOn = 6,
  children,
}: CalendarWeekProps) => {
  const weekDays = generateWeekDays(weekStart);
  const today = new Date();

  const contextValue: CalendarWeekContextValue = {
    weekStart,
    currentMonth,
    selectedDate,
    weekDays,
    onDayClick,
    weekStartsOn,
  };

  const isCurrentMonth = (date: Date): boolean => {
    if (!currentMonth) return true;
    return (
      date.getMonth() === currentMonth.getMonth() &&
      date.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <CalendarWeekContext.Provider value={contextValue}>
      <div className={`grid grid-cols-7 ${className}`} role="row">
        {children
          ? children
          : weekDays.map((date, index) => (
              <CalendarDay
                key={`${date.toISOString()}-${index}`}
                date={date}
                isCurrentMonth={isCurrentMonth(date)}
                isSelected={isSelected(date)}
                isToday={isToday(date)}
                onClick={onDayClick}
              >
                {renderDayContent?.(date)}
              </CalendarDay>
            ))}
      </div>
    </CalendarWeekContext.Provider>
  );
};

const CalendarWeekDays = ({ children }: CalendarWeekDaysProps) => {
  const { weekDays, currentMonth, selectedDate, onDayClick } =
    useCalendarWeek();
  const today = new Date();

  const isCurrentMonth = (date: Date): boolean => {
    if (!currentMonth) return true;
    return (
      date.getMonth() === currentMonth.getMonth() &&
      date.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  return (
    <>
      {weekDays.map((date, index) => (
        <CalendarDay
          key={`${date.toISOString()}-${index}`}
          date={date}
          isCurrentMonth={isCurrentMonth(date)}
          isSelected={isSelected(date)}
          isToday={isToday(date)}
          onClick={onDayClick}
        >
          {children(date, index)}
        </CalendarDay>
      ))}
    </>
  );
};

CalendarWeek.Days = CalendarWeekDays;

export { CalendarWeek };
export type { CalendarWeekProps };
